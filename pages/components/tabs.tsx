import { useState } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  Container,
  Flex,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  ColorSelector,
  SectionHeading,
  SectionSubHeading,
} from "@components/common";
import Highlight from "@components/highlight";
import PageTitle from "@components/page-title";

const data = [
  {
    label: "Message",
    content:
      "Message enim ad minim veniam, quis nostrud exercitation. A communi observantia non est recedendum.",
  },
  {
    label: "Support",
    content:
      "Support incolunt Belgae, aliam Aquitani, tertiam. Morbi fringilla convallis sapien, id pulvinar odio volutpat.",
  },
  {
    label: "Contact",
    content:
      "Contact Ullamco laboris nisi ut aliquid ex ea commodi consequat. Quisque placerat facilisis egestas cillum dolore.",
  },
];

const StickyPage: React.FC = (): JSX.Element => {
  const [color, setColor] = useState("cyan");
  return (
    <>
      <NextSeo title="Tabs Component" description="Tabs Component Example" />
      <PageTitle
        title="Tabs Component"
        body={
          <Text as="div">
            On this page, you will find{" "}
            <Text as="div" display="inline-block" color="green.400">
              <Highlight strokeWidth={2}>
                <b>6 examples</b>
              </Highlight>
            </Text>{" "}
            of tabs component that you can easily use on your pages.
          </Text>
        }
      />
      <main>
        <Container py={20} maxW="container.xl">
          <Flex justify="center">
            <ColorSelector
              initColor={color}
              onClick={(e) => setColor(e.currentTarget.name)}
            />
          </Flex>
          <SectionHeading mb={8} mt={14}>
            Styles
          </SectionHeading>
          <Stack
            py={20}
            direction={{ base: "column", lg: "row" }}
            spacing="60px"
          >
            <Box flex="1">
              <SectionSubHeading
                color={useColorModeValue("gray.500", "gray.400")}
                fontWeight={700}
                textTransform="uppercase"
                mb={4}
              >
                Line Style
              </SectionSubHeading>
              <Tabs colorScheme={color}>
                <TabList>
                  {data.map((tab, index) => (
                    <Tab key={index}>{tab.label}</Tab>
                  ))}
                </TabList>

                <TabPanels>
                  {data.map((tab, index) => (
                    <TabPanel p={4} key={index}>
                      {tab.content}
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </Box>
            <Box flex="1">
              <SectionSubHeading
                color={useColorModeValue("gray.500", "gray.400")}
                fontWeight={700}
                textTransform="uppercase"
                mb={4}
              >
                Enclosed Style
              </SectionSubHeading>
              <Tabs variant="enclosed" colorScheme={color}>
                <TabList>
                  {data.map((tab, index) => (
                    <Tab key={index}>{tab.label}</Tab>
                  ))}
                </TabList>
                <TabPanels>
                  {data.map((tab, index) => (
                    <TabPanel p={4} key={index}>
                      {tab.content}
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </Box>
            <Box flex="1">
              <SectionSubHeading
                color={useColorModeValue("gray.500", "gray.400")}
                fontWeight={700}
                textTransform="uppercase"
                mb={4}
              >
                Soft rounded Style
              </SectionSubHeading>
              <Tabs variant="soft-rounded" colorScheme={color}>
                <TabList>
                  {data.map((tab, index) => (
                    <Tab key={index}>{tab.label}</Tab>
                  ))}
                </TabList>
                <TabPanels>
                  {data.map((tab, index) => (
                    <TabPanel p={4} key={index}>
                      {tab.content}
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </Box>
          </Stack>

          <SectionHeading>Tabs Alignment</SectionHeading>

          <Stack
            py={20}
            direction={{ base: "column", lg: "row" }}
            spacing="60px"
          >
            <Box flex="1">
              <SectionSubHeading
                color={useColorModeValue("gray.500", "gray.400")}
                fontWeight={700}
                textTransform="uppercase"
                mb={4}
              >
                Left
              </SectionSubHeading>
              <Tabs align="start" colorScheme={color}>
                <TabList>
                  {data.map((tab, index) => (
                    <Tab key={index}>{tab.label}</Tab>
                  ))}
                </TabList>

                <TabPanels>
                  {data.map((tab, index) => (
                    <TabPanel p={4} key={index}>
                      {tab.content}
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </Box>
            <Box flex="1">
              <SectionSubHeading
                color={useColorModeValue("gray.500", "gray.400")}
                fontWeight={700}
                textTransform="uppercase"
                mb={4}
              >
                Center
              </SectionSubHeading>
              <Tabs align="center" variant="enclosed" colorScheme={color}>
                <TabList>
                  {data.map((tab, index) => (
                    <Tab key={index}>{tab.label}</Tab>
                  ))}
                </TabList>

                <TabPanels>
                  {data.map((tab, index) => (
                    <TabPanel p={4} key={index}>
                      {tab.content}
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </Box>
            <Box flex="1">
              <SectionSubHeading
                color={useColorModeValue("gray.500", "gray.400")}
                fontWeight={700}
                textTransform="uppercase"
                mb={4}
              >
                Right
              </SectionSubHeading>
              <Tabs align="end" variant="soft-rounded" colorScheme={color}>
                <TabList>
                  {data.map((tab, index) => (
                    <Tab key={index}>{tab.label}</Tab>
                  ))}
                </TabList>

                <TabPanels>
                  {data.map((tab, index) => (
                    <TabPanel p={4} key={index}>
                      {tab.content}
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </Box>
          </Stack>

          <SectionHeading>Tabs Orientation</SectionHeading>

          <Stack
            py={20}
            direction={{ base: "column", lg: "row" }}
            spacing="60px"
          >
            <Box flex="1">
              <SectionSubHeading
                color={useColorModeValue("gray.500", "gray.400")}
                fontWeight={700}
                textTransform="uppercase"
                mb={4}
              >
                Horizontal
              </SectionSubHeading>
              <Tabs orientation="horizontal" align="start" colorScheme={color}>
                <TabList>
                  {data.map((tab, index) => (
                    <Tab key={index}>{tab.label}</Tab>
                  ))}
                </TabList>

                <TabPanels>
                  {data.map((tab, index) => (
                    <TabPanel p={4} key={index}>
                      {tab.content}
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </Box>
            <Box flex="1">
              <SectionSubHeading
                color={useColorModeValue("gray.500", "gray.400")}
                fontWeight={700}
                textTransform="uppercase"
                mb={4}
              >
                Vertical
              </SectionSubHeading>
              <Tabs orientation="vertical" align="start" colorScheme={color}>
                <TabList>
                  {data.map((tab, index) => (
                    <Tab key={index}>{tab.label}</Tab>
                  ))}
                </TabList>

                <TabPanels>
                  {data.map((tab, index) => (
                    <TabPanel p={4} key={index}>
                      {tab.content}
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </Box>
          </Stack>
        </Container>
      </main>
    </>
  );
};

export default StickyPage;
