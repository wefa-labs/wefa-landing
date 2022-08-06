import { memo } from "react";

import { ChakraProps, Tag, ThemingProps } from "@chakra-ui/react";

import { ItemsTag } from "@definitions/navigation/main";

interface IMenuItemTag extends ChakraProps, ThemingProps {
  title: string;
}

const MenuItemTag: React.FC<IMenuItemTag> = ({ title }) => {
  const hasTag = ItemsTag.length && ItemsTag.filter((e) => e.title === title);
  if (!hasTag.length) return <></>;

  const badge = hasTag[0]?.badge || "New";
  const colorScheme = hasTag[0]?.colorScheme || "green";
  return (
    <>
      {hasTag.length > 0 && (
        <Tag
          size="sm"
          borderRadius="full"
          variant="solid"
          colorScheme={colorScheme}
        >
          {badge}
        </Tag>
      )}
    </>
  );
};

MenuItemTag.displayName = "MenuItemTag";

export default memo(MenuItemTag);
