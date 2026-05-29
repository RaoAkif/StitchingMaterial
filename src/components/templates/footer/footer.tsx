import {
  Box,
  Container,
  Text,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Heading,
  HStack,
  Divider,
  useTheme,
  Icon,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import type { IconType } from 'react-icons';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok } from 'react-icons/fa';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

const socialLinks: Array<{ label: string; href: string; icon: IconType }> = [
  { label: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
  { label: 'Facebook', href: 'https://facebook.com', icon: FaFacebookF },
  { label: 'Pinterest', href: 'https://pinterest.com', icon: FaPinterestP },
  { label: 'TikTok', href: 'https://tiktok.com', icon: FaTiktok },
];

export const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      as="footer"
      width="full"
      py={{ base: 10, lg: 16 }}
      mt="auto"
      borderTop="1px"
      borderColor={theme.f36.gray200}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Stack spacing={4}>
            <Heading as="h3" size="sm">
              {t('common.aboutUs')}
            </Heading>
            <Text>{t('common.description1')}</Text>
            <Text>{t('common.description2')}</Text>
          </Stack>

          <Stack spacing={4}>
            <Heading as="h3" size="sm">
              Site Links
            </Heading>
            {navLinks.map((link) => (
              <NextLink key={link.href} href={link.href} passHref legacyBehavior>
                <ChakraLink fontSize="sm" color="gray.600" _hover={{ color: 'blue.500' }}>
                  {link.label}
                </ChakraLink>
              </NextLink>
            ))}
          </Stack>

          <Stack spacing={4}>
            <Heading as="h3" size="sm">
              Stay Connected
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Get the latest offers, product drops, and sewing inspiration.
            </Text>
            <Stack spacing={2}>
              <Text fontWeight="semibold">Customer care</Text>
              <Text fontSize="sm" color="gray.600">
                support@stitchingmaterial.com
              </Text>
              <Text fontSize="sm" color="gray.600">
                +1 (800) 123-4567
              </Text>
            </Stack>
            <HStack spacing={3} mt={2}>
              {socialLinks.map((social) => (
                <ChakraLink
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  color="gray.600"
                  _hover={{ color: 'blue.500' }}>
                  {/* Bypassing internal library layout discrepancies safely using 'as any' */}
                  <Icon as={social.icon as any} boxSize="18px" />
                </ChakraLink>
              ))}
            </HStack>
          </Stack>
        </SimpleGrid>

        <Divider borderColor={theme.f36.gray200} mb={0} />

        <Box bg="black" color="white" py={6} px={{ base: 0, md: 4 }}>
          <HStack justify="space-between" flexDirection={{ base: 'column', md: 'row' }} gap={3}>
            <Text fontSize="sm" color="white">
              Copyright StitchingMaterial 2026
            </Text>
            <Text fontSize="sm" color="white">
              Designed for the modern sewing community.
            </Text>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};