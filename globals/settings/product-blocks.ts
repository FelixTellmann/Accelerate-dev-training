import { aspectRatio } from "globals/settings/aspect-ratio";
import { buttons, buttonSettings } from "globals/settings/buttons";
import { colSpacing } from "globals/settings/col-spacing";
import { iconListGroups } from "globals/settings/icon-list-groups";
import { rowSpacing } from "globals/settings/row-spacing";
import { sectionGlobals } from "globals/settings/section-globals";
import { fontTypeRange } from "globals/settings/type-range";

export const productBlocks = {
  app: {
    type: "@app" as const,
  },
  text: {
    type: "text" as const,
    name: "Text",
    settings: [
      {
        type: "richtext" as const,
        id: "text",
        label: "Text block",
      },
      fontTypeRange({ id: "text_font", label: "Text Font", default_font: 1 }),
      {
        type: "radio" as const,
        id: "text_align",
        label: "Text Alignment",
        default: "text-left",
        options: [
          {
            value: "text-left",
            label: "Left",
          },
          {
            value: "text-center",
            label: "Center",
          },
          {
            value: "text-right",
            label: "Right",
          },
        ],
      },
      {
        type: "range" as const,
        id: "opacity",
        label: "Opacity",
        default: 100,
        min: 0,
        max: 100,
        step: 1,
      },
      {
        type: "header" as const,
        content: "Layout",
      },
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      sectionGlobals.maxWidth,
      sectionGlobals.responsiveVisibility,
      colSpacing,
      sectionGlobals.cssClasses,
    ],
  },
  image: {
    type: "image" as const,
    name: "Image",
    limit: 1,
    settings: [
      {
        id: "image__ratio",
        type: "select" as const,
        default: "pb-[125%]",
        options: [
          {
            value: "pb-[125%]",
            label: "Portrait",
          },
          {
            value: "pb-[100%]",
            label: "Square",
          },
        ],
        label: "Image ratio",
      },
      {
        type: "color_background" as const,
        id: "image__background",
        label: "Image background",
        default: "linear-gradient(134deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05) 100%)",
      },
      {
        type: "checkbox" as const,
        id: "image__drop_shadow",
        label: "Add a drop shadow to the image",
        info: "Transparent images only",
        default: false,
      },
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      colSpacing,
      rowSpacing,
      sectionGlobals.cssClasses,
    ],
  },
  image_gallery: {
    type: "image_gallery" as const,
    name: "Image Gallery",
    limit: 1,
    settings: [
      {
        type: "checkbox" as const,
        id: "gallery__zoom",
        label: "Enable Image Zoom",
        default: false,
      },
      {
        type: "range" as const,
        id: "gallery__zoom_scale",
        label: "Image Zoom Scale",
        default: 200,
        min: 110,
        max: 300,
        step: 10,
        unit: "%",
      },
      // { ...aspectRatio, id: "gallery__aspect_ratio" },
      {
        type: "checkbox" as const,
        id: "hide_not_selected_variant_images",
        label: "Hide not selected Variant Images",
        default: false,
      },
      {
        type: "checkbox" as const,
        id: "auto_select_variant_image",
        label: "Auto Select Variant Image",
        default: true,
      },
      {
        type: "radio" as const,
        id: "variants_multi_images",
        label: "Show Dedicated Variant Images",
        default: "disabled",
        options: [
          {
            value: "disabled",
            label: "Disabled",
          },
          {
            value: "via_metafield",
            label: "Via Metafield",
          },
          {
            value: "via_image_order",
            label: "Via Image Order",
          },
        ],
      },
      {
        type: "text" as const,
        id: "variants_image_metafield",
        label: "Variants Image Metafield",
        default: "smart.images",
        info: "Enter the metafield key here with the format: `namespace.key`. Needs to be configured with the relevant resource: (Variant). DANGER: The Gallery section is dynamically rendered via JS and the metafield data needs to be loaded in Theme Settings -> Product Data -> Metafields via `variants.metafields.namespace` where the namespace matches the designated namespace. This will load all metafields under the namespace and can cause potential performance issues. If you are using this feature, please don't hesitate to contact us to discuss the best way to implement this.",
      },
      {
        type: "checkbox" as const,
        id: "gallery__loop_videos",
        default: false,
        label: "Enable video looping",
      },
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      sectionGlobals.cssClasses,
    ],
  },
  title: {
    type: "title" as const,
    name: "Title",
    limit: 1,
    settings: [
      {
        type: "richtext" as const,
        id: "title",
        label: "Title",
        default: "<p>[title]</p>" as const,
        info: "Use [title] as Placeholder",
      },
      fontTypeRange({ id: "title_font", label: "Title Font", default_font: 1 }),
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      colSpacing,
      sectionGlobals.cssClasses,
    ],
  },
  vendor: {
    type: "vendor" as const,
    name: "Vendor",
    limit: 1,
    settings: [
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      colSpacing,
      sectionGlobals.cssClasses,
    ],
  },
  labels: {
    type: "labels" as const,
    name: "Labels",
    limit: 1,
    settings: [
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      colSpacing,
      sectionGlobals.cssClasses,
    ],
  },
  price: {
    type: "price" as const,
    name: "Price",
    limit: 1,
    settings: [
      /*typeRange({ id: "price_font", label: "Price style", default_font: 1 })*/
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      colSpacing,
      sectionGlobals.cssClasses,
    ],
  },
  variant_selector: {
    type: "variant_selector" as const,
    name: "Variant Selector",
    limit: 1,
    settings: [
      {
        type: "checkbox" as const,
        id: "disable_unavailable",
        label: "Disable Unavailable Variants",
      },
      {
        type: "checkbox" as const,
        id: "image_selector",
        label: "Select variant by image",
        default: false,
        info: "Applies to products with up to 18 Variants and needs an image attached to each variant.",
      },
      {
        type: "header" as const,
        content: "Default Selector options",
      },
      {
        type: "paragraph" as const,
        content:
          "The options apply if the `Variant by Image` selector is disabled or products do not meet the requirements.",
      },
      {
        type: "checkbox" as const,
        id: "color_selector",
        label: "Use Color Selector",
      },
      {
        type: "header" as const,
        content: "Color Selector Options",
      },
      {
        type: "radio" as const,
        id: "color_selector__source",
        label: "Swatches Color/Image Selection",
        default: "via_option",
        options: [
          {
            value: "via_option",
            label: "Via Option Title",
          },
          {
            value: "via_option_then_image",
            label: "Via Option Title then Image",
          },
          {
            value: "via_image",
            label: "Via Image",
          },
          {
            value: "via_metafield",
            label: "Via Metafield",
          },
          {
            value: "via_image_then_metafield",
            label: "Via Image then Metafield",
          },
          {
            value: "via_metafield_then_image",
            label: "Via Metafield then Image",
          },
        ],
        info: "The default fallback option for all choices is via the Product Option title and `swatches.json` setup.",
      } /*
      {
        type: "checkbox" as const,
        id: "color_selector_via_variant_image",
        label: "Variant Image as Swatch",
        default: false,
      },*/,
      {
        type: "range" as const,
        id: "color_selector_size",
        label: "Color Selector Size",
        default: 32,
        min: 18,
        max: 60,
        step: 1,
        unit: "px",
      },
      {
        type: "range" as const,
        id: "color_selector_radius",
        label: "Color Selector Radius",
        default: -1,
        min: -1,
        max: 32,
        step: 1,
        unit: "px",
      },
      {
        type: "textarea" as const,
        id: "color_list",
        label: "Color Options",
        default: "color,colour,couleur,cor,colore,farbe,색,色,カラー,färg,farve,szín,barva",
        info: "Comma seperated list of colors to match by Product Option",
      },
      {
        type: "radio" as const,
        id: "default_type",
        options: [
          {
            value: "radio",
            label: "Pills",
          },
          {
            value: "select",
            label: "Dropdown",
          },
        ],
        default: "radio",
        label: "Default Type",
      },
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      sectionGlobals.cssClasses,
    ],
  },
  variant_upsell: {
    type: "variant_upsell" as const,
    name: "Variant as Upsell",
    limit: 1,
    settings: [
      {
        type: "paragraph" as const,
        content: "Use A variant selector with exactly 2 values as an upsell Selector",
      },
      {
        type: "text" as const,
        id: "option_name",
        label: "Option Name",
      },
      {
        type: "text" as const,
        id: "value_name",
        label: "Upsell Value",
      },
      {
        type: "text" as const,
        id: "value_label",
        label: "Custom Label",
      },
      {
        type: "image_picker" as const,
        id: "image",
        label: "Upsell Image",
      },
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      sectionGlobals.cssClasses,
    ],
  },
  product_sibling: {
    type: "product_sibling" as const,
    name: "Product Sibling",
    limit: 1,
    settings: [
      {
        type: "radio" as const,
        id: "selector",
        options: [
          {
            value: "image",
            label: "Image Selector",
          },
          {
            value: "color",
            label: "Color Selector",
          },
          {
            value: "radio",
            label: "Pills",
          },
          {
            value: "select",
            label: "Dropdown",
          },
        ],
        default: "image",
        label: "Default Type",
      },
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      sectionGlobals.cssClasses,
    ],
  },
  sku: {
    type: "sku" as const,
    name: "SKU",
    limit: 1,
    settings: [
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      colSpacing,
      sectionGlobals.cssClasses,
    ],
  },
  quantity_selector: {
    type: "quantity_selector" as const,
    name: "Quantity selector",
    limit: 1,
    settings: [
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      colSpacing,
      sectionGlobals.cssClasses,
    ],
  },
  buy_buttons: {
    type: "buy_buttons" as const,
    name: "Buy buttons",
    limit: 1,
    settings: [
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      colSpacing,
      buttonSettings.style,
      buttonSettings.size,
      buttonSettings.show_price,
      sectionGlobals.cssClasses,
    ],
  },
  subscription_selector: {
    type: "subscription_selector" as const,
    name: "Subscription Selector",
    limit: 1,
    settings: [sectionGlobals.marginBottom, sectionGlobals.marginTop, sectionGlobals.cssClasses],
  },
  payment_terms: {
    type: "payment_terms" as const,
    name: "Payment Terms",
    limit: 1,
    settings: [
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      colSpacing,
      sectionGlobals.cssClasses,
    ],
  },
  dynamic_buy_buttons: {
    type: "dynamic_buy_buttons" as const,
    name: "Dynamic Buy buttons",
    limit: 1,
    settings: [
      {
        type: "paragraph" as const,
        content:
          "Using the payment methods available on your store, customers see their preferred option, like PayPal or Apple Pay. [Learn more](https://help.shopify.com/manual/using-themes/change-the-layout/dynamic-checkout)",
      },
      buttonSettings.size,
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      colSpacing,
      sectionGlobals.cssClasses,
    ],
  },
  description: {
    type: "description" as const,
    name: "Description",
    limit: 1,
    settings: [
      {
        type: "radio" as const,
        id: "style",
        label: "Style",
        default: "accordion",
        options: [
          {
            value: "plain",
            label: "Plain Content",
          },
          {
            value: "accordion",
            label: "Description Dropdown",
          },
          {
            value: "accordion_style_h1",
            label: "Change H1 Headings to Dropdown",
          },
          {
            value: "tabs_style_h1",
            label: "Change H1 Headings to Tabs",
          },
          {
            value: "accordion_custom_tags",
            label: "Custom Tags to create Dropdowns",
          },
          {
            value: "tabs_custom_tags",
            label: "Custom Tags to create Tabs",
          },
        ],
      },
      {
        type: "checkbox" as const,
        id: "uncollapse",
        label: "Open first Dropdown",
      },
      {
        type: "header" as const,
        content: "Custom Tags Only",
      },
      {
        type: "paragraph" as const,
        content:
          "Custom tags are matched via inline square bracket tags. I.e.:  [Title] Content here [/Title]",
      },
      {
        type: "textarea" as const,
        id: "custom_tag_overrides",
        label: "Override Titles",
        info: "Comma separated list to override Each Dropdown block Title. Must be in the same order as the Dropdowns",
      },
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      sectionGlobals.cssClasses,
    ],
  },
  share: {
    type: "share" as const,
    name: "Share",
    limit: 1,
    settings: [
      {
        type: "paragraph" as const,
        content:
          "If you include a link in social media posts, the page’s featured image will be shown as the preview image. [Learn more](https://help.shopify.com/manual/online-store/images/showing-social-media-thumbnail-images).",
      },
      {
        type: "paragraph" as const,
        content:
          "A store title and description are included with the preview image. [Learn more](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords#set-a-title-and-description-for-your-online-store).",
      },
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      colSpacing,
      sectionGlobals.cssClasses,
    ],
  },
  custom_liquid: {
    type: "custom_liquid" as const,
    name: "Custom liquid",
    settings: [
      {
        type: "liquid" as const,
        id: "custom_liquid",
        label: "Custom liquid",
        info: "Add app snippets or other Liquid code to create advanced customizations.",
      },
    ],
  },
  collapsible_tab: {
    type: "collapsible_tab" as const,
    name: "Collapsible row",
    settings: [
      {
        type: "checkbox" as const,
        id: "uncollapse",
        label: "Open first Dropdown",
      },
      {
        type: "header" as const,
        content: "Static Content",
      },
      {
        type: "text" as const,
        id: "heading",
        default: "Collapsible row",
        info: "Include a heading that explains the content.",
        label: "Heading",
      },
      {
        type: "select" as const,
        id: "icon",
        options: [
          {
            value: "none",
            label: "None",
          },
          {
            value: "apple",
            label: "Apple",
          },
          {
            value: "banana",
            label: "Banana",
          },
          {
            value: "bottle",
            label: "Bottle",
          },
          {
            value: "box",
            label: "Box",
          },
          {
            value: "carrot",
            label: "Carrot",
          },
          {
            value: "chat_bubble",
            label: "Chat bubble",
          },
          {
            value: "check_mark",
            label: "Check mark",
          },
          {
            value: "clipboard",
            label: "Clipboard",
          },
          {
            value: "dairy",
            label: "Dairy",
          },
          {
            value: "dairy_free",
            label: "Dairy free",
          },
          {
            value: "dryer",
            label: "Dryer",
          },
          {
            value: "eye",
            label: "Eye",
          },
          {
            value: "fire",
            label: "Fire",
          },
          {
            value: "gluten_free",
            label: "Gluten free",
          },
          {
            value: "heart",
            label: "Heart",
          },
          {
            value: "iron",
            label: "Iron",
          },
          {
            value: "leaf",
            label: "Leaf",
          },
          {
            value: "leather",
            label: "Leather",
          },
          {
            value: "lightning_bolt",
            label: "Lightning bolt",
          },
          {
            value: "lipstick",
            label: "Lipstick",
          },
          {
            value: "lock",
            label: "Lock",
          },
          {
            value: "map_pin",
            label: "Map pin",
          },
          {
            value: "nut_free",
            label: "Nut free",
          },
          {
            value: "pants",
            label: "Pants",
          },
          {
            value: "paw_print",
            label: "Paw print",
          },
          {
            value: "pepper",
            label: "Pepper",
          },
          {
            value: "perfume",
            label: "Perfume",
          },
          {
            value: "plane",
            label: "Plane",
          },
          {
            value: "plant",
            label: "Plant",
          },
          {
            value: "price_tag",
            label: "Price tag",
          },
          {
            value: "question_mark",
            label: "Question mark",
          },
          {
            value: "recycle",
            label: "Recycle",
          },
          {
            value: "return",
            label: "Return",
          },
          {
            value: "ruler",
            label: "Ruler",
          },
          {
            value: "serving_dish",
            label: "Serving dish",
          },
          {
            value: "shirt",
            label: "Shirt",
          },
          {
            value: "shoe",
            label: "Shoe",
          },
          {
            value: "silhouette",
            label: "Silhouette",
          },
          {
            value: "snowflake",
            label: "Snowflake",
          },
          {
            value: "star",
            label: "Star",
          },
          {
            value: "stopwatch",
            label: "Stopwatch",
          },
          {
            value: "truck",
            label: "Truck",
          },
          {
            value: "washing",
            label: "Washing",
          },
        ],
        default: "check_mark",
        label: "Icon",
      },
      {
        type: "richtext" as const,
        id: "content",
        label: "Row content",
      },
      {
        type: "page" as const,
        id: "page",
        label: "Row content from page",
      },
      {
        type: "header" as const,
        content: "Dynamic Content",
      },
      {
        type: "paragraph" as const,
        content:
          "Enter the metafield key here with the format: `namespace.key`. Needs to be configured with the relevant resource: (product). ",
      },
      {
        type: "checkbox" as const,
        id: "use_dynamic_content",
        label: "Use Dynamic content",
      },
      {
        type: "text" as const,
        id: "heading_metafield",
        label: "Heading metafield",
      },
      {
        type: "text" as const,
        id: "content_metafield",
        label: "Content metafield",
      },
      {
        type: "text" as const,
        id: "image_metafield",
        label: "Image metafield",
      },
      {
        type: "header" as const,
        content: "Layout",
      },
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      sectionGlobals.cssClasses,
    ],
  },
  rating: {
    type: "rating" as const,
    name: "Product rating",
    limit: 1,
    settings: [
      {
        type: "header" as const,
        content: "Layout",
      },
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      colSpacing,
      sectionGlobals.cssClasses,
    ],
  },
  complementary: {
    type: "complementary" as const,
    name: "Complementary products",
    limit: 1,
    settings: [
      {
        type: "richtext" as const,
        id: "title",
        label: "Title",
      },
      fontTypeRange({ id: "title_font", label: "Title Font", default_font: 1 }),
      {
        type: "checkbox" as const,
        id: "image__show_secondary",
        label: "Show Secondary Image",
      },
      {
        type: "radio" as const,
        id: "source",
        label: "Data Source",
        default: "complementary",
        info: "Auto-generated related products are not selectable and need to be added manually to each Product.",
        options: [
          {
            value: "complementary",
            label: "Complementary",
          },
          {
            value: "related",
            label: "Related",
          },
        ],
      },
      {
        type: "product_list" as const,
        id: "products",
        label: "Default Products",
        info: "Fallback in case complementary products are not set up.",
        limit: 10,
      },
      {
        type: "checkbox" as const,
        id: "hide_upsell_products",
        label: "Hide Upsell selection if related/complementary products are available",
      },
      {
        type: "paragraph" as const,
        content:
          "To select complementary products, add the Search & Discovery app. [Learn more](https://help.shopify.com/manual/online-store/search-and-discovery/product-recommendations)",
      },
      {
        type: "radio" as const,
        id: "style",
        label: "Style",
        default: "small",
        options: [
          {
            value: "small",
            label: "Small Cards",
          },
          {
            value: "flat",
            label: "Flat Cards",
          },
          {
            value: "large",
            label: "Product Cards",
          },
        ],
      },
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      sectionGlobals.cssClasses,
    ],
  },
  icon_with_text: {
    type: "icon_with_text" as const,
    name: "Icon with text",
    settings: [
      {
        type: "select" as const,
        id: "layout",
        options: [
          {
            value: "flex-row",
            label: "Horizontal",
          },
          {
            value: "flex-col",
            label: "Vertical",
          },
        ],
        default: "flex-row",
        label: "Layout",
      },
      {
        type: "select" as const,
        id: "item_layout",
        options: [
          {
            value: "flex-row",
            label: "Horizontal",
          },
          {
            value: "flex-col",
            label: "Vertical",
          },
        ],
        default: "flex-row",
        label: "Item Layout",
      },
      {
        type: "range" as const,
        id: "size",
        label: "Size",
        default: 20,
        min: 16,
        max: 36,
        step: 1,
        unit: "px",
      },
      {
        type: "header" as const,
        content: "Content",
        info: "Choose an icon or add an image for each column or row.",
      },
      fontTypeRange({ id: "content_font", label: "Content Font", default_font: 1 }),
      ...iconListGroups(1),
      ...iconListGroups(2),
      ...iconListGroups(3),
      ...iconListGroups(4),
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      sectionGlobals.cssClasses,
    ],
  },
  inventory: {
    type: "inventory",
    name: "Inventory Count",
    limit: 2,
    settings: [
      {
        type: "range" as const,
        id: "threshold",
        label: "Low inventory threshold",
        min: 2,
        max: 100,
        step: 1,
        default: 5,
      },
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      sectionGlobals.cssClasses,
    ],
  },
  pre_order: {
    type: "pre_order" as const,
    name: "Pre-order Notice",
    limit: 1,
    settings: [
      {
        type: "radio" as const,
        id: "preorder_date",
        label: "Preorder Notice Detail",
        default: "estimate",
        options: [
          {
            value: "estimate",
            label: "Estimate",
          },
          {
            value: "precise",
            label: "Precise",
          },
          {
            value: "none",
            label: "None",
          },
        ],
      },
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      sectionGlobals.cssClasses,
    ],
  },
  popup: {
    type: "popup" as const,
    name: "Popup",
    limit: 3,
    settings: [
      {
        type: "header" as const,
        content: "Button Trigger",
      },
      {
        type: "text" as const,
        id: "title",
        label: "Label",
      },
      {
        type: "radio" as const,
        id: "label__style",
        label: "Label Style",
        default: "button-primary",
        options: [
          {
            value: "button-primary",
            label: "Primary",
          },
          {
            value: "button-primary--outline",
            label: "Primary Outline",
          },
          {
            value: "button-secondary",
            label: "Secondary",
          },
          {
            value: "button-secondary--outline",
            label: "Secondary Outline",
          },
          {
            value: "plain-link text-left",
            label: "Plain Link",
          },
        ],
      },
      colSpacing,
      {
        type: "header" as const,
        content: "Popup Content",
      },

      {
        type: "richtext" as const,
        id: "preheading",
        label: "Pre heading",
      },
      fontTypeRange({ id: "preheading_font", label: "Pre heading Font", default_font: 1 }),
      {
        type: "richtext" as const,
        id: "popup_title",
        label: "Title",
      },
      fontTypeRange({ id: "title_font", label: "Title Font", default_font: 1 }),
      {
        type: "richtext" as const,
        id: "subtitle",
        label: "Subtitle",
      },
      fontTypeRange({ id: "subtitle_font", label: "Subtitle Font", default_font: 1 }),
      {
        type: "richtext" as const,
        id: "content",
        label: "Richtext",
      },
      {
        type: "page" as const,
        id: "page",
        label: "Page",
      },
      ...buttons.primary,
      ...buttons.secondary,
      sectionGlobals.marginBottom,
      sectionGlobals.marginTop,
      {
        type: "header" as const,
        content: "Popup Layout",
      },
      {
        type: "radio" as const,
        id: "align__horizontal",
        label: "Horizontal Alignment",
        default: "items-center text-center",
        options: [
          {
            value: "items-start text-left",
            label: "Left",
          },
          {
            value: "items-center text-center",
            label: "Center",
          },
          {
            value: "items-end text-right",
            label: "Right",
          },
        ],
      },
      {
        type: "header" as const,
        content: "Popup Background",
      },
      {
        type: "image_picker" as const,
        id: "image",
        label: "Background Image",
      },
      {
        type: "color_background" as const,
        id: "image__overlay",
        label: "Overlay",
        default: "linear-gradient(134deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05) 100%)",
      },
      sectionGlobals.colorScheme,
      sectionGlobals.cssClasses,
    ],
  },
};
