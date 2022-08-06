import Sticky from "wil-react-sticky";

import { NextSeo } from "next-seo";

import {
  Box,
  Badge,
  Heading,
  Text,
  chakra,
  VStack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

import PageTitle from "@components/page-title";

const StickyPage: React.FC = (): JSX.Element => {
  const bg = useColorModeValue("gray.50", "gray.700");
  return (
    <>
      <NextSeo
        title="Sticky Component"
        description="Sticky Component Examples"
      />
      <chakra.main>
        <PageTitle
          title="Sticky Component"
          body={"Sticky Component for Header, Sidebar, Section list, etc"}
        />
        <Box>
          <Container my={16} maxW="container.sm">
            <Text fontSize="xl">
              Lorem ipsum dolor sit amet, consectetur adipisici elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi
              fringilla convallis sapien, id pulvinar odio volutpat. Sed haec
              quis possit intrepidus aestimare tellus. Ab illo tempore, ab est
              sed immemorabili. Curabitur est gravida et libero vitae dictum.
            </Text>
          </Container>

          <Box className="section-list">
            <Sticky containerSelectorFocus=".section-list">
              <Heading bg={bg} p={6} textAlign="center">
                Example Title
                <Badge mx={3}>sticky</Badge>
              </Heading>
            </Sticky>
            <Container my={8} maxW="container.sm">
              <VStack spacing={8}>
                <Text>
                  Ambitioni dedisse scripsisse iudicaretur. Magna pars
                  studiorum, prodita quaerimus. Sed haec quis possit intrepidus
                  aestimare tellus. Pellentesque habitant morbi tristique
                  senectus et netus. Etiam habebis sem dicantur magna mollis
                  euismod. Ut enim ad minim veniam, quis nostrud exercitation.
                </Text>
                <Text>
                  Quam temere in vitiis, legem sancimus haerentia. Petierunt uti
                  sibi concilium totius Galliae in diem certam indicere. Nihil
                  hic munitissimus habendi senatus locus, nihil horum? Hi omnes
                  lingua, institutis, legibus inter se differunt.
                </Text>
                <Text>
                  Plura mihi bona sunt, inclinet, amari petere vellent. Fabio
                  vel iudice vincam, sunt in culpa qui officia. Qui ipsorum
                  lingua Celtae, nostra Galli appellantur.
                </Text>
              </VStack>
            </Container>
          </Box>
        </Box>

        <Box className="section-list">
          <Sticky containerSelectorFocus=".section-list">
            <Heading bg={bg} p={6} textAlign="center">
              Tityre patulae recubans <Badge mx={3}>sticky</Badge>
            </Heading>
          </Sticky>
          <Container my={8} maxW="container.sm">
            <VStack spacing={8}>
              <Text>
                Tityre, tu patulae recubans sub tegmine fagi dolor. Pellentesque
                habitant morbi tristique senectus et netus. Hi omnes lingua,
                institutis, legibus inter se differunt. Nec dubitamus multa iter
                quae et nos invenerat.
              </Text>
              <Text>
                Tityre, tu patulae recubans sub tegmine fagi dolor. Quid securi
                etiam tamquam eu fugiat nulla pariatur. Magna pars studiorum,
                prodita quaerimus. Mercedem aut nummos unde unde extricat,
                amaras.
              </Text>
              <Text>
                Plura mihi bona sunt, inclinet, amari petere vellent. Fabio vel
                iudice vincam, sunt in culpa qui officia. Qui ipsorum lingua
                Celtae, nostra Galli appellantur.
              </Text>
              <Heading fontSize="xl">Heading</Heading>
              <Text>
                Tityre, tu patulae recubans sub tegmine fagi dolor. Pellentesque
                habitant morbi tristique senectus et netus. Hi omnes lingua,
                institutis, legibus inter se differunt. Nec dubitamus multa iter
                quae et nos invenerat.
              </Text>
              <Text>
                Tityre, tu patulae recubans sub tegmine fagi dolor. Quid securi
                etiam tamquam eu fugiat nulla pariatur. Magna pars studiorum,
                prodita quaerimus. Mercedem aut nummos unde unde extricat,
                amaras.
              </Text>
              <Text>
                Plura mihi bona sunt, inclinet, amari petere vellent. Fabio vel
                iudice vincam, sunt in culpa qui officia. Qui ipsorum lingua
                Celtae, nostra Galli appellantur.
              </Text>
            </VStack>
          </Container>
        </Box>
      </chakra.main>
    </>
  );
};

export default StickyPage;
