import { NextSeo } from "next-seo";

import { chakra, Container, Text } from "@chakra-ui/react";

import PageTitle from "@components/page-title";
import { PageTransition } from "@components/page-transition";

const PageTransitionPage: React.FC = (): JSX.Element => {
  return (
    <>
      <NextSeo title="Page Transition" description="Page Transition Examples" />

      <PageTransition>
        <PageTitle
          title="Page Transition"
          body="When you enter the page, you will see a simple animation."
        />
      </PageTransition>

      <PageTransition
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <chakra.main>
          <Container my={12} maxW="container.sm">
            <Text>
              Salutantibus vitae elit libero, a pharetra augue. Ambitioni
              dedisse scripsisse iudicaretur. Non equidem invideo, miror magis
              posuere velit aliquet. Curabitur est gravida et libero vitae
              dictum. A communi observantia non est recedendum. Fabio vel iudice
              vincam, sunt in culpa qui officia. Quam temere in vitiis, legem
              sancimus haerentia. Excepteur sint obcaecat cupiditat non proident
              culpa. Plura mihi bona sunt, inclinet, amari petere vellent.
              Paullum deliquit, ponderibus modulisque suis ratio utitur. Nec
              dubitamus multa iter quae et nos invenerat. Nihil hic munitissimus
              habendi senatus locus, nihil horum? Tityre, tu patulae recubans
              sub tegmine fagi dolor. Quae vero auctorem tractata ab fiducia
              dicuntur. Ut enim ad minim veniam, quis nostrud exercitation. Cum
              sociis natoque penatibus et magnis dis parturient. Mercedem aut
              nummos unde unde extricat, amaras. Tu quoque, Brute, fili mi,
              nihil timor populi, nihil! Prima luce, cum quibus mons aliud
              consensu ab eo. Qui ipsorum lingua Celtae, nostra Galli
              appellantur. Inmensae subtilitatis, obscuris et malesuada fames.
            </Text>
          </Container>
        </chakra.main>
      </PageTransition>
    </>
  );
};

export default PageTransitionPage;
