export const grayScale = {
  type: "select" as const,
  id: "color_grayscale",
  label: "Grayscale",
  default: "gray",
  options: [
    {
      value: "slate",
      label: "Slate",
    },
    {
      value: "gray",
      label: "Gray",
    },
    {
      value: "zinc",
      label: "Zinc",
    },
    {
      value: "neutral",
      label: "Neutral",
    },
    {
      value: "stone",
      label: "Stone",
    },
  ],
};
