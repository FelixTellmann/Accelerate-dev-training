/* Add JavaScript Here*/

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const serializeForm = (formElement) => {
  const obj = {};
  const formData = new FormData(formElement);
  for (const key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return obj;
};

const loadingSpinnerSvg = `<div class="inset-0 pointer-events-none absolute z-50 h-full w-full transition-all duration-75">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 2"
        preserveAspectRatio="xMidYMid"
        class="absolute left-1/2 top-1/2 h-full w-14 -translate-x-1/2 -translate-y-1/2 "
      >
        <g transform="translate(20 1)">
          <circle cx="0" cy="0" r="6" fill="currentColor">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.375s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
        </g>
        <g transform="translate(40 1)">
          <circle cx="0" cy="0" r="6" fill="currentColor">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.25s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
        </g>
        <g transform="translate(60 1)">
          <circle cx="0" cy="0" r="6" fill="currentColor">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.125s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
        </g>
        <g transform="translate(80 1)">
          <circle cx="0" cy="0" r="6" fill="currentColor">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="0s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
        </g>
      </svg>`;

document.addEventListener("DOMContentLoaded", async () => {
  if (!/\/collections\//gi.test(window.request_path)) return;
  const formElementIds = [];

  const observer = new MutationObserver((mutationEvent) => {
    mutationEvent?.forEach((record) =>
      record.addedNodes.forEach(async (node) => {
        if (node instanceof HTMLElement) {
          const formElement = node.querySelector(`form[action="/cart/add"]`);
          if (!formElement || formElementIds.includes(formElement.id)) return;
          formElementIds.push(formElement.id);
          const formButton = formElement.querySelector("button");
          const formButtonContent = formElement.querySelector("button span");

          formElement.addEventListener("submit", async (event) => {
            event.preventDefault();
            event.stopPropagation();
            const formData = serializeForm(formElement);
            const loadingElement = document.createElement("div");
            formButton.classList.add("relative");
            loadingElement.innerHTML = loadingSpinnerSvg;
            const loadingSpinner = loadingElement.querySelector("div");
            formButton.appendChild(loadingSpinner);
            formButtonContent.style.opacity = "0";
            await window.cart.add({ items: [formData] }, true);
            formButton.removeChild(loadingSpinner);
            formButtonContent.style.opacity = "";
          });
        }
      })
    );
  });
  observer.observe(document, {
    subtree: true,
    childList: true,
  });

  const bodyObserver = new MutationObserver((mutationEvent) => {
    mutationEvent?.forEach((record) => {
      if (
        record.attributeName === "class" &&
        document.body.classList.contains("rebuy-modal-visible")
      ) {
        document.body.classList.remove("rebuy-modal-visible");
      }
    });
  });
  bodyObserver.observe(document.body, {
    attributes: true,
    attributeOldValue: true,
  });
});
