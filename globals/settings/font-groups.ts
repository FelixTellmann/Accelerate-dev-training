const toSnakeCase = (str: string) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("_");

export const fontGroups = ({
  name,
  default_tag,
  min,
  max,
  default_size,
  sm_min,
  sm_max,
  sm_default_size,
  weight = 400,
  step = 1,
  line_height = 110,
  letter_spacing = 0,
  default_uppercase = false,
}: {
  name: string;
  default_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  min: number;
  max: number;
  default_size: number;
  sm_min: number;
  sm_max: number;
  sm_default_size: number;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  step?: number;
  line_height?: number;
  letter_spacing?: number;
  default_uppercase?: boolean;
}) => {
  return [
    {
      type: `header` as const,
      content: name,
    },
    {
      type: "select" as const,
      id: `font_${toSnakeCase(name)}_tag`,
      label: "HTML Tag",
      info: "You can change the default HTML Tag used to create a proper SEO hierarchy",
      default: default_tag,
      options: [
        {
          value: "p",
          label: "p",
        },
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
          value: "blockquote",
          label: "blockquote",
        },
        {
          value: "div",
          label: "div",
        },
      ],
    },
    {
      type: `font_picker` as const,
      id: `font_${toSnakeCase(name)}`,
      label: `Font Family`,
      default: `helvetica_n4`,
    },
    {
      type: `text` as const,
      id: `font_${toSnakeCase(name)}_custom`,
      label: `Custom font family`,
    },
    {
      type: `html` as const,
      id: `font_${toSnakeCase(name)}_custom_src`,
      label: `Custom font src HTML`,
    },
    {
      type: `range` as const,
      id: `font_${toSnakeCase(name)}_size`,
      label: `Desktop Font Size`,
      default: default_size,
      min: min,
      max: max,
      step: step,
      unit: `px`,
    },
    {
      type: `range` as const,
      id: `font_${toSnakeCase(name)}_mobile_size`,
      label: `Mobile Font Size`,
      default: sm_default_size,
      min: sm_min,
      max: sm_max,
      step: step,
      unit: `px`,
    },

    /*
    {
      type: `range` as const,
      id: `font_${toSnakeCase(name)}_scale`,
      min: 50,
      max: 150,
      step: 5,
      unit: `%`,
      label: `Font size scale`,
      default: 100,
    },*/ {
      type: `range` as const,
      id: `font_${toSnakeCase(name)}_weight`,
      label: `Font Weight`,
      default: weight,
      min: 100,
      max: 900,
      step: 100,
    },
    {
      type: `range` as const,
      id: `font_${toSnakeCase(name)}_line_height`,
      label: `Line Height Percentage`,
      default: line_height,
      min: 90,
      max: 190,
      step: 1,
      unit: "%",
    },
    {
      type: `range` as const,
      id: `font_${toSnakeCase(name)}_letter_spacing`,
      label: `Letter Spacing`,
      default: letter_spacing,
      min: -10,
      max: 10,
      step: 1,
      unit: "%",
    },
    {
      type: "checkbox" as const,
      id: `font_${toSnakeCase(name)}_uppercase`,
      label: "Uppercase",
      default: default_uppercase,
    },
    {
      type: "paragraph" as const,
      content: " ",
    },
    {
      type: "paragraph" as const,
      content: " ",
    },
  ];
};
