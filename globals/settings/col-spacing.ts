export const colSpacing = {
  type: "select" as const,
  id: "grid_span",
  default: "col-span-12",
  label: "Spacing",
  options: [
    {
      value: "col-span-3",
      label: "One Quarter",
    },
    {
      value: "col-span-4",
      label: "One Third",
    },
    {
      value: "col-span-6",
      label: "Half",
    },
    {
      value: "col-span-8",
      label: "Two Thirds",
    },
    {
      value: "col-span-9",
      label: "Three Quarter",
    },
    {
      value: "col-span-12",
      label: "Full",
    },
    {
      value: "flex_group",
      label: "Flex Group",
    },
  ],
};

export const flexColSpacing = {
  type: "select" as const,
  id: "flex_span",
  default: "col-span-12",
  label: "Spacing",
  options: [
    {
      value: "col-span-3",
      label: "One Quarter",
    },
    {
      value: "col-span-4",
      label: "One Third",
    },
    {
      value: "col-span-6",
      label: "Half",
    },
    {
      value: "col-span-8",
      label: "Two Thirds",
    },
    {
      value: "col-span-9",
      label: "Three Quarter",
    },
    {
      value: "col-span-12",
      label: "Full",
    },
  ],
};
