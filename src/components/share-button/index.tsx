import { memo } from "react";

import {
  Icon,
  Text,
  Tooltip,
  Link,
  Circle,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";

import { IShareButton } from "./share-button";

const ShareButton: React.FC<IShareButton.IProps> = ({
  text = "Share",
  bg,
  color,
  items,
  ...rest
}) => {
  return (
    <Wrap align="center" {...rest}>
      {text && (
        <WrapItem d={["none", "none", "inline"]}>
          <Text fontWeight="600">{text}</Text>
        </WrapItem>
      )}
      {items.map((item, idx) => (
        <WrapItem key={idx}>
          <Tooltip
            hasArrow
            rounded="xl"
            px={4}
            placement="top"
            label={item?.title}
            aria-label={`${item?.title} Tooltip`}
            bg={useColorModeValue(`${item.color}.400`, `${item.color}.600`)}
          >
            <Link href={item.href} isExternal>
              <Circle
                size="40px"
                color={color ? color : "whiteAlpha.800"}
                bg={bg ? bg : useColorModeValue("gray.300", "gray.700")}
                _hover={{
                  bg: useColorModeValue(
                    `${item.color}.400`,
                    `${item.color}.600`,
                  ),
                }}
              >
                <Icon as={item.icon} />
              </Circle>
            </Link>
          </Tooltip>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default memo(ShareButton);
