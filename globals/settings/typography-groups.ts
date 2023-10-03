export const typographyGroups = (index: string | number, defaultTitle = undefined) => {
  return {
    name: `Typography Group ${index}`,
    settings: [
      ...typeset({
        index,
        title: "Heading 1",
        tag: "h1",
        default_size_weight_height: "48px / 36px | 700 | 1",
        default_spacing_transform_style: "0 | none | normal",
      }),
      ...typeset({
        index,
        title: "Heading 2",
        tag: "h2",
        default_size_weight_height: "36px / 32px | 700 | 1.1",
        default_spacing_transform_style: "0 | none | normal",
      }),
      ...typeset({
        index,
        title: "Heading 3",
        tag: "h3",
        default_size_weight_height: "30px / 24px | 600 | 1.2",
        default_spacing_transform_style: "0 | none | normal",
      }),
      ...typeset({
        index,
        title: "Heading 4",
        tag: "h4",
        default_size_weight_height: "24px / 20px | 600 | 1.3",
        default_spacing_transform_style: "0 | none | normal",
      }),
      ...typeset({
        index,
        title: "Heading 5",
        tag: "h5",
        default_size_weight_height: "21px / 16px | 600 | 1.3",
        default_spacing_transform_style: "0 | none | normal",
      }),
      ...typeset({
        index,
        title: "Heading 6",
        tag: "h6",
        default_size_weight_height: "14px | 500 | 1.5",
        default_spacing_transform_style: "0 | none | normal",
      }),
      ...typeset({
        index,
        title: "Paragraph",
        tag: "p",
        default_size_weight_height: "16px | 400 | 1.7",
        default_spacing_transform_style: "0 | none | normal",
      }),
    ],
  };
};

export const typeset = ({
  index,
  title,
  tag,
  default_size_weight_height = "48px / 36px | 800 / 800 | 1.1 / 1.2 | 1 / 1",
  default_spacing_transform_style = "-.05em / -.01em | uppercase | italic",
}) => {
  return [
    {
      type: "header" as const,
      content: title,
    },
    {
      type: "select" as const,
      id: `typography_${index}_${tag}_tag`,
      label: "HTML Tag",
      info: "Adjust the default HTML Tag for SEO",
      default: tag,
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
      type: `text` as const,
      id: `typography_${index}_${tag}_font_family`,
      label: `Font Family`,
      default: "sans-serif",
    },
    {
      type: `text` as const,
      id: `typography_${index}_${tag}_size_weight_height`,
      label: `size | weight | height | opacity`,
      default: default_size_weight_height,
    },
    {
      type: `text` as const,
      id: `typography_${index}_${tag}_spacing_transform_style`,
      label: `spacing | transform | style`,
      default: default_spacing_transform_style,
    },
    {
      type: "paragraph" as const,
      content: " ",
    },
  ];
};

export const fontGroup = ({ index }) => {
  return [
    {
      type: `font_picker` as const,
      id: `font_family_${index}`,
      label: `Font Family`,
      default: `sans-serif`,
    },
    {
      type: `text` as const,
      id: `font_weights_${index}`,
      label: `Font Weights / Styles`,
      default: "300, 400, 400i, 700, 700i, 800",
    },
    {
      type: `text` as const,
      id: `font_custom_family_${index}`,
      label: `Custom font family`,
    },
    {
      type: `html` as const,
      id: `font_custom_src_${index}`,
      label: `Custom font src HTML`,
    },

    {
      type: "paragraph" as const,
      content: " ",
    },
  ];
};

export const singleTypeset = ({
  id,
  selector = "",
  default_size_weight_height = "16px | 400 | 1.2 | 1 ",
  default_spacing_transform_style = "0 | none | normal",
}) => {
  return [
    {
      type: "paragraph" as const,
      content: selector,
    },
    {
      type: `text` as const,
      id: `typography_${id}_font_family`,
      label: `Font family`,
      default: "inherit",
    },
    {
      type: `text` as const,
      id: `typography_${id}_size_weight_height`,
      label: `size | weight | height | opacity`,
      default: default_size_weight_height,
    },
    {
      type: `text` as const,
      id: `typography_${id}_spacing_transform_style`,
      label: `spacing | transform | style`,
      default: default_spacing_transform_style,
    },
    {
      type: "paragraph" as const,
      content: " ",
    },
  ];
};
