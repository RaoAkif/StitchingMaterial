import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Container, Heading, Text, Stack, Link } from '@chakra-ui/react';

import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Stitching Material</title>
      </Head>
      <Container maxW="container.lg" py={{ base: 10, md: 16 }}>
        <Stack spacing={6}>
          <Heading as="h1" size="2xl">
            Contact Us
          </Heading>
          <Text fontSize="lg" color="gray.700">
            Have a question about an order, product availability, or custom materials? Our customer care team is happy to help.
          </Text>
          <Stack spacing={3} fontSize="md" color="gray.600">
            <Text>
              Email us at{' '}
              <Link href="mailto:support@stitchingmaterial.com" color="blue.500">
                support@stitchingmaterial.com
              </Link>
              .
            </Text>
            <Text>
              Call us at{' '}
              <Link href="tel:+18001234567" color="blue.500">
                +1 (800) 123-4567
              </Link>
              .
            </Text>
            <Text>
              For product advice, shipping questions, or wholesale inquiries, reach out and we’ll get back to you within one business day.
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

export default ContactPage;
