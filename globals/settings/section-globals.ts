export const sectionGlobals = {
  container_overflow: {
    type: "checkbox" as const,
    id: "container_overflow",
    label: "Fill fullscreen when scrolling",
  },
  center_products: {
    type: "checkbox" as const,
    id: "center_products",
    label: "Center Products if less than width",
  },
  align__vertical: {
    type: "radio" as const,
    id: "align__vertical",
    label: "Vertical Alignment",
    default: "justify-center",
    options: [
      {
        value: "justify-start",
        label: "Top",
      },
      {
        value: "justify-center",
        label: "Center",
      },
      {
        value: "justify-end",
        label: "Bottom",
      },
    ],
  },
  align__horizontal: {
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
  align__horizontal_no_text: {
    type: "radio" as const,
    id: "align__horizontal_no_text",
    label: "Horizontal Alignment",
    default: "items-center",
    options: [
      {
        value: "items-start",
        label: "Left",
      },
      {
        value: "items-center",
        label: "Center",
      },
      {
        value: "items-end",
        label: "Right",
      },
    ],
  },
  align__text: {
    type: "radio" as const,
    id: "align__text",
    label: "Text Alignment",
    default: "text-center",
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
  flex__vertical: {
    type: "radio" as const,
    id: "flex__vertical",
    label: "Vertical Alignment",
    default: "justify-center",
    options: [
      {
        value: "justify-start",
        label: "Top",
      },
      {
        value: "justify-center",
        label: "Center",
      },
      {
        value: "justify-end",
        label: "Bottom",
      },
      {
        value: "justify-between h-full",
        label: "Spread out",
      },
    ],
  },
  flex__horizontal: {
    type: "radio" as const,
    id: "flex__horizontal",
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
      {
        value: "w-full items-stretch",
        label: "Spread out",
      },
    ],
  },
  colorScheme: {
    type: "color_scheme" as const,
    id: "color_scheme",
    default: "1",
    /*default: "bg-theme-bg text-theme-text color-inherit",
    options: [
      {
        value: "bg-theme-bg text-theme-text color-inherit",
        label: "Inherit from parent/theme",
      },
      {
        value: "bg-theme-bg text-theme-text color-group-1",
        label: "Color group 1",
      },
      {
        value: "bg-theme-bg text-theme-text color-group-2",
        label: "Color group 2",
      },
      {
        value: "bg-theme-bg text-theme-text color-group-3",
        label: "Color group 3",
      },
      {
        value: "bg-theme-bg text-theme-text color-group-4",
        label: "Color group 4",
      },
      {
        value: "bg-theme-bg text-theme-text color-group-5",
        label: "Color group 5",
      },
    ],*/
    label: "Color scheme",
  },
  responsiveVisibility: {
    type: "radio" as const,
    id: "responsive_visibility",
    label: "Responsive Visibility",
    default: "responsive",
    options: [
      {
        value: "responsive",
        label: "Mobile & Desktop",
      },
      {
        value: "md:hidden",
        label: "Mobile only",
      },
      {
        value: "max-md:hidden",
        label: "Desktop only",
      },
    ],
  },
  cssClasses: {
    type: "text" as const,
    id: "custom_css",
    label: "Additional CSS Classes",
  },
  topPadding: {
    type: "select" as const,
    id: "padding_top",
    default: "pt-0",
    options: [
      {
        value: "pt-0",
        label: "None",
      },
      {
        value: "pt-sm",
        label: "Small",
      },
      {
        value: "pt-md",
        label: "Medium",
      },
      {
        value: "pt-lg",
        label: "Large",
      },
    ],
    label: "Top Padding",
  },
  bottomPadding: {
    type: "select" as const,
    id: "padding_bottom",
    default: "pb-0",
    options: [
      {
        value: "pb-0",
        label: "None",
      },
      {
        value: "pb-sm",
        label: "Small",
      },
      {
        value: "pb-md",
        label: "Medium",
      },
      {
        value: "pb-lg",
        label: "Large",
      },
    ],
    label: "Bottom Padding",
  },
  sectionLayout: {
    type: "radio" as const,
    id: "section_layout",
    label: "Section Layout",
    default: "container-bg-full",
    options: [
      {
        value: "container-bg-full",
        label: "Container",
      },
      {
        value: "fullwidth",
        label: "Fullwidth",
      },
    ],
  },
  marginTop: {
    type: "range" as const,
    id: "margin_top",
    label: "Margin Top",
    default: 0,
    min: -16,
    max: 128,
    step: 2,
    unit: "px",
  },
  marginBottom: {
    type: "range" as const,
    id: "margin_bottom",
    label: "Margin Bottom",
    default: 0,
    min: -16,
    max: 128,
    step: 2,
    unit: "px",
  },
  maxWidth: {
    type: "select" as const,
    id: "section_max_width",
    label: "Content Max Width",
    default: "max-w-2xl",
    options: [
      {
        value: "max-w-full",
        label: "Fullwidth",
      },
      {
        value: "max-w-[var(--layout-page-width)]",
        label: "Container",
      },
      {
        value: "max-w-6xl",
        label: "6xl",
      },
      {
        value: "max-w-5xl",
        label: "5xl",
      },
      {
        value: "max-w-4xl",
        label: "4xl",
      },
      {
        value: "max-w-3xl",
        label: "3xl",
      },
      {
        value: "max-w-2xl",
        label: "2xl",
      },
      {
        value: "max-w-xl",
        label: "xl",
      },
      {
        value: "max-w-lg",
        label: "lg",
      },
      {
        value: "max-w-md",
        label: "md",
      },
      {
        value: "max-w-sm",
        label: "sm",
      },
      {
        value: "max-w-xs",
        label: "xs",
      },
    ],
  },
  sectionSide: {
    type: "radio" as const,
    id: "section__side",
    label: "Section Side",
    default: "left",
    options: [
      {
        value: "left",
        label: "Left",
      },
      {
        value: "right",
        label: "Right",
      },
    ],
  },
  sectionID: {
    type: "text" as const,
    id: "sectionID",
    label: "Section ID",
  },
};
