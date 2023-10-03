function at(n) {
  // ToInteger() abstract op
  n = Math.trunc(n) || 0;
  // Allow negative indexing from the end
  if (n < 0) n += this.length;
  // OOB access is guaranteed to return undefined
  if (n < 0 || n >= this.length) return undefined;
  // Otherwise, this is just normal property access
  return this[n];
}

const TypedArray = Reflect.getPrototypeOf(Int8Array);

for (const C of [Array, String, TypedArray]) {
  if ("prototype" in C) {
    Object.defineProperty(C.prototype, "at", {
      value: at,
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }
}

type EaseInOutQuadOptions = {
  change: number;
  currentTime: number;
  duration: number;
  start: number;
};

const easeInOutQuad = ({ currentTime, start, change, duration }: EaseInOutQuadOptions) => {
  let newCurrentTime = currentTime;
  newCurrentTime /= duration / 2;

  if (newCurrentTime < 1) {
    return (change / 2) * newCurrentTime * newCurrentTime + start;
  }

  newCurrentTime -= 1;
  return (-change / 2) * (newCurrentTime * (newCurrentTime - 2) - 1) + start;
};

export const scrollToY = (
  duration: number,
  to: number,
  container: HTMLElement | Window = window,
  callback: () => void = () => {}
): void => {
  const start = container instanceof HTMLElement ? container.scrollTop : container.scrollY;

  const change = to - start;
  const startDate = new Date().getTime();

  const animateScroll = () => {
    const currentDate = new Date().getTime();
    const currentTime = currentDate - startDate;

    container.scrollTo(
      0,
      easeInOutQuad({
        currentTime,
        start,
        change,
        duration,
      })
    );

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      container.scrollTo(0, to);
      callback();
    }
  };
  animateScroll();
};

export const scrollToX = (
  duration: number,
  to: number,
  container: HTMLElement | Window = window,
  callback: () => void = () => {}
): void => {
  const start = container instanceof HTMLElement ? container.scrollLeft : container.scrollX;

  const change = to - start;
  const startDate = new Date().getTime();

  const animateScroll = () => {
    const currentDate = new Date().getTime();
    const currentTime = currentDate - startDate;

    container.scrollTo(
      easeInOutQuad({
        currentTime,
        start,
        change,
        duration,
      }),
      0
    );

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      container.scrollTo(to, 0);
      callback();
    }
  };
  animateScroll();
};

export const scrollToXY = (
  duration: number,
  x: number,
  y: number,
  container: HTMLElement | Window = window,
  callback: () => void = () => {}
): void => {
  const startX = container instanceof HTMLElement ? container.scrollLeft : container.scrollX;
  const startY = container instanceof HTMLElement ? container.scrollTop : container.scrollY;

  const changeX = x - startX;
  const changeY = y - startY;
  const startDate = Date.now();

  const animateScroll = () => {
    const currentDate = Date.now();
    const currentTime = currentDate - startDate;

    container.scrollTo(
      easeInOutQuad({
        currentTime,
        start: startX,
        change: changeX,
        duration,
      }),
      easeInOutQuad({
        currentTime,
        start: startY,
        change: changeY,
        duration,
      })
    );

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      container.scrollTo(x, y);
      callback();
    }
  };
  animateScroll();
};

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const debounce = (callback, wait = 1) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(
      () => {
        callback(...args);
      },
      wait
    );
  };
};

export type FocusElement =
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

window.trapFocusElement = null;
window.focusEls = null;

export const selectorString = `:not(.placeholder) a[href]:not(:where([disabled],[tabindex="-1"])),
              :not(.placeholder) button:not(:where([disabled],[tabindex="-1"])),
              :not(.placeholder) textarea:not(:where([disabled],[tabindex="-1"])),
              :not(.placeholder) input[type="text"]:not(:where([disabled],[tabindex="-1"])),
              :not(.placeholder) input[type="radio"]:not(:where([disabled],[tabindex="-1"])),
              :not(.placeholder) input[type="checkbox"]:not(:where([disabled],[tabindex="-1"])),
              :not(.placeholder) select:not(:where([disabled],[tabindex="-1"])),
              :not(.placeholder, [tabindex="-1"]) [tabindex]:not(:where([disabled],[tabindex="-1"])`;

