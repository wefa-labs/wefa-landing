import { memo, useContext, useMemo, useState } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  ChakraProps,
  Container,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import randomColor from "@definitions/utils/random-color";

import { SectionHeading } from "@components/common";
import Highlight from "@components/highlight";
import MasonrySimple from "@components/masonry/masonry-simple";
import PageTitle from "@components/page-title";

const MasonryPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  const [items, setItems] = useState<React.ReactElement[] | null>([]);

  useMemo(() => {
    const items = Array(14)
      .fill(null)
      .map((i, idx) => <Card index={idx} />);
    setItems(items);
  }, []);

  return (
    <>
      <NextSeo
        title="Masonry Component"
        description="Masonry Component Examples"
      />
      <chakra.main
        sx={{
          "*::selection": {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.200`, `${color}.700`),
          },
          mark: {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.100`, `${color}.800`),
          },
        }}
      >
        <PageTitle
          title="Masonry Component"
          body={
            <Text as="div">
              On this page, you will find{" "}
              <Text as="div" display="inline-block" color="green.400">
                <Highlight strokeWidth={2}>
                  <b>1 example</b>
                </Highlight>
              </Text>{" "}
              of Masonry component that you can easily use on your pages.
            </Text>
          }
        />

        <Container my={20} maxW="container.xl">
          <SectionHeading>Simple Masonry Example</SectionHeading>
          <MasonrySimple
            column={useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 }, "2")}
            items={items}
          />
        </Container>
      </chakra.main>
    </>
  );
};

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Card: React.FC<{ index: number } & ChakraProps> = memo(
  ({ index, ...rest }): JSX.Element => {
    const height = randomInteger(100, 700);
    return (
      <Flex
        p={6}
        align="center"
        justify="center"
        height={height}
        color={`${randomColor(index)}.700`}
        bgColor={`${randomColor(index)}.400`}
        {...rest}
      >
        <Box>
          <Heading fontSize="2xl">Item {index + 1}</Heading>
          <Text>{height}px</Text>
        </Box>
      </Flex>
    );
  },
);

export default MasonryPage;
