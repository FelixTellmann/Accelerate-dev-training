export const aspectRatio = {
  type: "select" as const,
  id: "aspect_ratio",
  default: "auto",
  label: "Image Aspect Ratio",
  options: [
    {
      value: "auto",
      label: "Auto Fit",
    },
    {
      value: "9 / 16",
      label: "Story Format (9-16)",
    },
    {
      value: "2 / 3",
      label: "Smartphone (2-3)",
    },
    {
      value: "3 / 4",
      label: "Horizontal Image (3-4)",
    },
    {
      value: "1",
      label: "Square (1-1)",
    },
    {
      value: "4 / 3",
      label: "TV Format (4-3)",
    },
    {
      value: "16 / 9",
      label: "Widescreen (16-9)",
    },
  ],
};
