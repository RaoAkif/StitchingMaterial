import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import MobileLogo from '@icons/bonelli-mobile.png';
import DesktopLogo from '@icons/bonelli.png';
import { LanguageSelector } from '@src/components/features/language-selector';

export const HEADER_HEIGHT = 60;

export const Header = (props: BoxProps) => {
  const { t } = useTranslation();

  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      align="center"
      pl={{ base: 4, md: 12, lg: 12 }}
      pr={{ base: 4, md: 12, lg: 12 }}
      height={`${HEADER_HEIGHT}px`}
      zIndex="2"
      {...props}>
      <Link href="/" title={t('common.homepage')}>
        <Box
          as="img"
          src={DesktopLogo.src}
          alt={t('common.logoImageAltText')}
          title={t('common.logoImageAltText')}
          display={{ base: 'none', md: 'block', lg: 'block' }}
          width={{ base: '50px', md: '75px', lg: '75px' }}
          height={{ base: '50px', md: '75px', lg: '75px' }}
        />
        <Box
          as="img"
          src={MobileLogo.src}
          alt={t('common.logoImageAltText')}
          title={t('common.logoImageAltText')}
          display={{ base: 'block', md: 'none', lg: 'none' }}
          width={{ base: '56px', md: '64px', lg: '64px' }}
          height={{ base: '56px', md: '64px', lg: '64px' }}
        />
      </Link>
      <LanguageSelector />
    </Flex>
  );
};
