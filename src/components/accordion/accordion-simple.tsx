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

const AccordionSimple: React.FC<IAccordion.IProps> = ({
  accordions,
  isPlus = false,
  ...rest
}: IAccordion.IProps): JSX.Element => {
  return (
    <Accordion {...rest}>
      {accordions.map((a, idx) => (
        <AccordionItem
          // key={a.title}
          key={idx}
          isDisabled={a.isDisabled ?? false}
          border={0}
          mb={6}
          rounded="md"
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="lg"
          transition="all 300ms ease"
          _hover={{
            // bg: useColorModeValue("gray.50", "gray.900"),
            rounded: "md",
          }}
        >
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  rounded="md"
                  p={6}
                  _hover={{
                    bg: "none",
                    rounded: "md",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text
                      fontWeight={500}
                      fontSize="md"
                      // textTransform="uppercase"
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
              </h2>
              <AccordionPanel pb={10} px={6}>
                {a.body}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

if (__DEV__) {
  AccordionSimple.displayName = "AccordionSimple";
}

export default memo(AccordionSimple);
