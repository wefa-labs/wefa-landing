import { NextSeo } from "next-seo";

import { Box, Flex, chakra, Container } from "@chakra-ui/react";

import BlobOne from "@components/blobs/blob-1";
import BlobAnimation from "@components/blobs/blob-animate";
import PageTitle from "@components/page-title";

// TODO: complete the component for the next release.
const BlobPage: React.FC = (): JSX.Element => {
  return (
    <>
      <NextSeo title="Blob Component" description="Blob Component Examples" />
      <PageTitle
        title="Blob Component"
        body="Here are a few examples of what you can do using the blob component."
      />
      <chakra.main>
        <Container maxW="container.xl">
          <Flex py={10} alignItems="center" justifyContent="center">
            <Box>
              <BlobOne
                color="gray.200"
                // width="100%"
                minWidth="200px"
                minHeight="200px"
              />
            </Box>
            <BlobAnimation
              w="200px"
              h="200px"
              // zIndex={-1}
              // pos="absolute"
              // top="calc(50% - 100px)"
              // left="calc(50% - 100px)"
              isColorAnimated
              // isAnimated={false}
              numPoints={6}
              startColor="pink.50"
              stopColor="purple.100"
            />
          </Flex>
        </Container>
      </chakra.main>
    </>
  );
};

export default BlobPage;
