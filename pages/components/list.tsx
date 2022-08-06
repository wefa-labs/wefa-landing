import { useContext } from "react";

import { NextSeo } from "next-seo";

import { BellIcon, AddIcon, EmailIcon, SearchIcon } from "@chakra-ui/icons";
import {
  chakra,
  List,
  ListIcon,
  ListItem,
  OrderedList,
  Stack,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { Section, SectionHeading } from "@components/common";
import PageTitle from "@components/page-title";

const ListPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo title="List Component" description="List Component Examples" />
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
          title="List Component"
          body="Here are a few examples of what you can do using the list component."
        />

        <Stack mb={20} spacing={20} direction="column" align="center">
          <SectionHeading mt={10} mb={0}>
            Example List Usages
          </SectionHeading>
          <Section my={0}>
            <Stack
              justify="center"
              align="center"
              direction={["column", "column", "column", "row"]}
              spacing={10}
            >
              <Section my={0}>
                <SectionHeading mb={10}>Unordered list</SectionHeading>
                <UnorderedList stylePosition="inside">
                  <ListItem>Lorem ipsum dolor sit amet</ListItem>
                  <ListItem>Consectetur adipiscing elit</ListItem>
                  <ListItem>Integer molestie lorem at massa</ListItem>
                  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
              </Section>

              <Section my={0}>
                <SectionHeading mb={10}>Ordered list</SectionHeading>
                <OrderedList stylePosition="inside">
                  <ListItem>Lorem ipsum dolor sit amet</ListItem>
                  <ListItem>Consectetur adipiscing elit</ListItem>
                  <ListItem>Integer molestie lorem at massa</ListItem>
                  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </OrderedList>
              </Section>

              <Section my={0}>
                <SectionHeading mb={10}>Unstyled with icon</SectionHeading>
                <List spacing={0}>
                  <ListItem>
                    <ListIcon as={AddIcon} color="green.500" />
                    Lorem ipsum dolor sit amet
                  </ListItem>
                  <ListItem>
                    <ListIcon as={SearchIcon} color="green.500" />
                    Assumenda quia temporibus
                  </ListItem>
                  <ListItem>
                    <ListIcon as={EmailIcon} color="green.500" />
                    Quidem ipsam illum
                  </ListItem>
                  <ListItem>
                    <ListIcon as={BellIcon} color="green.500" />
                    Voluptatum quae eum fugit earum
                  </ListItem>
                </List>
              </Section>
            </Stack>
          </Section>
        </Stack>
      </chakra.main>
    </>
  );
};

export default ListPage;
