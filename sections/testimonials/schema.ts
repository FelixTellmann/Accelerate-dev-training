import { sectionGlobals } from "globals/settings/section-globals";
import { fontTypeRange } from "globals/settings/type-range";
import { TestimonialsSection } from "types/sections";
import { ShopifySection } from "types/shopify";

export const testimonials: ShopifySection<TestimonialsSection> = {
  name: "Testimonials",
  settings: [
    {
      type: "richtext",
      id: "title",
      label: "Title",
    },
    {
      type: "header",
      content: "Typography",
    },
    fontTypeRange({ id: "title_font", label: "Title Font", default_font: 1 }),
    fontTypeRange({ id: "review_font", label: "Review Font", default_font: 1 }),
    fontTypeRange({ id: "author_font", label: "Author Font", default_font: 1 }),
    {
      type: "header",
      content: "Animation",
    },
    {
      type: "checkbox",
      id: "auto_rotate",
      label: "Auto-rotate Reviews",
      default: false,
    },
    {
      type: "range",
      id: "slide_speed",
      min: 3,
      max: 30,
      step: 1,
      unit: "s",
      label: "Change Review every",
      default: 10,
    },
    {
      type: "range",
      id: "min_height",
      label: "Min height",
      default: 0,
      min: 0,
      max: 500,
      step: 10,
      unit: "px",
      info: "Set ot 0 to adjust to the content height.",
    },
    {
      type: "header",
      content: "Layout",
    },
    sectionGlobals.responsiveVisibility,
    sectionGlobals.topPadding,
    sectionGlobals.bottomPadding,
    sectionGlobals.colorScheme,
    sectionGlobals.sectionID,
  ],
  blocks: [
    {
      type: "review",
      name: "Review",
      settings: [
        {
          type: "range",
          id: "rating",
          label: "Rating",
          default: 5,
          min: 1,
          max: 5,
          step: 1,
        },
        {
          type: "richtext",
          id: "review",
          label: "Review",
          default:
            "<p>Meeseeks are not born into this world fumbling for meaning, Jerry! We are created to serve a single purpose, for which we go to any lengths to fulfill.</p>",
        },
        {
          type: "richtext",
          id: "author",
          label: "Author",
          default: "<p>Marvin Berry</p>",
        },
        {
          type: "checkbox",
          id: "slide",
          label: "Use Individual Change Speed",
        },
        {
          type: "range",
          id: "slide_speed",
          min: 3,
          max: 30,
          step: 1,
          unit: "s",
          label: "Change Review every",
          default: 15,
        },
      ],
    },
  ],
  presets: [
    {
      name: "Testimonials",
      settings: {
        title: "<h1>Reviews</h1>",
        title_font: 1,
        review_font: 1,
        author_font: 1,
        auto_rotate: true,
        slide_speed: 16,
        min_height: 0,
        responsive_visibility: "responsive",
        padding_top: "pt-md",
        padding_bottom: "pb-md",
        color_scheme: "color_scheme_1",
      },
      blocks: [
        {
          type: "review",
          settings: {
            review:
              "<p>There is no god, Summer; gotta rip that band-aid off now you'll thank me later.</p>",
            author: "<p>Marvin Berry</p>",
          },
        },
        {
          type: "review",
          settings: {
            review:
              "<p>Meeseeks are not born into this world fumbling for meaning, Jerry! We are created to serve a single purpose, for which we go to any lengths to fulfill.</p>",
            author: "<p>Marvin Berry</p>",
          },
        },
        {
          type: "review",
          settings: {
            review: "<p>Weddings are basically funerals with cake.</p>",
            author: "<p>Marvin Berry</p>",
          },
        },
      ],
    },
  ],
};
