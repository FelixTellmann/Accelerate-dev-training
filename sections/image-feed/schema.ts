import { sectionGlobals } from "globals/settings/section-globals";
import { fontTypeRange } from "globals/settings/type-range";
import { ImageFeedSection } from "types/sections";
import { ShopifySection } from "types/shopify";

export const imageFeed: ShopifySection<ImageFeedSection> = {
  name: "Image feed",
  settings: [
    {
      id: "image__aspect_ratio",
      type: "select",
      default: "pb-[100%]",
      options: [
        {
          value: "pb-[75%]",
          label: "Landscape (3:4)",
        },
        {
          value: "pb-[100%]",
          label: "Square (1:1)",
        },
        {
          value: "pb-[125%]",
          label: "Portrait (4:5)",
        },
      ],
      label: "Image ratio",
    },
    {
      type: "range",
      id: "min_width",
      label: "Image Min Width",
      default: 360,
      min: 200,
      max: 640,
      step: 10,
      unit: "px",
    },
    {
      type: "header",
      content: "Layout",
    },
    {
      type: "radio",
      id: "mobile_style",
      label: "Mobile Style",
      default: "scroll",
      options: [
        {
          value: "stack",
          label: "Stack",
        },
        {
          value: "scroll",
          label: "Vertical Scroll",
        },
      ],
    },
    {
      type: "range",
      id: "spacing",
      label: "Spacing",
      default: 0,
      min: 0,
      max: 100,
      step: 1,
      unit: "px",
    },
    sectionGlobals.sectionLayout,
    sectionGlobals.responsiveVisibility,
    sectionGlobals.topPadding,
    sectionGlobals.bottomPadding,
    sectionGlobals.colorScheme,
    sectionGlobals.sectionID,
  ],
  max_blocks: 6,
  blocks: [
    {
      type: "image",
      name: "Image",
      settings: [
        {
          type: "header",
          content: "Image",
        },
        {
          type: "image_picker",
          id: "image",
          label: "Image",
        },
        {
          type: "color_background",
          id: "image__overlay",
          label: "Image Overlay",
        },
        {
          type: "url",
          id: "url",
          label: "URL",
          default: "/",
        },
        {
          type: "header",
          content: "Optional Content",
        },
        {
          type: "richtext",
          id: "title",
          label: "Title",
        },
        fontTypeRange({ id: "title_font", label: "Title Font", default_font: 1 }),
        {
          type: "richtext",
          id: "subtitle_richtext",
          label: "Subtitle",
        },
        fontTypeRange({ id: "subtitle_font", label: "Subtitle Font", default_font: 1 }),
        {
          type: "header",
          content: "Layout",
        },
        {
          type: "range",
          id: "border_width",
          label: "Border Width",
          default: 0,
          min: 0,
          max: 8,
          step: 1,
          unit: "px",
        },
        sectionGlobals.responsiveVisibility,
      ],
    },
  ],
  presets: [
    {
      name: "Image Feed",
      settings: {
        section_layout: "fullwidth",
      },
      blocks: [{ type: "image" }, { type: "image" }, { type: "image" }, { type: "image" }],
    },
  ],
};
