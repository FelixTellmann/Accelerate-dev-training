import { sectionGlobals } from "globals/settings/section-globals";
import { fontTypeRange } from "globals/settings/type-range";
import { BenefitTabsSection } from "types/sections";
import { ShopifySection } from "types/shopify";

export const benefitTabs: ShopifySection<BenefitTabsSection> = {
  name: "Benefit tabs",
  settings: [
    {
      type: "radio",
      id: "layout",
      label: "Desktop Layout",
      default: "order-2",
      options: [
        {
          value: "order-2",
          label: "Image Left",
        },
        {
          value: "-order-1",
          label: "Image Right",
        },
      ],
    },
    sectionGlobals.topPadding,
    sectionGlobals.bottomPadding,
    sectionGlobals.responsiveVisibility,
    sectionGlobals.colorScheme,
    sectionGlobals.sectionID,
  ],
  max_blocks: 3,
  blocks: [
    {
      type: "benefit",
      name: "Benefit",
      settings: [
        {
          type: "image_picker",
          id: "image",
          label: "Image",
        },
        {
          type: "header",
          content: "Content",
        },
        {
          type: "richtext",
          id: "title",
          label: "Title",
          default: "<p>phasellus vocibus sem metus postulant</p>",
        },
        fontTypeRange({ id: "title_font", label: "Title font", default_font: 1 }),
        {
          type: "richtext",
          id: "content",
          label: "Richtext",
          default: "<p>See you later, Pop. Whoo! Time to change that oil.</p>",
        },
        fontTypeRange({ id: "content_font", label: "Content font", default_font: 1 }),
      ],
    },
  ],

  presets: [
    {
      name: "Benefit tabs",
      settings: {
        layout: "order-2",
        padding_top: "pt-md",
        padding_bottom: "pb-md",
        responsive_visibility: "responsive",
        color_scheme: "color_scheme_1",
      },
      blocks: [
        {
          type: "benefit",
          settings: {
            title: "<p>Mark Dixon</p>",
            title_font: 1,
            content:
              "<p>I noticed your band is on the roster for the dance auditions after school today. Why even bother, McFly? You don't have a chance. You're too much like your old man. No McFly ever amounted to anything in the history of Hill Valley!</p>",
          },
        },
        {
          type: "benefit",
          settings: {
            title: "<p>Mark Dixon</p>",
            title_font: 1,
            content:
              "<p>I can't believe you'd loan me your car without telling me it had a blind spot. I could've been killed!</p>",
          },
        },
        {
          type: "benefit",
          settings: {
            title: "<p>Mark Dixon</p>",
            title_font: 1,
            content:
              "<p>The appropriate question is, 'when the hell are they?' You see, Einstein has just become the world's first time traveler! I sent him into the future. One minute into the future to be exact. And at precisely 1:21 a.m. and zero seconds, we shall catch up with him and the time machine.</p>",
          },
        },
      ],
    },
  ],
};
