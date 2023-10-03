export const logoStyle = {
  type: "select" as const,
  id: "logo",
  default: "branding_logo_dark_on_light",
  options: [
    {
      value: "branding_logo_dark_on_light",
      label: "Dark on light background",
    },
    {
      value: "branding_logo_light_on_dark",
      label: "Light on dark background",
    },
    {
      value: "branding_logo_secondary_dark_on_light",
      label: "Secondary Logo Dark on light background",
    },
    {
      value: "branding_logo_secondary_light_on_dark",
      label: "Secondary Logo Light on dark background",
    },
    {
      value: "branding_logo_none",
      label: "Hidden",
    },
  ],
  label: "Logo",
};
