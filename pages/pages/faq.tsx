import React, { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  chakra,
  Container,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import Site from "@definitions/site";

import AccordionFlat from "@components/accordion/accordion-flat";
import { Section } from "@components/common";
import PageTitle from "@components/page-title";

import BuyCTA from "@blocks/buy-cta";

const FAQPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const activeColor = useColorModeValue(`${color}.500`, `${color}.200`);

  return (
    <>
      <NextSeo
        title="Frequently Asked Question"
        description="Frequently Asked Question Example Page"
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
          title="FAQ"
          body="Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team via hello@mercury.tld."
        />
        <Container maxW="container.md">
          <Section>
            <Heading mt={10} mb={6}>
              Buying
            </Heading>
            <AccordionFlat
              accordionButtonProps={{
                fontWeight: "600",
                fontSize: "1.125rem",
                py: 6,
                _hover: {
                  color: activeColor,
                },
                _expanded: {
                  color: activeColor,
                },
              }}
              accordionPanelProps={{
                px: 0,
                py: 10,
              }}
              allowToggle
              isPlus
              accordions={BuyingFAQ}
            />
          </Section>

          <Section>
            <Heading mt={10} mb={6}>
              Support
            </Heading>
            <AccordionFlat
              accordionButtonProps={{
                fontWeight: "600",
                fontSize: "1.125rem",
                py: 6,
                _hover: {
                  color: activeColor,
                },
                _expanded: {
                  color: activeColor,
                },
              }}
              accordionPanelProps={{
                px: 0,
                py: 10,
              }}
              allowToggle
              isPlus
              accordions={SupportFAQ}
            />
          </Section>

          <Section mb={20}>
            <Heading mt={10} mb={6}>
              Payments
            </Heading>
            <AccordionFlat
              accordionButtonProps={{
                fontWeight: "600",
                fontSize: "1.125rem",
                py: 6,
                _hover: {
                  color: activeColor,
                },
                _expanded: {
                  color: activeColor,
                },
              }}
              accordionPanelProps={{
                px: 0,
                py: 10,
              }}
              allowToggle
              isPlus
              accordions={PaymentsFAQ}
            />
          </Section>
        </Container>

        <Container my={[10, 20, 32]} maxW="container.lg">
          <BuyCTA
            title="Ready to get started ?"
            body="Easily create your website using the production-ready pages we have prepared for you."
            link="Buy Now"
            href={Site.purchase}
            p={[10, 10, 20]}
            rounded="xl"
            mx="auto"
            justifyContent="center"
            overflow="hidden"
            colorScheme={color}
            shadow="2xl"
          />
        </Container>
      </chakra.main>
    </>
  );
};

export default FAQPage;

/* -------------------------------------------------------------------------- */
/*                                 PAGE CONTENTS                              */
/* -------------------------------------------------------------------------- */

const BuyingFAQ = [
  {
    title: "How do I purchase an item?",
    body: (
      <>
        <Text pb={2}>
          If you’re after only one item, simply choose the "
          <strong>Buy Now</strong>" option on the item page. This will take you
          directly to Checkout.
        </Text>
        <Text>
          If you want several items, use the "<strong>Add to Cart</strong>"
          button and then choose "Keep Browsing" to continue shopping or
          "Checkout" to finalise your purchase. You can go back to your cart at
          any time by clicking on the shopping cart icon at the top right side
          of the page.
        </Text>
      </>
    ),
  },
  {
    title: "Where is my purchase code?",
    body: (
      <OrderedList spacing={3} p={0} ml={5}>
        <ListItem>Log into your Marketplace account.</ListItem>
        <ListItem>
          Hover the mouse over your username at the top of the screen.
        </ListItem>
        <ListItem>
          Click "<strong>Downloads</strong>" from the drop-down menu.
        </ListItem>
        <ListItem>
          Click "<strong>License certificate & purchase code</strong>"
          (available as PDF or text file).
        </ListItem>
      </OrderedList>
    ),
  },
];

