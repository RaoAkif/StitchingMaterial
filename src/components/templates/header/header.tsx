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
          height={{ base: '45px', md: '70px', lg: '70px' }}
          mt={{ base: 0, md: 2, lg: 3 }}
        />
        <Box
          as="img"
          src={MobileLogo.src}
          alt={t('common.logoImageAltText')}
          title={t('common.logoImageAltText')}
          display={{ base: 'block', md: 'none', lg: 'none' }}
          height={{ base: '52px', md: '60px', lg: '60px' }}
        />
      </Link>
      <LanguageSelector />
    </Flex>
  );
};
