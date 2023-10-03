export const productCardSettings = {
  vendor__show: {
    id: "vendor__show",
    type: "checkbox" as const,
    default: false,
    label: "Show vendor",
  },
  rating__show: {
    id: "rating__show",
    type: "checkbox" as const,
    default: false,
    label: "Show product rating",
    info: "To display a rating, add a product rating app. [Learn more](https://help.shopify.com/manual/online-store/themes/theme-structure/page-types#product-grid-section-settings)",
  },
  labels__show: {
    id: "labels__show",
    type: "checkbox" as const,
    label: "Show labels",
    default: true,
  },
  labels__discount: {
    type: "radio" as const,
    id: "labels__discount",
    label: "Discount Label type",
    info: "Shows when a product has a higher compare at price than the price field.",
    default: "sale",
    options: [
      {
        value: "sale",
        label: "On Sale",
      },
      {
        value: "percentage",
        label: "Discount Percentage",
      },
      {
        value: "value",
        label: "Discount Value",
      },
    ],
  },
  image__ratio: {
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
  image__show_secondary: {
    id: "image__show_secondary",
    type: "checkbox" as const,
    default: false,
    label: "Show second image on hover",
  },
  image__background: {
    type: "color_background" as const,
    id: "image__background",
    label: "Image background",
    default: "linear-gradient(134deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05) 100%)",
  },
  image__drop_shadow: {
    type: "checkbox" as const,
    id: "image__drop_shadow",
    label: "Add a drop shadow to the image",
    info: "Transparent images only",
    default: false,
  },
};
