import { useContext } from "react";

import { NextSeo } from "next-seo";

import { Container, chakra, useColorModeValue, VStack } from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import { Section, SectionHeading, SectionSubHeading } from "@components/common";
import ImageLazyload from "@components/image-lazyload";
import PageTitle from "@components/page-title";

const ImageLazyloadPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  return (
    <>
      <NextSeo
        title="Image Lazy Loading component"
        description="Image Lazy Loading Component Examples"
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
          title="Image Lazy Loading Component"
          body="Lazy loading images that are not in the viewport improves initial page load performance and user experience."
        />
        <Container mt={[10, 14, 20]} maxW="container.md">
          <VStack align="stretch" mb={[10, 14, 20]} spacing={[10, 14, 20]}>
            <Section>
              <SectionHeading mb={2}>
                Remote Working in Iceland Self-Portrait
              </SectionHeading>
              <SectionSubHeading>
                Unsplash - High Resolution Image (2.7 Mb)
              </SectionSubHeading>
              <ImageLazyload
                // ratio={16 / 9}
                rounded="lg"
                image={{
                  width: 5823,
                  height: 3517,
                  src: "//source.unsplash.com/z3htkdHUh5w/5823x3517",
                  placeholder: "//source.unsplash.com/z3htkdHUh5w/80x48",
                }}
              />
            </Section>

            <Section>
              <SectionHeading mb={2}>Views around Tokyo</SectionHeading>
              <SectionSubHeading>
                Unsplash - High Resolution Image (3.5 Mb)
              </SectionSubHeading>
              <ImageLazyload
                rounded="lg"
                image={{
                  width: 6240,
                  height: 4160,
                  src: "//source.unsplash.com/NX2Nb8mnnOM/6240x4160",
                  placeholder: "//source.unsplash.com/NX2Nb8mnnOM/80x53",
                }}
              />
            </Section>

            <Section>
              <SectionHeading mb={2}>
                Torngat Mountains National Park, Canada
              </SectionHeading>
              <SectionSubHeading>
                High Resolution Image (24 Mb)
              </SectionSubHeading>
              <ImageLazyload
                // ratio={16 / 9}
                rounded="lg"
                image={{
                  width: 4962,
                  height: 3214,
                  src: "//effigis.com/wp-content/uploads/2015/02/Iunctus_SPOT5_5m_8bit_RGB_DRA_torngat_mountains_national_park_8bits_1.jpg",
                  placeholder:
                    "//effigis.com/wp-content/uploads/2014/10/Images-Satellites-Satellite-images-Samples-SPOT-5-EN.jpg",
                }}
              />
            </Section>

            <Section>
              <SectionHeading mb={2}>Engenho Velho de Brotas</SectionHeading>
              <SectionSubHeading>
                Unsplash - High Resolution Image (3.6 Mb)
              </SectionSubHeading>
              <ImageLazyload
                rounded="lg"
                image={{
                  width: 4838,
                  height: 3629,
                  src: "//source.unsplash.com/02_umdkLn_0/4838x3629",
                  placeholder: "//source.unsplash.com/02_umdkLn_0/80x60",
                }}
              />
            </Section>
          </VStack>
        </Container>
      </chakra.main>
    </>
  );
};

export default ImageLazyloadPage;
