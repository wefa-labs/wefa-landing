import { GrApple } from "@react-icons";

import { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  Center,
  chakra,
  Container,
  Heading,
  Icon,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { SectionSubHeading, SectionHeading } from "@components/common";
import PageTitle from "@components/page-title";
import StatisticsBlock from "@components/statistics/statistics-block";

const StatisticPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo
        title="Statistics Component"
        description="Statistics Component Examples"
      />
      <chakra.main
        bg={useColorModeValue("gray.200", "gray.600")}
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
          title="Statistics Component"
          body="Here are a few examples of what you can do using the statistics component."
        />
        <VStack py={[10, 14, 20]} spacing={[10, 20, 32]}>
          {/* Statistics Usage Examples */}
          <Container maxW="container.xl">
            <SectionHeading>Statistics Usage Examples</SectionHeading>
            <SectionSubHeading>StatisticsBlock</SectionSubHeading>

            <Wrap justify="center" align="center" spacing={10} mx={4}>
              <StatisticsBlock heading="5,500" body="Downloads" />
              <StatisticsBlock
                heading="35,125"
                body="Views"
                direction="column-reverse"
              />

              <StatisticsBlock
                heading={
                  <Heading
                    fontSize="2xl"
                    lineHeight={1}
                    textAlign="center"
                    textTransform="uppercase"
                  >
                    <Text display="block" as="span">
                      Latest
                    </Text>
                    <Text display="block" as="span">
                      Technology
                    </Text>
                  </Heading>
                }
                body="Companies"
              />

              <StatisticsBlock
                heading={
                  <Heading
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    lineHeight={1}
                  >
                    <Icon as={GrApple} /> 120
                  </Heading>
                }
                body="Devices"
              />
            </Wrap>
          </Container>

          {/* Indicator statistics */}
          <Container maxW="container.xl">
            <SectionSubHeading>Indicator statistics</SectionSubHeading>
            <Center>
              <Wrap
                p={4}
                shadow="md"
                spacing={10}
                align="center"
                justify="center"
                px={[10, 10, 20]}
                rounded={["xl", "xl", "full"]}
                direction={["column", "column", "row"]}
                bg={useColorModeValue("white", "whiteAlpha.300")}
              >
                <WrapItem>
                  <Stat textAlign="center">
                    <StatLabel>Visitors</StatLabel>
                    <StatNumber>245k</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      13.45%
                    </StatHelpText>
                  </Stat>
                </WrapItem>

                <WrapItem>
                  <Stat textAlign="center">
                    <StatLabel>Impressions</StatLabel>
                    <StatNumber>73k</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      7.15%
                    </StatHelpText>
                  </Stat>
                </WrapItem>

                <WrapItem>
                  <Stat textAlign="center">
                    <StatLabel>Engagements</StatLabel>
                    <StatNumber>15k</StatNumber>
                    <StatHelpText>
                      <StatArrow type="decrease" />
                      9.05%
                    </StatHelpText>
                  </Stat>
                </WrapItem>
              </Wrap>
            </Center>
          </Container>

          {/* Descriptive statistics */}
          <Container maxW="container.xl">
            <SectionSubHeading>Descriptive statistics</SectionSubHeading>
            <Center>
              <Box
                p={4}
                minWidth={52}
                shadow={"md"}
                rounded={"full"}
                textAlign="center"
                bg={useColorModeValue("white", "whiteAlpha.300")}
              >
                <Stat>
                  <StatLabel>Account</StatLabel>
                  <StatNumber>£ 220.00</StatNumber>
                  <StatHelpText>Since last week</StatHelpText>
                </Stat>
              </Box>
            </Center>
          </Container>
        </VStack>
      </chakra.main>
    </>
  );
};

export default StatisticPage;
