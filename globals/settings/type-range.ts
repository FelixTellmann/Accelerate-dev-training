export function fontTypeRangeOld({
  id,
  label,
  default_font = 2,
}: {
  default_font?: number;
  id: string;
  label: string;
}) {
  return {
    type: "range" as const,
    id: id,
    label: label,
    default: default_font,
    min: 1,
    max: 13,
    step: 1,
    info: "h1-h6, Additional 7-12, 13 for Body Font",
  };
}

export function fontTypeRange({
  id,
  label,
  default_font = 1,
}: {
  default_font?: number;
  id: string;
  label: string;
}) {
  return {
    type: "range" as const,
    id: id,
    label: label,
    default: default_font,
    min: 1,
    max: 4,
    step: 1,
    info: "Typography Groups 1 - 4",
  };
}

export function fontTagSelect({
  id,
  label,
  default_font = "p",
}: {
  default_font?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  id: string;
  label: string;
}) {
  return {
    type: "select" as const,
    id: id,
    label: label,
    default: default_font,
    options: [
      {
        value: "h1",
        label: "h1",
      },
      {
        value: "h2",
        label: "h2",
      },
      {
        value: "h3",
        label: "h3",
      },
      {
        value: "h4",
        label: "h4",
      },
      {
        value: "h5",
        label: "h5",
      },
      {
        value: "h6",
        label: "h6",
      },
      {
        value: "p",
        label: "p",
      },
    ],
  };
}
