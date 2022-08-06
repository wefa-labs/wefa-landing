import { FaRegFile, FaFolder } from "@react-icons";

import { memo, useState } from "react";

import { NextSeo } from "next-seo";

import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  chakra,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableProps,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

import customScrollbar from "@definitions/utils/scrollbar";

import { Section, SectionHeading, ColorSelector } from "@components/common";
import PageTitle from "@components/page-title";

const TablePage: React.FC = (): JSX.Element => {
  const [size, setSize] = useState("sm");
  const [color, setColor] = useState("gray");
  return (
    <>
      <NextSeo title="Table Component" description="Table Component Examples" />
      <chakra.main>
        <PageTitle
          title="Table Component"
          body={
            <Text as="div">
              Here are a few examples of what you can do using the table
              component.
            </Text>
          }
        />

        <Stack
          pb={20}
          px={[2, 2, 10, 20]}
          spacing={20}
          direction="column"
          align="center"
        >
          <SectionHeading mt={10} mb={0}>
            Simple Table
          </SectionHeading>
          <Section w="full" maxWidth="container.md" my={0}>
            <Box sx={customScrollbar()} overflow="auto">
              <TableExample variant="simple" />
            </Box>
          </Section>
          <SectionHeading mb={0}>Striped Table</SectionHeading>
          <Section w="full" maxWidth="container.md" my={0}>
            <Box sx={customScrollbar()} overflow="auto">
              <TableExample variant="striped" />
            </Box>
          </Section>

          <SectionHeading mt={10} mb={0}>
            Table Sizing
          </SectionHeading>
          <Section w="full" maxWidth="container.md" my={0}>
            <RadioGroup defaultValue={size} onChange={setSize}>
              <Stack wrap="wrap" justify="center" direction="row" mb="4">
                <Radio value="sm">Small</Radio>
                <Radio value="md">Medium</Radio>
                <Radio value="lg">Large</Radio>
              </Stack>
            </RadioGroup>
            <TableExample size={size} />
          </Section>

          <SectionHeading mt={10} mb={0}>
            Celled Table
          </SectionHeading>
          <Section w="full" maxWidth="container.md" my={0}>
            <Flex justify="center" mb={8}>
              <ColorSelector
                initColor={color}
                onClick={(e) => setColor(e.currentTarget.name)}
              />
            </Flex>

            <Box sx={customScrollbar()} overflow="auto">
              <TableCell rounded="md" colorScheme={color} variant="celled" />
            </Box>
          </Section>

          <SectionHeading mt={10} mb={0}>
            Structured
          </SectionHeading>
          <Section w="full" maxWidth="container.md" my={0}>
            <Box sx={customScrollbar()} overflow="auto">
              <Table variant="structured" colorScheme={color}>
                <Thead>
                  <Tr>
                    <Th rowSpan={2}>Company</Th>
                    <Th rowSpan={2}>Mode</Th>
                    <Th rowSpan={2}>Team</Th>
                    <Th textAlign="center" colSpan={3}>
                      Languages
                    </Th>
                  </Tr>
                  <Tr>
                    <Th>Ruby</Th>
                    <Th>JavaScript</Th>
                    <Th>Python</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Massive Inc.</Td>
                    <Td>Prod</Td>
                    <Td textAlign="right">12</Td>
                    <Td textAlign="center">
                      <CheckIcon color="green.300" />
                    </Td>
                    <Td></Td>
                    <Td></Td>
                  </Tr>
                  <Tr>
                    <Td rowSpan={3}>Acme Corp.</Td>
                    <Td>Dev</Td>
                    <Td textAlign="right">6</Td>
                    <Td textAlign="center">
                      <CheckIcon color="green.300" />
                    </Td>
                    <Td></Td>
                    <Td textAlign="center">
                      <CheckIcon color="green.300" />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Prod</Td>
                    <Td textAlign="right">10</Td>
                    <Td></Td>
                    <Td textAlign="center">
                      <CheckIcon color="green.300" />
                    </Td>
                    <Td></Td>
                  </Tr>
                  <Tr>
                    <Td>Alpha</Td>
                    <Td textAlign="right">7</Td>
                    <Td textAlign="center">
                      <CheckIcon color="green.300" />
                    </Td>
                    <Td></Td>
                    <Td textAlign="center">
                      <CheckIcon color="green.300" />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Section>
        </Stack>
      </chakra.main>
    </>
  );
};

const TableExample: React.FC<TableProps> = memo(({ ...rest }) => {
  return (
    <Table {...rest}>
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td isNumeric>25.4</Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
});

const TableCell: React.FC<TableProps> = memo(({ ...rest }) => {
  return (
    <Table {...rest}>
      <Thead>
        <Tr>
          <Th colSpan={3}>Git Repository</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td fontWeight="500">
            <Flex align="center">
              <Icon as={FaFolder} mr={2} />
              <Text as="span">node_modules</Text>
            </Flex>
          </Td>
          <Td>Initial commit</Td>
          <Td>10 hours ago</Td>
        </Tr>
        <Tr>
          <Td fontWeight="500">
            <Flex align="center">
              <Icon as={FaFolder} mr={2} />
              <Text as="span">test</Text>
            </Flex>
          </Td>
          <Td>Initial commit</Td>
          <Td>10 hours ago</Td>
        </Tr>
        <Tr>
          <Td fontWeight="500">
            <Flex align="center">
              <Icon as={FaFolder} mr={2} />
              <Text as="span">build</Text>
            </Flex>
          </Td>
          <Td>Initial commit</Td>
          <Td>10 hours ago</Td>
        </Tr>
        <Tr>
          <Td>
            <Flex align="center">
              <Icon as={FaRegFile} mr={2} />
              <Text as="span">package.json</Text>
            </Flex>
          </Td>
          <Td>Initial commit</Td>
          <Td>10 hours ago</Td>
        </Tr>
        <Tr>
          <Td>
            <Flex align="center">
              <Icon as={FaRegFile} mr={2} />
              <Text as="span">index.js</Text>
            </Flex>
          </Td>
          <Td>Initial commit</Td>
          <Td>10 hours ago</Td>
        </Tr>
      </Tbody>
    </Table>
  );
});

export default TablePage;
