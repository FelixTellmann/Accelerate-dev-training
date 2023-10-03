export const grayScaleStyle = {
  type: "radio" as const,
  id: "color_grayscale_style",
  label: "Grayscale Style",
  default: "normal",
  options: [
    {
      value: "normal",
      label: "Normal",
    },
    {
      value: "inverted",
      label: "Inverted",
    },
  ],
};
