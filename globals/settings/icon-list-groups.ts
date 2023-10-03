import { iconList } from "globals/settings/icon-list";

export const iconListGroups = (index: string | number) => {
  return [
    {
      ...iconList,
      id: `icon_${index}`,
      label: `Icon ${index}`,
    },
    {
      type: "image_picker" as const,
      id: `image_${index}`,
      label: `Image ${index}`,
    },
    {
      type: "richtext" as const,
      id: `heading_${index}`,
      label: `Heading ${index}`,
      info: "Leave the heading label blank to hide the icon column.",
    },
  ];
};
