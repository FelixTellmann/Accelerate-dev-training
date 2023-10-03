import { grayScale } from "globals/settings/gray-scale";
import { grayScaleStyle } from "globals/settings/gray-scale-style";
import { sectionGlobals } from "globals/settings/section-globals";
import { fontGroup, typographyGroups } from "globals/settings/typography-groups";
import { ShopifySettings } from "types/shopify";

export const settingsSchema: ShopifySettings = [
  {
    name: "theme_info",
    theme_name: "Dev Challenge",
    theme_author: "Framework Labs",
    theme_version: "1.0.0",
    theme_documentation_url: "http://docs.smarttheme.com/",
    theme_support_url: "http://smarttheme.com/",
  },
  {
    name: "Colors Schemes",
    settings: [
      {
        type: "color_scheme_group",
        id: "color_schemes",
        definition: [
          {
            type: "header" as const,
            content: "Primary Colors",
          },
          {
            type: "color" as const,
            id: `text`,
            label: "Text",
            default: "#000000",
          },
          {
            type: "color" as const,
            id: `overlay_text`,
            label: "Overlay Text",
            default: "#ffffff",
          },
          {
            type: "color" as const,
            id: `bg`,
            label: "Background",
            default: "#ffffff",
          },
          {
            type: "color_background" as const,
            id: `bg_gradient`,
            label: "Background gradient",
          },
          {
            type: "header" as const,
            content: "Primary Colors",
          },
          {
            type: "color" as const,
            id: `primary_text`,
            label: "Primary Text",
            default: "#000000",
          },
          {
            type: "color" as const,
            id: `primary_bg`,
            label: "Primary Background",
            default: "#19D48B",
            info: "Used for ‘Solid’ buttons",
          },
          {
            type: "color_background" as const,
            id: `primary_bg_gradient`,
            label: "Primary Gradient Background",
            info: `Take precedence over ‘Accent’`,
          },
          {
            type: "color" as const,
            id: `primary_outline`,
            label: "Primary Outline",
            default: "#19D48B",
          },
          {
            type: "header" as const,
            content: "Secondary Colors",
          },
          {
            type: "color" as const,
            id: `secondary_text`,
            label: "Secondary Text",
            default: "#ffffff",
          },
          {
            type: "color" as const,
            id: `secondary_bg`,
            label: "Secondary Background",
            default: "#A634FF",
          },
          {
            type: "color_background" as const,
            id: `secondary_bg_gradient`,
            label: "Secondary Gradient Background",
            info: `Take precedence over ‘Accent’`,
          },
          {
            type: "color" as const,
            id: `secondary_outline`,
            label: "Secondary Outline",
            default: "#A634FF",
          },
        ],
        role: {
          text: "text",
          background: {
            solid: "bg",
            gradient: "bg_gradient",
          },
          primary_button: {
            solid: "primary_bg",
            gradient: "primary_bg_gradient",
          },
          primary_button_border: "primary_outline",
          secondary_button: {
            solid: "secondary_bg",
            gradient: "secondary_bg_gradient",
          },
          secondary_button_border: "secondary_outline",
          links: "primary_text",
          icons: "primary_text",
          on_primary_button: "primary_text",
          on_secondary_button: "primary_text",
        },
      },
    ],
  },
  {
    name: "Branding",
    settings: [
      {
        type: "header",
        content: "Primary Logo",
      },
      {
        type: "image_picker",
        id: "branding_logo_dark_on_light",
        label: "Dark on light background",
      },
      {
        type: "image_picker",
        id: "branding_logo_light_on_dark",
        label: "Light on dark background",
      },
      {
        type: "header",
        content: "Secondary Logo",
      },
      {
        type: "image_picker",
        id: "branding_logo_secondary_dark_on_light",
        label: "Dark on light background",
      },
      {
        type: "image_picker",
        id: "branding_logo_secondary_light_on_dark",
        label: "Light on dark background",
      },
      {
        type: "header",
        content: "Favicon",
      },
      {
        type: "image_picker",
        id: "branding_favicon",
        label: "Favicon image",
        info: "Will be scaled down to 32 x 32px",
      },
    ],
  },
  {
    name: "Layout",
    settings: [
      {
        type: "checkbox",
        id: "layout_is_fullwidth",
        label: "Full-width Layout",
        default: false,
      },
      {
        type: "range",
        id: "layout_page_width",
        min: 960,
        max: 1920,
        step: 20,
        default: 1440,
        unit: "px",
        label: "Page width",
        info: "Requires Full-width disabled",
      },
      {
        type: "range",
        id: "layout_section_padding_sm",
        label: "Section Padding: Small",
        default: 32,
        min: 0,
        max: 64,
        step: 4,
        unit: "px",
      },
      {
        type: "range",
        id: "layout_section_padding_sm__mobile",
        label: "Section Padding: Small Mobile",
        default: 32,
        min: 0,
        max: 64,
        step: 4,
        unit: "px",
      },
      {
        type: "range",
        id: "layout_section_padding_md",
        label: "Section Padding: Medium",
        default: 96,
        min: 48,
        max: 192,
        step: 4,
        unit: "px",
      },
      {
        type: "range",
        id: "layout_section_padding_md__mobile",
        label: "Section Padding: Medium Mobile",
        default: 96,
        min: 0,
        max: 192,
        step: 4,
        unit: "px",
      },
      {
        type: "range",
        id: "layout_section_padding_lg",
        label: "Section Padding: Large",
        default: 240,
        min: 150,
        max: 500,
        step: 10,
        unit: "px",
      },
      {
        type: "range",
        id: "layout_section_padding_lg__mobile",
        label: "Section Padding: Large Mobile",
        default: 240,
        min: 0,
        max: 500,
        step: 10,
        unit: "px",
      },
    ],
  },
  {
    name: "Colors Theme",
    settings: [
      {
        type: "header",
        content: "Global theme colors",
      },
      {
        ...sectionGlobals.colorScheme,
        default: "1",
      },
      {
        type: "header",
        content: "Theme Grayscale",
      },
      grayScale,
      grayScaleStyle,
      {
        type: "header",
        content: "Utility Colors",
      },
      {
        type: "color",
        id: "color_error",
        label: "Error",
        default: "#fc0000",
      },
      {
        type: "color",
        id: "color_warning",
        label: "Warning",
        default: "#f59e0b",
      },
      {
        type: "color",
        id: "color_success",
        label: "Success",
        default: "#22c55e",
      },
      {
        type: "color",
        id: "color_info",
        label: "Info",
        default: "#38bdf8",
      },
      {
        type: "color",
        id: "color_review_stars",
        label: "Review Stars",
        default: "#f3e008",
      },
    ],
  },
  {
    name: "Fonts",
    settings: [
      ...fontGroup({ index: 1 }),
    ],
  },
  typographyGroups(1),
  typographyGroups(2),
  typographyGroups(3),
  typographyGroups(4),
];