const SupportFAQ = [
  {
    title: "What is Item Support?",
    body: "Item support is a service provided by many authors. Having support for your purchased item means that the author will be available to you, the buyer, to troubleshoot any potential problems you may encounter while using the item.",
  },
  {
    title: "How do I check item compatibility?",
    body: 'You can check the item browser, feature and software version compatibility, as well as other item attributes by viewing the item information table (below the buyer rating on the right hand side of the page) on the "Item Details" Tab.',
  },
  {
    title: "My item is not working",
    body: (
      <>
        <Text mb={2}>
          It’s important to keep in mind that there is often a difference
          between an item that is broken versus an error message.
        </Text>
        <Text mb={2}>
          Error messages could be related to an incorrect setup, configuration
          or software and as a result, the item is not working, eg. - missing
          style.css stylesheet.
        </Text>
        <Text>
          If you are having a problem with an item, we encourage you to read and
          search the item comments. Someone else may have experienced the same
          problem, and your answer may be found in the comments to help you get
          the item working.
        </Text>
      </>
    ),
  },
  {
    title: "How to contact an author",
    body: (
      <>
        <Text mb={2}>
          If you want to ask questions about how an item works before buying,
          need help using an item you’ve purchased or just want to tell an
          author how much you love their work, that's great! Contacting an
          author is easy and you have a few options available to do this.
        </Text>
        <Text mb={2} fontWeight="bolder">
          To post a comment:
        </Text>
        <OrderedList spacing={3} mb={4}>
          <ListItem>Sign in (or sign up!) for a Marketplace account</ListItem>
          <ListItem>
            From the item page click the <b>Comments</b> tab
          </ListItem>
          <ListItem>
            Scroll to the bottom of the page and type your comment
          </ListItem>
          <ListItem>
            Then, click <b>Post Comment</b>.
          </ListItem>
        </OrderedList>
        <Text mb={2} fontWeight="bolder">
          To send an email:
        </Text>
        <UnorderedList spacing={3} mb={2}>
          <ListItem>Sign in or sign up for an Marketplace account</ListItem>
          <ListItem>
            From the item page click the author's name or logo (on the
            right-hand side)
          </ListItem>
          <ListItem>
            Scroll to the bottom of the page and type your message
          </ListItem>
          <ListItem>
            Click <b>Send</b>.
          </ListItem>
        </UnorderedList>
      </>
    ),
  },
  {
    title: "Giving feedback on items",
    body: (
      <UnorderedList>
        <ListItem>
          View the item on your <b>Downloads</b> page.
        </ListItem>
        <ListItem>
          After downloading the item a <b>Ratings</b> box will be shown.
        </ListItem>
        <ListItem>Ratings are between 1 (Poor) and 5 (Excellent).</ListItem>
        <ListItem>All ratings will require a review reason.</ListItem>
        <ListItem>
          A rating of 3 or lower requires additional comments.
        </ListItem>
      </UnorderedList>
    ),
  },
];

const PaymentsFAQ = [
  {
    title: "What methods of payments are supported?",
    body: "Marketplace provides three payment methods, PayPal, Skrill (for non US customers only) and credit cards (Visa or Mastercard), to make purchases. We don't support cryptocurrencies or invoicing at this time.",
  },
  {
    title: "Can I get a refund?",
    body: (
      <UnorderedList spacing={3} p={0} ml={5}>
        <ListItem>
          Our refund policy was made to be transparent so your experience is as
          smooth as possible and gives you a "fair go" by using a baseline
          standard
        </ListItem>
        <ListItem>
          If your refund request is declined by the author and you disagree with
          their decision, you can raise a dispute to have our Help Team
          investigate the claim.
        </ListItem>
        <ListItem>
          If you're looking for more information, we've created a more in-depth
          guide called How do refunds work?
        </ListItem>
      </UnorderedList>
    ),
  },
  {
    title: "Paypal disputes and chargebacks",
    body: (
      <>
        <Text mb={6} fontWeight="bolder">
          Will disputing the transaction in PayPal or filing a chargeback speed
          up my refund request?
        </Text>
        <UnorderedList spacing={3}>
          <ListItem>
            We'd really like the opportunity to look into your request first, so
            please get in touch with us by creating a refund request.
          </ListItem>
          <ListItem>
            Before submitting a refund request, please read the article{" "}
            <b>Can I get a refund?</b>
          </ListItem>
          <ListItem>
            As a security measure, if you open a dispute in PayPal or file a
            chargeback, your Marketplace account will be automatically disabled
            and you will not have access to any item purchases until it's
            resolved.
          </ListItem>
        </UnorderedList>
      </>
    ),
  },
];