const handleTrapFocusKeyboardEvents = (e) => {
  const isTabPressed = e.key === "Tab";

  if (!isTabPressed) {
    return;
  }

  window.focusEls = window.trapFocusElement?.querySelectorAll<FocusElement>(selectorString);

  const elArr = [...window.focusEls];
  const index = elArr.findIndex((item) => item === document.activeElement);

  if (e.shiftKey) {
    /* shift + tab */
    for (let nextIndex = index - 1; nextIndex >= -(elArr.length - index); nextIndex--) {
      if (isVisible(elArr.at(nextIndex))) {
        elArr.at(nextIndex).focus();
        e.preventDefault();
        break;
      }
    }
  } /* tab */

  if (!e.shiftKey) {
    for (let i = index - elArr.length + 1; i <= elArr.length - index; i++) {
      if (isVisible(elArr.at(i))) {
        elArr.at(i).focus();
        e.preventDefault();
        break;
      }
    }
  }
};

export const trapFocus = (element: HTMLElement) => {
  if (window.trapFocusElement) {
    window.trapFocusElement.removeEventListener("keydown", handleTrapFocusKeyboardEvents);
  }
  window.trapFocusElement = element;
  window.trapFocusElement.addEventListener("keydown", handleTrapFocusKeyboardEvents);
};

export const trapFocusOld = (element: HTMLElement) => {
  let focusableElements = element.querySelectorAll<FocusElement>(selectorString);

  element.addEventListener("keydown", (e) => {
    const isTabPressed = e.key === "Tab";

    if (!isTabPressed) {
      return;
    }
    focusableElements = element.querySelectorAll<FocusElement>(selectorString);

    const elArr = [...focusableElements];
    const index = elArr.findIndex((item) => item === document.activeElement);

    if (e.shiftKey) {
      /* shift + tab */
      for (let nextIndex = index - 1; nextIndex >= -(elArr.length - index); nextIndex--) {
        if (isVisible(elArr.at(nextIndex))) {
          elArr.at(nextIndex).focus();
          e.preventDefault();
          break;
        }
      }
    } /* tab */

    if (!e.shiftKey) {
      for (let i = index - elArr.length + 1; i <= elArr.length - index; i++) {
        if (isVisible(elArr.at(i))) {
          elArr.at(i).focus();
          e.preventDefault();
          break;
        }
      }
    }
  });
};

export const isVisible = (elem: HTMLElement, isParent = false) => {
  if (!(elem instanceof Element)) {
    return false;
  }
  const style = getComputedStyle(elem);
  if (style.display === "none") return false;
  if (!isParent && style.pointerEvents === "none") return false;
  if (style.visibility !== "visible") return false;
  if (+style.opacity < 0.1) return false;
  if (
    elem.offsetWidth +
      elem.offsetHeight +
      elem.getBoundingClientRect().height +
      elem.getBoundingClientRect().width ===
    0
  ) {
    return false;
  }
  if (elem.parentElement) {
    return isVisible(elem.parentElement, true);
  }
  return true;
};

export const isVisibleOld = (elem: HTMLElement) => {
  if (!(elem instanceof Element)) {
    return false;
  }
  const style = getComputedStyle(elem);
  if (style.display === "none") return false;
  if (style.visibility !== "visible") return false;
  if (+style.opacity < 0.1) return false;
  if (
    elem.offsetWidth +
      elem.offsetHeight +
      elem.getBoundingClientRect().height +
      elem.getBoundingClientRect().width ===
    0
  ) {
    return false;
  }
  const elemCenter = {
    x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
    y: elem.getBoundingClientRect().top + elem.offsetHeight / 2,
  };
  if (elemCenter.x < 0) return false;
  if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
  if (elemCenter.y < 0) return false;
  if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
  let pointContainer: Element | ParentNode = document.elementFromPoint(elemCenter.x, elemCenter.y);
  do {
    if (pointContainer === elem) return true;
  } while ((pointContainer = pointContainer.parentNode));
  return false;
};

export const formatMoney = (cents: number | string, money_format?: string) => {
  function n(t, e) {
    return void 0 === t ? e : t;
  }

  function o(t?: any, e?: any, o?: any, i?: any) {
    if (((e = n(e, 2)), (o = n(o, ",")), (i = n(i, ".")), isNaN(t) || null === t)) return 0;
    const r = (t = (t / 100).toFixed(e)).split(".");
    return r[0].replace(/(\\d)(?=(\\d\\d\\d)+(?!\\d))/g, `$1${o}`) + (r[1] ? i + r[1] : "");
  }

  "string" === typeof cents && (cents = cents.replace(".", ""));
  let i: any = "";
  const r = /{{\s*(\w+)\s*}}/;
  const a = money_format || window.shop.money_format || `\${{amount}}`;

  switch (a.match(r)[1]) {
    case "amount":
      i = o(cents, 2);
      break;
    case "amount_no_decimals":
      i = o(cents, 0);
      break;
    case "amount_with_comma_separator":
      i = o(cents, 2, ".", ",");
      break;
    case "amount_with_space_separator":
      i = o(cents, 2, " ", ",");
      break;
    case "amount_with_period_and_space_separator":
      i = o(cents, 2, " ", ".");
      break;
    case "amount_no_decimals_with_comma_separator":
      i = o(cents, 0, ".", ",");
      break;
    case "amount_no_decimals_with_space_separator":
      i = o(cents, 0, " ");
      break;
    case "amount_with_apostrophe_separator":
      i = o(cents, 2, "'", ".");
  }
  return a.replace(r, i);
};

