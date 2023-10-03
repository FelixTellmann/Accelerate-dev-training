export const maxWidth = {
  type: "select" as const,
  id: "width",
  label: "Width",
  default: "max-w-xl",
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
  ],
};
