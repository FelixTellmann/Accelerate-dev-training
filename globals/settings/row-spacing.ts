export const rowSpacing = {
  type: "select" as const,
  id: "grid_row_span",
  default: "row-span-1",
  label: "Spacing",
  options: [
    {
      value: "row-span-1",
      label: "1 row",
    },
    {
      value: "row-span-2",
      label: "2 rows",
    },
    {
      value: "row-span-3",
      label: "3 rows",
    },
    {
      value: "row-span-4",
      label: "4 rows",
    },
    {
      value: "row-span-5",
      label: "5 rows",
    },
    {
      value: "row-span-6",
      label: "6 rows",
    },
  ],
};
