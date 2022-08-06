import { useContext, useState } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Flex,
  Progress,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import {
  SectionHeading,
  SectionSubHeading,
  ColorSelector,
} from "@components/common";
import PageTitle from "@components/page-title";

const ProgressPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const globalColor = theme.colorScheme; // global default primary theme color
  const [color, setColor] = useState(globalColor);
  return (
    <>
      <NextSeo
        title="Progress Component"
        description="Progress Component Examples"
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
          title="Progress Component"
          body="Here are a few examples of what you can do using the progress component."
        />

        <Container py={10} maxW="container.xl">
          <Flex justify="center">
            <ColorSelector
              initColor={color}
              onClick={(e) => setColor(e.currentTarget.name)}
            />
          </Flex>
        </Container>

        <Container py={20} maxW="container.xl">
          <SectionHeading mb={0}>Styles</SectionHeading>
          <Stack
            align="center"
            py={20}
            spacing={20}
            direction={{ base: "column", lg: "row" }}
          >
            <Box w="full" flex="1">
              <SectionSubHeading>Default</SectionSubHeading>
              <Progress colorScheme={color} size="xs" value={64} />
            </Box>
            <Box w="full" flex="1">
              <SectionSubHeading>Stripe</SectionSubHeading>
              <Progress colorScheme={color} size="xs" hasStripe value={64} />
            </Box>
            <Box w="full" flex="1">
              <SectionSubHeading>Animated</SectionSubHeading>
              <Progress colorScheme={color} size="xs" isIndeterminate />
            </Box>
          </Stack>

          <SectionHeading mb={0}>Sizes</SectionHeading>

          <Stack
            align="center"
            py={20}
            spacing={20}
            direction={{ base: "column", lg: "row" }}
          >
            <Box w="full" flex="1">
              <SectionSubHeading>Small</SectionSubHeading>
              <Progress colorScheme={color} size="sm" value={20} />
            </Box>

            <Box w="full" flex="1">
              <SectionSubHeading>Medium</SectionSubHeading>
              <Progress colorScheme={color} size="md" value={20} />
            </Box>

            <Box w="full" flex="1">
              <SectionSubHeading>Large</SectionSubHeading>
              <Progress colorScheme={color} size="lg" value={20} />
            </Box>

            <Box w="full" flex="1">
              <SectionSubHeading>Custom(32px)</SectionSubHeading>
              <Progress colorScheme={color} height="32px" value={20} />
            </Box>
          </Stack>

          <SectionHeading mb={0}>Rounded Styles</SectionHeading>

          <Stack
            align="center"
            py={20}
            spacing={20}
            direction={{ base: "column", lg: "row" }}
          >
            <Box w="full" flex="1">
              <SectionSubHeading>Small</SectionSubHeading>
              <Progress rounded="sm" colorScheme={color} value={20} />
            </Box>

            <Box w="full" flex="1">
              <SectionSubHeading>Medium</SectionSubHeading>
              <Progress rounded="md" colorScheme={color} size="md" value={20} />
            </Box>

            <Box w="full" flex="1">
              <SectionSubHeading>Large</SectionSubHeading>
              <Progress rounded="lg" colorScheme={color} value={20} />
            </Box>

            <Box w="full" flex="1">
              <SectionSubHeading>Full</SectionSubHeading>
              <Progress rounded="full" colorScheme={color} value={20} />
            </Box>
          </Stack>

          <SectionHeading mb={0}>Circular Progress</SectionHeading>

          <Stack
            align="center"
            py={20}
            spacing={20}
            direction={{ base: "column", md: "row" }}
          >
            <Flex direction="column" justify="center" w="full" flex="1">
              <SectionSubHeading>Default</SectionSubHeading>
              <CircularProgress
                display="flex"
                justifyContent="center"
                color={useColorModeValue(`${color}.500`, `${color}.300`)}
                trackColor={useColorModeValue(
                  "blackAlpha.200",
                  "whiteAlpha.300",
                )}
                value={20}
              />
            </Flex>

            <Flex direction="column" justify="center" w="full" flex="1">
              <SectionSubHeading>Label</SectionSubHeading>
              <CircularProgress
                display="inline-flex"
                justifyContent="center"
                color={useColorModeValue(`${color}.500`, `${color}.300`)}
                trackColor={useColorModeValue(
                  "blackAlpha.200",
                  "whiteAlpha.300",
                )}
                value={20}
              >
                <CircularProgressLabel>20%</CircularProgressLabel>
              </CircularProgress>
            </Flex>

            <Flex direction="column" justify="center" w="full" flex="1">
              <SectionSubHeading>Animated</SectionSubHeading>
              <CircularProgress
                display="inline-flex"
                justifyContent="center"
                isIndeterminate
                color={useColorModeValue(`${color}.500`, `${color}.300`)}
                trackColor={useColorModeValue(
                  "blackAlpha.200",
                  "whiteAlpha.300",
                )}
                value={20}
              ></CircularProgress>
            </Flex>
          </Stack>

          <SectionHeading mb={0}>Thickness of circular progress</SectionHeading>

          <Stack
            align="center"
            py={20}
            spacing={20}
            direction={{ base: "column", md: "row" }}
          >
            <Flex direction="column" justify="center" w="full" flex="1">
              <SectionSubHeading>2px</SectionSubHeading>
              <CircularProgress
                display="flex"
                justifyContent="center"
                thickness="2px"
                color={useColorModeValue(`${color}.500`, `${color}.300`)}
                trackColor={useColorModeValue(
                  "blackAlpha.200",
                  "whiteAlpha.300",
                )}
                value={20}
              />
            </Flex>
            <Flex direction="column" justify="center" w="full" flex="1">
              <SectionSubHeading>4px</SectionSubHeading>
              <CircularProgress
                display="flex"
                justifyContent="center"
                thickness="4px"
                color={useColorModeValue(`${color}.500`, `${color}.300`)}
                trackColor={useColorModeValue(
                  "blackAlpha.200",
                  "whiteAlpha.300",
                )}
                value={20}
              />
            </Flex>
            <Flex direction="column" justify="center" w="full" flex="1">
              <SectionSubHeading>8px</SectionSubHeading>
              <CircularProgress
                display="flex"
                justifyContent="center"
                thickness="8px"
                color={useColorModeValue(`${color}.500`, `${color}.300`)}
                trackColor={useColorModeValue(
                  "blackAlpha.200",
                  "whiteAlpha.300",
                )}
                value={20}
              />
            </Flex>
            <Flex direction="column" justify="center" w="full" flex="1">
              <SectionSubHeading>12px</SectionSubHeading>
              <CircularProgress
                display="flex"
                justifyContent="center"
                thickness="12px"
                color={useColorModeValue(`${color}.500`, `${color}.300`)}
                trackColor={useColorModeValue(
                  "blackAlpha.200",
                  "whiteAlpha.300",
                )}
                value={20}
              />
            </Flex>
          </Stack>
        </Container>
      </chakra.main>
    </>
  );
};

export default ProgressPage;
