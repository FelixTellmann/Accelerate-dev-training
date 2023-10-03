export const singleButtonStyles = ({
  id,
  selector = "",
  default_size_weight_height = "16px / 14px | 600 | 1.4 | 1",
  default_spacing_transform_style_whitespace = "0.00em | none | normal | normal",
  default_padding = "32px / 28px | 16px / 14px",
  default_border_shadow = "1px | 4px | 0 | 16px / 12px",
  default_hover_color_radius_shadow_scale = "1 | 4px | 0 | 100%",
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
      label: `border width | radius | shadow | icon gap`,
      default: default_border_shadow,
      info: "Use 0-5 for Shadows",
    },
    {
      type: `text` as const,
      id: `typography_${id}_hover`,
      label: `Hover Effect: color | radius | shadow | scale`,
      default: default_hover_color_radius_shadow_scale,
      info: "Colors: 0 = no change, 1 = default fade, 2 = swap primary/secondary, 3 = invert/outline. Shadows: Use 0-5 for shadows",
    },
    {
      type: "paragraph" as const,
      content: " ",
    },
  ];
};
