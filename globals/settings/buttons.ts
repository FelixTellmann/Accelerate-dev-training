export const buttonSettings = {
  text: {
    type: "text" as const,
    id: "button__text",
    label: "Button Text",
  },
  url: {
    type: "url" as const,
    id: "button__url",
    label: "Button Url",
  },
  style: {
    type: "select" as const,
    id: "button__style",
    label: "Button Style",
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
    ],
  },
  size: {
    type: "select" as const,
    id: "button__size",
    label: "Size",
    default: "button--md",
    options: [
      {
        value: "button--lg",
        label: "Large",
      },
      {
        value: "button--md",
        label: "Medium",
      },
      {
        value: "button--sm",
        label: "Small",
      },
      {
        value: "button--extra-1",
        label: "Extra Button 1",
      },
      {
        value: "button--extra-2",
        label: "Extra Button 2",
      },
      {
        value: "button--extra-3",
        label: "Extra Button 3",
      },
    ],
  },
  show_price: {
    type: "checkbox" as const,
    id: "button__show_price",
    label: "Show Price",
  },
  primary: {
    header: {
      type: "header" as const,
      content: "Primary Button",
    },
    text: {
      type: "text" as const,
      id: "button_primary__text",
      label: "Text",
    },
    url: {
      type: "url" as const,
      id: "button_primary__url",
      label: "URL",
    },
    style: {
      type: "select" as const,
      id: "button_primary__style",
      label: "Style",
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
      ],
    },
    size: {
      type: "select" as const,
      id: "button_primary__size",
      label: "Size",
      default: "button--md",
      options: [
        {
          value: "button--lg",
          label: "Large",
        },
        {
          value: "button--md",
          label: "Medium",
        },
        {
          value: "button--sm",
          label: "Small",
        },
        {
          value: "button--extra-1",
          label: "Extra Button-1",
        },
        {
          value: "button--extra-2",
          label: "Extra Button-2",
        },
        {
          value: "button--extra-3",
          label: "Extra Button-3",
        },
      ],
    },
  },
  secondary: {
    header: {
      type: "header" as const,
      content: "Secondary Button",
    },
    text: {
      type: "text" as const,
      id: "button_secondary__text",
      label: "Text",
    },
    url: {
      type: "url" as const,
      id: "button_secondary__url",
      label: "URL",
    },
    style: {
      type: "select" as const,
      id: "button_secondary__style",
      label: "Style",
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
      ],
    },
    size: {
      type: "select" as const,
      id: "button_secondary__size",
      label: "Size",
      default: "button--md",
      options: [
        {
          value: "button--lg",
          label: "Large",
        },
        {
          value: "button--md",
          label: "Medium",
        },
        {
          value: "button--sm",
          label: "Small",
        },
        {
          value: "button--extra-1",
          label: "Extra Button 1",
        },
        {
          value: "button--extra-2",
          label: "Extra Button 2",
        },
        {
          value: "button--extra-3",
          label: "Extra Button 3",
        },
      ],
    },
  },
};

export const buttons = {
  primary: [
    buttonSettings.primary.header,
    buttonSettings.primary.text,
    buttonSettings.primary.url,
    buttonSettings.primary.style,
    buttonSettings.primary.size,
  ],
  secondary: [
    buttonSettings.secondary.header,
    buttonSettings.secondary.text,
    buttonSettings.secondary.url,
    buttonSettings.secondary.style,
    buttonSettings.secondary.size,
  ],
};
