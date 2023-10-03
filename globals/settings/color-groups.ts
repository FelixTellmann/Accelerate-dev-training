export const colorGroups = (index: string | number, defaultTitle = undefined) => {
  return {
    name: `Color Group ${index}`,
    settings: [
      {
        type: "text" as const,
        id: `color_${index}_title`,
        label: "Color Group Description",
        info: "Adding a descriptive title makes it easier to recognize your Color Schemes for easy identification.",
        default: defaultTitle,
      },
      {
        type: "header" as const,
        content: "Primary Colors",
      },
      {
        type: "color" as const,
        id: `color_${index}_text`,
        label: "Text",
        default: "#000000",
      },
      {
        type: "color" as const,
        id: `color_${index}_overlay_text`,
        label: "Overlay Text",
        default: "#ffffff",
      },
      {
        type: "color" as const,
        id: `color_${index}_bg`,
        label: "Background",
        default: "#ffffff",
      },
      {
        type: "color_background" as const,
        id: `color_${index}_bg_gradient`,
        label: "Background gradient",
        default:
          "linear-gradient(180deg, rgba(240, 240, 240, 0.3), rgba(240, 240, 240, 0.15) 100%)",
      },
      {
        type: "header" as const,
        content: "Primary Colors",
      },
      {
        type: "color" as const,
        id: `color_${index}_primary_text`,
        label: "Primary Text",
        default: "#000000",
      },
      {
        type: "color" as const,
        id: `color_${index}_primary_bg`,
        label: "Primary Background",
        default: "#19D48B",
        info: "Used for ‘Solid’ buttons",
      },
      {
        type: "color_background" as const,
        id: `color_${index}_primary_bg_gradient`,
        label: "Primary Gradient Background",
        info: `Take precedence over ‘Accent’`,
      },
      {
        type: "color" as const,
        id: `color_${index}_primary_outline`,
        label: "Primary Outline",
        default: "#19D48B",
      },
      {
        type: "header" as const,
        content: "Secondary Colors",
      },
      {
        type: "color" as const,
        id: `color_${index}_secondary_text`,
        label: "Secondary Text",
        default: "#ffffff",
      },
      {
        type: "color" as const,
        id: `color_${index}_secondary_bg`,
        label: "Secondary Background",
        default: "#A634FF",
      },
      {
        type: "color_background" as const,
        id: `color_${index}_secondary_bg_gradient`,
        label: "Secondary Gradient Background",
        info: `Take precedence over ‘Accent’`,
      },
      {
        type: "color" as const,
        id: `color_${index}_secondary_outline`,
        label: "Secondary Outline",
        default: "#A634FF",
      },
    ],
  };
};
