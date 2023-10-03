export const singleDesignElementStyles = ({
  id,
  selector = "",
  default_size_weight_height = "16px / 14px | 600 | 1.4 | 1",
  default_spacing_transform_style_whitespace = "0.00em | none | normal | normal",
  default_padding = "32px / 28px | 16px / 14px",
  default_border_shadow = "1px | 4px | 0",
}) => {
  return [
    {
      type: "header" as const,
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
      label: `spacing | transform | style | white-space`,
      default: default_spacing_transform_style_whitespace,
    },
    {
      type: `text` as const,
      id: `typography_${id}_padding`,
      label: `horizontal padding | vertical padding`,
      default: default_padding,
    },
    {
      type: `text` as const,
      id: `typography_${id}_border`,
      label: `border width | radius | shadow`,
      default: default_border_shadow,
      info: "Use 0-5 for Shadows",
    },
    {
      type: "paragraph" as const,
      content: " ",
    },
  ];
};
