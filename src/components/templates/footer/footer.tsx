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
      pt={{ base: 10, lg: 16 }}
      pb={0}
      mt="auto"
      borderTop="1px"
      borderColor={theme.f36.gray200}>

      <Container maxW="container.xl" pb={{ base: 10, lg: 16 }}>
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
                <a href="mailto:stitchingmaterial@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                  stitchingmaterial@gmail.com
                </a>
              </Text>

              <Text fontSize="sm" color="gray.600">
                <a href="tel:+923184311548" style={{ textDecoration: 'none', color: 'inherit' }}>
                  +92 318 4311548
                </a>
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
                  <Icon as={social.icon as any} boxSize="18px" />
                </ChakraLink>
              ))}
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        bg="black"
        color="white"
        py={6}
        px={{ base: 4, md: 8 }}
        width="100%"
      >
        <Container maxW="container.xl">
          <HStack justify="space-between" flexDirection={{ base: 'column', md: 'row' }} gap={3}>
            <Text fontSize="sm" color="white">
              Copyright Stitching Material 2026
            </Text>
            <Text fontSize="sm" color="white">
              Designed for the modern sewing community.
            </Text>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};