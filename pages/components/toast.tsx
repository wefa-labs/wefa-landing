import { NextSeo } from "next-seo";

import type { AlertStatus } from "@chakra-ui/alert";
import {
  Button,
  Wrap,
  WrapItem,
  Stack,
  Text,
  useToast,
  ToastPosition,
} from "@chakra-ui/react";

import { Section, SectionSubHeading, SectionHeading } from "@components/common";
import { Notification } from "@components/notification";
import PageTitle from "@components/page-title";

interface IToastExampleProps {
  title: string;
  buttonText?: string;
  message: string;
}

const ToastExample: React.FC<IToastExampleProps> = ({
  buttonText,
  title,
  message,
}): JSX.Element => {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          // title: "Account created.",
          title: title,
          // description: "We've created your account for you.",
          description: message,
          // status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        })
      }
    >
      {buttonText ? buttonText : "Show Toast"}
    </Button>
  );
};

function ToastStatusExample() {
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];

  return (
    <Wrap align="center" justify="center">
      {statuses.map((status, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${status} toast`,
                status: status as AlertStatus,
                isClosable: true,
                position: "top-right",
              })
            }
          >
            {/* Show {status} toast */}
            {status}
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}

function ToastVariantsExample() {
  const toast = useToast();
  const variants = ["solid", "subtle", "left-accent", "top-accent"];

  return (
    <Wrap align="center" justify="center">
      {variants.map((variant, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${variant} toast`,
                variant: variant,
                isClosable: true,
                position: "top-left",
              })
            }
          >
            {variant}
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}

function PositionExample() {
  const toast = useToast();
  const positions = [
    "top",
    "top-right",
    "top-left",
    "bottom",
    "bottom-right",
    "bottom-left",
  ];

  return (
    <Wrap align="center" justify="center">
      {positions.map((position, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${position} toast`,
                position: position as ToastPosition,
                isClosable: true,
              })
            }
          >
            {/* Show {position} toast */}
            {position}
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}

const ToastPage: React.FC = (): JSX.Element => {
  const toast = useToast();
  return (
    <>
      <NextSeo title="Toast Component" description="Toast Component Examples" />
      <main>
        <PageTitle
          title="Toast Component"
          body={
            <Text as="div">
              Here are a few examples of what you can do using the toast
              component.
            </Text>
          }
        />

        <Stack px={10} mb={20} spacing={20} direction="column" align="center">
          <Section mb={0}>
            <SectionHeading mb={10}>Example Toast Usages</SectionHeading>
            <Stack
              justify="center"
              align="center"
              direction={["column", "row", "row"]}
              spacing={10}
            >
              <Section my={0}>
                <SectionSubHeading mb={10}>Simple Toast</SectionSubHeading>
                <ToastExample
                  buttonText="Simple Toast"
                  title="Simple Toast"
                  message="This is a simple Toast message."
                />
              </Section>

              <Section my={0}>
                <SectionSubHeading mb={10}>Custom Toast</SectionSubHeading>
                <Button
                  onClick={() =>
                    toast({
                      position: "top-right",
                      render: () => (
                        <Notification
                          title="Success"
                          message="Thanks for being awesome!"
                        />
                      ),
                    })
                  }
                >
                  Custom Toast
                </Button>
              </Section>
            </Stack>
          </Section>

          <Section my={0}>
            <SectionHeading mb={10}>Status</SectionHeading>
            <ToastStatusExample />
          </Section>

          <Section my={0}>
            <SectionHeading mb={10}>Variants</SectionHeading>
            <ToastVariantsExample />
          </Section>

          <Section my={0}>
            <SectionHeading mb={10}>Positions</SectionHeading>
            <PositionExample />
          </Section>
        </Stack>
      </main>
    </>
  );
};

export default ToastPage;