window["formatMoney"] = formatMoney;

export const getScrollParentXY = (node) => {
  if (node === null) {
    return null;
  }

  if (node.scrollHeight > node.clientHeight || node.scrollWidth > node.clientWidth) {
    return node;
  } else {
    return getScrollParentXY(node.parentNode);
  }
};

export const getScrollParentX = (node) => {
  if (node === null) {
    return null;
  }

  if (node.scrollWidth > node.clientWidth) {
    return node;
  } else {
    return getScrollParentXY(node.parentNode);
  }
};

export const getScrollParentY = (node) => {
  if (node === null) {
    return null;
  }

  if (node.scrollHeight > node.clientHeight) {
    return node;
  } else {
    return getScrollParentXY(node.parentNode);
  }
};

export const getScrollParent = <T extends HTMLElement | Window>(
  element: HTMLElement,
  includeHidden = false
): T => {
  let style = getComputedStyle(element);
  const excludeStaticParent = style.position === "absolute";
  const overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;

  if (style.position === "fixed") return window as unknown as T;
  for (let parent = element; (parent = parent.parentElement); ) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === "static") {
      continue;
    }
    if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) return parent as T;
  }

  return window as unknown as T;
};

export const toKebabCase = (str: string) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");

export const toCamelCase = (str) =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/[\s-]+/gi, "");

export function isObject(x: any): x is Object {
  return x !== null && typeof x === "object";
}

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const toPascalCase = (str) => capitalize(toCamelCase(str));

export const toSnakeCase = (str: string) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("_");

export const colorNames = [
  "color",
  "colour",
  "couleur",
  "cor",
  "colore",
  "farbe",
  "색",
  "色",
  "カラー",
  "färg",
  "farve",
  "szín",
  "barva",
];

export const JSONParse = <T = unknown,>(object: any, origin = ""): T => {
  try {
    return JSON.parse(object);
  } catch (err) {
    return null;
  }
};

export const serializeFormWithGroups = (formElement) => {
  const obj = {};
  const formData = new FormData(formElement);
  for (const key of formData.keys()) {
    obj[key] = formData.getAll(key);
  }
  return obj as { [T: string]: string[] };
};

export const serializeForm = (formElement) => {
  const obj = {};
  const formData = new FormData(formElement);
  for (const key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return obj as { [T: string]: string[] };
};

export const shortUUID = () => {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  let firstPart: string | number = (Math.random() * 46656) | 0;
  let secondPart: string | number = (Math.random() * 46656) | 0;
  firstPart = `000${firstPart.toString(36)}`.slice(-3);
  secondPart = `000${secondPart.toString(36)}`.slice(-3);
  return firstPart + secondPart;
};

export function getCoords(elem: HTMLElement) {
  // crossbrowser version
  const box = elem.getBoundingClientRect();

  const body = document.body;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const top = box.top + scrollTop - clientTop;
  const left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}

export const isExternalUrl = (url: string): boolean => {
  const host = window?.location?.hostname;

  const linkHost = (function (url) {
    if (/^https?:?\/\//.test(url)) {
      const anchorElement = document.createElement("a");
      anchorElement.href = url;
      return anchorElement.hostname;
    } else {
      return window?.location?.hostname;
    }
  })(url);

  return host !== linkHost;
};

export const isNotSamePageUrl = (url: string): boolean => {
  if (isExternalUrl(url)) {
    return true;
  }

  const path = window.location.pathname;

  const linkPath = (function (url) {
    if (/^https?:?\/\//.test(url)) {
      const anchorElement = document.createElement("a");
      anchorElement.href = url;
      return anchorElement.pathname;
    } else {
      const anchorElement = document.createElement("a");
      anchorElement.href = window.location.origin + url;
      return anchorElement.pathname;
    }
  })(url);

  return path !== linkPath;
};
