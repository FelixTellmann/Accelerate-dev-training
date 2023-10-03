import { scrollToX } from "utils";

export const initSlideshowNew = async () => {
  document.querySelectorAll<HTMLElement>("[data-slideshow-new]").forEach((slider) => {
    const autoRotate = slider.dataset.slideshowAutoRotate === "true";
    const container = slider.querySelector<HTMLElement>("[data-slideshow-container]");
    const buttons = slider.querySelectorAll<HTMLButtonElement>("[data-slideshow-button]");
    const slides = [...slider.querySelectorAll<HTMLElement>("[data-slideshow-slide]")];
    const slidesVisible = container?.scrollWidth / container?.clientWidth;
    const rotateRef = { current: null };

    const handleResize = () => {
      clearInterval(rotateRef.current);
      const currentIndex = slides.findIndex(
        (slide) =>
          slide.offsetLeft < container.scrollLeft + 50 &&
          slide.offsetLeft > container.scrollLeft - 50
      );

      if (slides.length > 1 && slidesVisible > 1 && autoRotate && currentIndex !== -1) {
        const rotateDuration = +buttons[currentIndex].dataset.slideshowSlideDuration;

        buttons.forEach((button) => {
          button.classList.remove("active");
        });
        setTimeout(
          () => {
            buttons[currentIndex].classList.add("active");
          },
          2
        );

        rotateRef.current = setInterval(
          () => {
            const nextPosition = container?.scrollLeft + container?.clientWidth;

            buttons.forEach((button) => {
              button?.classList.remove("active");
            });

            container?.classList.remove("snap-mandatory", "snap-x");
            scrollToX(
              250,
              nextPosition - 50 >= container.scrollWidth - container.clientWidth ? 0 : nextPosition,
              container,
              () => {
                setTimeout(
                  () => {
                    const nextIndex = slides.findIndex(
                      (slide) =>
                        slide.offsetLeft < container.scrollLeft + 50 &&
                        slide.offsetLeft > container.scrollLeft - 50
                    );

                    buttons[nextIndex]?.classList.add("active");
                    container?.classList.add("snap-mandatory", "snap-x");
                  },
                  10
                );
              }
            );
          },
          rotateDuration * 1000
        );
      }
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonIndex = +button.dataset.slideshowButton;
        const targetPosition = slides[buttonIndex].offsetLeft;

        if (targetPosition === container.scrollLeft) return;

        container.classList.remove("snap-mandatory", "snap-x");
        scrollToX(250, targetPosition, container, () => {
          container.classList.add("snap-mandatory", "snap-x");
          button.classList.add("active");
          handleResize();
        });
      });
    });

    handleResize();
    window.addEventListener("resize", handleResize);
    document.addEventListener("scroll-slider-update", handleResize);
    container.addEventListener("scroll", handleResize);
  });
};
