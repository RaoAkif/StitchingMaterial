import Head from 'next/head';
import { Container, Heading, Text, Stack } from '@chakra-ui/react';

const TermsPage = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions - StitchingMaterial</title>
      </Head>
      <Container maxW="container.lg" py={{ base: 10, md: 16 }}>
        <Stack spacing={6}>
          <Heading as="h1" size="2xl">
            Terms & Conditions
          </Heading>
          <Text fontSize="lg" color="gray.700">
            These terms govern your use of StitchingMaterial and the purchase of products through our website.
          </Text>
          <Stack spacing={4} fontSize="md" color="gray.600">
            <Text>
              Orders are subject to availability and confirmation of the order price. We reserve the right to refuse or cancel any order for any reason.
            </Text>
            <Text>
              Payment is processed securely through our payment provider. All prices are shown in USD unless otherwise indicated.
            </Text>
            <Text>
              Shipping timelines are estimates; actual delivery may vary due to carrier and destination conditions.
            </Text>
            <Text>
              Returns and exchanges are handled according to our store policy. Contact support for help with refunds and returns.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default TermsPage;
