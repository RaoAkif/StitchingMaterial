import Head from 'next/head';
import { Container, Heading, Text, Stack } from '@chakra-ui/react';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About StitchingMaterial</title>
      </Head>
      <Container maxW="container.lg" py={{ base: 10, md: 16 }}>
        <Stack spacing={6}>
          <Heading as="h1" size="2xl">
            About StitchingMaterial
          </Heading>
          <Text fontSize="lg" color="gray.700">
            StitchingMaterial is your destination for premium sewing and tailoring supplies, carefully curated for makers, designers, and craft lovers.
          </Text>
          <Stack spacing={4} fontSize="md" color="gray.600">
            <Text>
              We carry materials that support every step of your creative process—from fabrics and threads to buttons, patterns, and professional tailoring tools.
            </Text>
            <Text>
              Our team is committed to providing trusted service, fast order fulfillment, and helpful guidance for both new sewers and experienced professionals.
            </Text>
            <Text>
              Whether you are designing custom garments, finishing a home sewing project, or stocking your studio, StitchingMaterial has the products and support you need.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default AboutPage;
