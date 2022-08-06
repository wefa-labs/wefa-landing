import React, { memo } from "react";

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

const AccordionDefault: React.FC<IAccordion.IProps> = ({
  accordions,
  isPlus = false,
  ...rest
}: IAccordion.IProps): JSX.Element => {
  return (
    <Accordion {...rest}>
      {accordions.map((accordion) => (
        <AccordionItem
          key={accordion.title}
          rounded="xl"
          isDisabled={accordion.isDisabled ?? false}
          border={0}
          mb={4}
          bg={useColorModeValue("gray.50", "gray.700")}
          transition="all 250ms ease"
          _hover={{
            bg: useColorModeValue("gray.100", "gray.900"),
            rounded: "xl",
          }}
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton
                outline="0px"
                rounded="xl"
                transition="all 250ms ease"
                _focus={{
                  boxShadow: "none",
                }}
              >
                <Box flex="1" textAlign="left">
                  <Text
                    fontWeight={500}
                    fontSize="sm"
                    textTransform="uppercase"
                  >
                    {accordion.title}
                  </Text>
                </Box>
                {isPlus ? (
                  <PlusMinusIcons isExpanded={isExpanded} />
                ) : (
                  <AccordionIcon />
                )}
                {/* <PlusMinusIcons isExpanded={isExpanded} /> */}
              </AccordionButton>
              <AccordionPanel pb={4}>{accordion.body}</AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

if (__DEV__) {
  AccordionDefault.displayName = "AccordionDefault";
}

export default memo(AccordionDefault);
