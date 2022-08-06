import { memo } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

import { IAccordion } from "./accordion";
import PlusMinusIcons from "./plus-minus-icons";

/**
 * AccordionFlat Component
 */
const AccordionFlat: React.FC<IAccordion.IProps> = ({
  accordions,
  isPlus = false,
  accordionButtonProps,
  accordionPanelProps,
  ...rest
}: IAccordion.IProps): JSX.Element => {
  return (
    <Accordion {...rest}>
      {accordions.map((a) => (
        <AccordionItem
          key={a.title}
          isDisabled={a.isDisabled ?? false}
          border={0}
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton
                borderBottom="1px solid"
                px={0}
                borderColor={useColorModeValue("gray.200", "gray.700")}
                _hover={{
                  bg: "none",
                }}
                {...accordionButtonProps}
              >
                <Box flex="1" textAlign="left">
                  <Text
                    fontWeight={
                      accordionButtonProps?.fontWeight
                        ? accordionButtonProps?.fontWeight
                        : 500
                    }
                    fontSize={
                      accordionButtonProps?.fontSize
                        ? accordionButtonProps?.fontSize
                        : "md"
                    }
                  >
                    {a.title}
                  </Text>
                </Box>
                {isPlus ? (
                  <PlusMinusIcons isExpanded={isExpanded} />
                ) : (
                  <AccordionIcon />
                )}
              </AccordionButton>
              <AccordionPanel {...accordionPanelProps}>{a.body}</AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

if (__DEV__) {
  AccordionFlat.displayName = "AccordionFlat";
}
export default memo(AccordionFlat);
