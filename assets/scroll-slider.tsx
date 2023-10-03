import { scrollToX } from "utils";

export const initScrollSlider = async () => {
  const sliders = document.querySelectorAll<HTMLElement>(
    "[data-scroll-slider]:not([data-initiated])"
  );

  sliders.forEach((slider) => {
    slider.setAttribute("data-initiated", "");
    initSlider(slider);
  });
};

function initSlider(slider: HTMLElement, reset = false) {
  const scrollContainer = slider.querySelector<HTMLElement>("[data-scroll-container]");
  const scrollItems = slider.querySelectorAll<HTMLElement>("[data-scroll-item]");
  const scrollControls = slider.querySelector<HTMLButtonElement>("[data-scroll-controls]");
  const prevButton = slider.querySelector<HTMLButtonElement>("[data-scroll-prev]");
  const nextButton = slider.querySelector<HTMLButtonElement>("[data-scroll-next]");
  const scrollBar = slider.querySelector<HTMLButtonElement>("[data-scroll-bar]");
  const scrollBarThumb = slider.querySelector<HTMLButtonElement>("[data-scroll-bar-thumb]");
  const scrollBarCountCurrent = slider.querySelector<HTMLButtonElement>(
    "[data-scroll-count-current]"
  );
  const scrollBarCountTotal = slider.querySelector<HTMLButtonElement>("[data-scroll-count-total]");
  const scrollTabButtons = slider.querySelectorAll<HTMLButtonElement>("[data-scroll-tab-button]");
  const alignButtons = slider?.dataset?.scrollSliderAlignButtons;
  const firstImage = slider.querySelector("[data-scroll-item] img");

  let manualScroll = false;
  if (!scrollContainer || scrollItems.length === 0) return;

  if (alignButtons && prevButton && nextButton && firstImage) {
    prevButton.style.marginTop = `${firstImage?.clientHeight / 2}px`;
    nextButton.style.marginTop = `${firstImage?.clientHeight / 2}px`;
  }

  const updateNavButtons = () => {
    if (prevButton && nextButton) {
      const { clientWidth, scrollWidth, scrollLeft } = scrollContainer;
      prevButton.style.opacity = scrollLeft > 0 ? "1" : "0";
      prevButton.style.pointerEvents = scrollLeft > 0 ? "inherit" : "none";
      nextButton.style.opacity = scrollLeft < scrollWidth - clientWidth - 1 ? "1" : "0";
      nextButton.style.pointerEvents =
        scrollLeft < scrollWidth - clientWidth - 1 ? "inherit" : "none";
    }
  };

  const updateTabButtons = () => {
    scrollTabButtons.forEach((button) => {
      const { left: containerLeft } = scrollContainer.getBoundingClientRect();
      const { paddingLeft } = getComputedStyle(scrollContainer);
      const basePosition = +paddingLeft.replace("px", "");

      const currentItemIndex = [...scrollItems].findIndex((element) => {
        const { left, width } = element.getBoundingClientRect();
        const itemLeft = left - containerLeft - 5;
        const itemRight = itemLeft + width + 5;
        return itemLeft <= basePosition && itemRight >= basePosition;
      });
      const buttonIndex = +button.dataset.scrollTabButton;

      if (currentItemIndex === buttonIndex) {
        button.classList.add("active");
      }
      if (currentItemIndex !== buttonIndex) {
        button.classList.remove("active");
      }
    });
  };

  const scrollToIndex = (index: number) => {
    if (manualScroll) return;
    const { left: containerLeft } = scrollContainer.getBoundingClientRect();
    const { paddingLeft } = getComputedStyle(scrollContainer);
    const basePosition = +paddingLeft.replace("px", "");

    const currentItemIndex = [...scrollItems].findIndex((element) => {
      const { left, width } = element.getBoundingClientRect();
      const itemLeft = left - containerLeft - 5;
      const itemRight = itemLeft + width + 5;
      return itemLeft <= basePosition && itemRight >= basePosition;
    });

    scrollContainer.classList.remove("snap-x");

    manualScroll = true;

    const { offsetLeft } = [...scrollItems][
      Math.min(Math.max(currentItemIndex + index, 0), scrollItems.length)
    ];
    scrollToX(200, offsetLeft - basePosition, scrollContainer, () => {
      scrollContainer.classList.add("snap-x");
      manualScroll = false;
      updateNavButtons();
      updateTabButtons();
    });
  };

  const scrollToFixedIndex = (index: number) => {
    if (manualScroll) return;
    const { left: containerLeft } = scrollContainer.getBoundingClientRect();
    const { paddingLeft } = getComputedStyle(scrollContainer);
    const basePosition = +paddingLeft.replace("px", "");

    scrollContainer.classList.remove("snap-x", "snap-mandatory");

    manualScroll = true;

    const { offsetLeft } = [...scrollItems][Math.min(Math.max(index, 0), scrollItems.length)];
    scrollToX(200, offsetLeft - basePosition, scrollContainer, () => {
      scrollContainer.classList.add("snap-x", "snap-mandatory");
      manualScroll = false;
      updateNavButtons();
      updateTabButtons();
    });
  };

  const handleClickPrev = (e) => {
    scrollToIndex(-1);
  };

  const handleClickNext = (e) => {
    scrollToIndex(1);
  };

  const handleClickTabButton = (e) => {
    const scrollIndex = +e.currentTarget.dataset.scrollTabButton;
    scrollToFixedIndex(scrollIndex);
  };

  const handleScroll = (e) => {
    if (manualScroll) return;
    updateNavButtons();
    updateTabButtons();
  };

  let pointerPosition = { startX: null, startLeft: 0 };
  let scrollbarProps = { width: 0, left: 0 };

  const handleScrollBarScrollEvent = () => {
    const scrollbarElement = scrollBar;
    if (!scrollbarElement) return;

    const containerWidth = scrollbarElement.offsetWidth;
    const { scrollWidth, scrollLeft } = scrollContainer;

    if (pointerPosition.startX === null && window.innerWidth) {
      scrollbarProps = {
        width: scrollContainer.offsetWidth / scrollWidth,
        left: (scrollLeft / scrollWidth) * containerWidth,
      };

      if (scrollBarThumb) {
        scrollBarThumb.style.width = `${(scrollContainer.offsetWidth / scrollWidth) * 100}%`;
        scrollBarThumb.style.transform = `translateY(-50%) translateX(${
          (scrollLeft / scrollWidth) * containerWidth
        }px)`;
      }

      const thumbWidth = scrollBar.offsetWidth * (scrollContainer.offsetWidth / scrollWidth);
      const scrollPercentage =
        ((scrollLeft / scrollWidth) * containerWidth) / (scrollBar.offsetWidth - thumbWidth);
      const scrollCount =
        Math.max(1, Math.floor(1 + (scrollPercentage * scrollItems.length - 0.05))) || 1;

      if (scrollBarCountCurrent && scrollBarCountTotal) {
        scrollBarCountCurrent.innerHTML = `${scrollCount}`;
        scrollBarCountTotal.innerHTML = `${scrollItems.length}`;
      }
    }
  };

  const handleScrollBarPointerDown = (e) => {
    if (pointerPosition.startX === null) {
      e.preventDefault();
      e.stopPropagation();
      pointerPosition = { startX: e.clientX, startLeft: scrollbarProps.left };
      document.body.classList.add("[&_*]:!pointer-events-none", "!cursor-grabbing");
      scrollContainer.classList.remove("snap-mandatory", "snap-x");

      document.addEventListener("pointerup", handleScrollBarPointerUp);
      document.addEventListener("pointermove", handleScrollBarPointerMove);
    }
  };

  const handleScrollBarPointerMove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const containerWidth = scrollBar!.offsetWidth;
    const { scrollWidth, scrollLeft } = scrollContainer;

    if (pointerPosition.startX !== null) {
      const innerWidth =
        scrollContainer.offsetWidth -
        +getComputedStyle(scrollContainer, null).paddingLeft.replace("px", "") -
        +getComputedStyle(scrollContainer, null).paddingRight.replace("px", "");

      const left = Math.min(
        Math.max(0, pointerPosition.startLeft + e.clientX - pointerPosition.startX),
        containerWidth - (innerWidth / scrollWidth) * containerWidth
      );

      scrollContainer.scrollTo({
        left: (left / containerWidth) * scrollWidth,
        // @ts-ignore
        behavior: "instant",
      });

      scrollbarProps = {
        width: scrollContainer.offsetWidth / scrollWidth,
        left: (scrollLeft / scrollWidth) * containerWidth,
      };

      if (scrollBarThumb) {
        scrollBarThumb.style.width = `${(scrollContainer.offsetWidth / scrollWidth) * 100}%`;
        scrollBarThumb.style.transform = `translateY(-50%) translateX(${
          (scrollLeft / scrollWidth) * containerWidth
        }px)`;
      }

      const thumbWidth = scrollBar.offsetWidth * (scrollContainer.offsetWidth / scrollWidth);
      const scrollPercentage =
        ((scrollLeft / scrollWidth) * containerWidth) / (scrollBar.offsetWidth - thumbWidth);
      const scrollCount =
        Math.max(1, Math.floor(1 + (scrollPercentage * scrollItems.length - 0.05))) || 1;

      if (scrollBarCountCurrent && scrollBarCountTotal) {
        scrollBarCountCurrent.innerHTML = `${scrollCount}`;
        scrollBarCountTotal.innerHTML = `${scrollItems.length}`;
      }
    }
  };

  const handleScrollBarPointerUp = (e) => {
    if (pointerPosition.startX !== null) {
      e.preventDefault();
      e.stopPropagation();
      pointerPosition = { startX: null, startLeft: scrollbarProps.left };
      document.body.classList.remove("[&_*]:!pointer-events-none", "!cursor-grabbing");
      scrollContainer.classList.add("snap-mandatory", "snap-x");
      document.removeEventListener("pointerup", handleScrollBarPointerUp);
      document.removeEventListener("pointermove", handleScrollBarPointerMove);
    }
  };

  const handleScrollBarClick = (e) => {
    if (pointerPosition.startX === null) {
      const containerWidth = scrollBar!.offsetWidth;
      const { scrollWidth } = scrollContainer;
      const thumbWidth = containerWidth / scrollWidth;
      const clickPosition = e.clientX - scrollBar!.getBoundingClientRect().left;
      const positionPercentage = clickPosition / containerWidth;

      const left = Math.min(
        Math.max(
          0,
          containerWidth * positionPercentage - thumbWidth * containerWidth * positionPercentage
        ),
        containerWidth - (containerWidth / scrollWidth) * containerWidth
      );

      scrollContainer.scrollTo({
        left: (left / containerWidth) * scrollWidth,
        // @ts-ignore
        behavior: "instant",
      });
    }
  };

  const stopPropagation = (e) => e.stopPropagation();

  const handleResize = async (e?: UIEvent, unmount = false) => {
    const { clientWidth, scrollWidth, scrollLeft } = scrollContainer;

    const sliderId = slider.dataset.scrollSlider;

    const removeEventListeners = () => {
      scrollContainer?.removeEventListener("scroll", handleScrollBarScrollEvent);
      scrollBarThumb?.removeEventListener("pointerdown", handleScrollBarPointerDown);
      scrollBarThumb?.removeEventListener("click", stopPropagation);
      scrollBar?.removeEventListener("click", handleScrollBarClick);
      prevButton?.removeEventListener("click", handleClickPrev);
      nextButton?.removeEventListener("click", handleClickNext);
      scrollContainer?.removeEventListener("scroll", handleScroll);
      scrollTabButtons.forEach((button) => {
        button?.removeEventListener("click", handleClickTabButton);
      });
      document.removeEventListener(`${sliderId}:unmount`, removeEventListeners);
    };

    if (sliderId) {
      document.addEventListener(`${sliderId}:unmount`, removeEventListeners);
    }

    if (scrollWidth <= clientWidth) {
      if (scrollControls) {
        scrollControls.classList.add("hidden");
        scrollContainer.classList.remove("scrollbar-none");
      }
    }

    if (scrollWidth > clientWidth && scrollBar && scrollBarThumb) {
      scrollContainer.addEventListener("scroll", handleScrollBarScrollEvent);

      scrollBarThumb.addEventListener("pointerdown", handleScrollBarPointerDown);

      scrollBarThumb.addEventListener("click", stopPropagation);

      scrollBar.addEventListener("click", handleScrollBarClick);
      handleScrollBarScrollEvent();
    }

    if (scrollWidth > clientWidth) {
      if (scrollControls) {
        scrollControls.classList.remove("hidden");
        scrollContainer.classList.add("scrollbar-none");
      }
      slider.classList.add("relative");
      scrollContainer.classList.add("relative");
      updateNavButtons();
      updateTabButtons();

      if (prevButton && nextButton) {
        prevButton.addEventListener("click", handleClickPrev);
        nextButton.addEventListener("click", handleClickNext);
      }

      scrollTabButtons.forEach((button) => {
        button.addEventListener("click", handleClickTabButton);
      });

      scrollContainer.addEventListener("scroll", handleScroll);
    }
  };

  window.addEventListener("resize", handleResize);
  document.addEventListener("scroll-slider-update", handleResize);
  // window.addEventListener("resize", handleResize);
  handleResize();
}
