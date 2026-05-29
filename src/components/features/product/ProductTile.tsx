import { Box, Text, useTheme } from '@chakra-ui/react';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';

import { CtfImage } from '@src/components/features/contentful/ctf-image';
import { FormatCurrency } from '@src/components/shared/format-currency';
import { PageProductFieldsFragment } from '@src/lib/__generated/sdk';

export const ProductTile = ({
  name,
  featuredProductImage,
  price,
  slug,
  sys: { id: entryId },
}: PageProductFieldsFragment) => {
  const theme = useTheme();
  const inspectorProps = useContentfulInspectorMode({ entryId });

  return slug ? (
    <div {...inspectorProps({ fieldId: 'featuredProductImage' })}>
      <Box
        as={Link}
        href={slug}
        display="block"
        borderRadius={8}
        overflow="hidden"
        bg="white"
        boxShadow="0 10px 35px rgba(15, 23, 42, 0.08)"
        transition="transform 0.2s ease, box-shadow 0.2s ease"
        _hover={{ transform: 'translateY(-4px)', boxShadow: '0 18px 55px rgba(15, 23, 42, 0.14)' }}>
        {featuredProductImage && (
          <Box borderRadius={8} overflow="hidden" bg={theme.f36.gray100}>
            <CtfImage {...featuredProductImage} />
          </Box>
        )}

        <Box p={4} bg={theme.f36.gray50}>
          {name && (
            <Text
              {...inspectorProps({ fieldId: 'name' })}
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight="bold"
              noOfLines={2}
              lineHeight="1.3"
              color={theme.f36.gray900}>
              {name}
            </Text>
          )}
          {price && (
            <Text
              {...inspectorProps({ fieldId: 'price' })}
              mt={3}
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="extrabold"
              color={theme.f36.blue600}
              letterSpacing="tight">
              <FormatCurrency value={price} />
            </Text>
          )}
        </Box>
      </Box>
    </div>
  ) : null;
};
