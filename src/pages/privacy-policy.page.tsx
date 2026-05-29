import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Container, Heading, Text, Stack } from '@chakra-ui/react';

import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - StitchingMaterial</title>
      </Head>
      <Container maxW="container.lg" py={{ base: 10, md: 16 }}>
        <Stack spacing={6}>
          <Heading as="h1" size="2xl">
            Privacy Policy
          </Heading>
          <Text fontSize="lg" color="gray.700">
            StitchingMaterial collects only the information needed to fulfill orders and provide excellent customer service.
          </Text>
          <Stack spacing={4} fontSize="md" color="gray.600">
            <Text>
              We use customer details to process purchases, manage shipping, and respond to inquiries. Personal data is never sold to third parties.
            </Text>
            <Text>
              When you place an order, we store billing and shipping details securely and use them only for order fulfillment, returns, and support.
            </Text>
            <Text>
              Our website uses cookies to improve shopping performance, remember preferences, and give you a better browsing experience.
            </Text>
            <Text>
              If you have questions about your data or want to request updates, please contact us at support@stitchingmaterial.com.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await getServerSideTranslations(locale)),
  },
});

export default PrivacyPolicyPage;
