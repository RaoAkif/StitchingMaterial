import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import {
  Box,
  BoxProps,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  Icon,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useTranslation } from 'next-i18next';

import MobileLogo from '@icons/bonelli-mobile.png';
import DesktopLogo from '@icons/bonelli.png';
import { LanguageSelector } from '@src/components/features/language-selector';

export const HEADER_HEIGHT = 60;

const navLinks = [
  { labelKey: 'common.nav.about', href: '/about' },
  { labelKey: 'common.nav.contact', href: '/contact' },
  { labelKey: 'common.nav.privacyPolicy', href: '/privacy-policy' },
  { labelKey: 'common.nav.terms', href: '/terms' },
];

export const Header = (props: BoxProps) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Flex
        as="nav"
        position="sticky"
        top="0"
        width="100%"
        justifyContent="space-between"
        align="center"
        pl={{ base: 4, md: 12, lg: 12 }}
        pr={{ base: 4, md: 12, lg: 12 }}
        height={`${HEADER_HEIGHT}px`}
        zIndex="banner"
        bg={isScrolled ? 'rgba(255,255,255,0.94)' : 'rgba(255,255,255,0.82)'}
        boxShadow={isScrolled ? '0 16px 40px rgba(0,0,0,0.08)' : 'none'}
        borderBottom={isScrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent'}
        backdropFilter="saturate(180%) blur(16px)"
        transition="all 0.2s ease"
        {...props}>
        <NextLink href="/" passHref legacyBehavior>
          <ChakraLink title={t('common.homepage')} _hover={{ textDecoration: 'none' }}>
            <Box
              as="img"
              src={DesktopLogo.src}
              alt={t('common.logoImageAltText')}
              title={t('common.logoImageAltText')}
              display={{ base: 'none', md: 'block', lg: 'block' }}
              height={{ base: '40px', md: '60px', lg: '60px' }}
              mt={{ base: 0, md: '6px', lg: '10px' }}
            />
            <Box
              as="img"
              src={MobileLogo.src}
              alt={t('common.logoImageAltText')}
              title={t('common.logoImageAltText')}
              display={{ base: 'block', md: 'none', lg: 'none' }}
              height={{ base: '56px', md: '64px', lg: '64px' }}
            />
          </ChakraLink>
        </NextLink>

        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          {navLinks.map((link) => (
            <NextLink key={link.href} href={link.href} passHref legacyBehavior>
              <ChakraLink fontWeight="medium" color="gray.800" _hover={{ color: 'blue.500' }}>
                {t(link.labelKey)}
              </ChakraLink>
            </NextLink>
          ))}
        </HStack>

        <HStack spacing={4} align="center">
          <LanguageSelector />
          <IconButton
            aria-label="Open navigation menu"
            icon={<Icon as={AiOutlineMenu as any} />}
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            variant="ghost"
          />
        </HStack>
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader display="flex" justifyContent="space-between" alignItems="center">
            Menu
            <IconButton
              aria-label="Close navigation menu"
              icon={<Icon as={AiOutlineClose as any} />}
              onClick={onClose}
              variant="ghost"
            />
          </DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4} mt={4}>
              {navLinks.map((link) => (
                <NextLink key={link.href} href={link.href} passHref legacyBehavior>
                  <ChakraLink fontSize="lg" fontWeight="medium" onClick={onClose}>
                    {t(link.labelKey)}
                  </ChakraLink>
                </NextLink>
              ))}
              <LanguageSelector />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
