import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';

import { ProductTile } from '@src/components/features/product/ProductTile';
import { PageProductFieldsFragment } from '@src/lib/__generated/sdk';

interface ProductTileGridProps {
  title: string;
  products: Array<PageProductFieldsFragment | undefined | null>;
}

export const ProductTileGrid = ({ title, products }: ProductTileGridProps) => {
  return (
    // By setting a strict maxW and mx="auto", the grid stops expanding on massive monitors 
    // and naturally creates beautiful, wide margins on the left and right walls.
    <Container 
      maxW="1200px" 
      mx="auto" 
      px={{ base: 4, md: 8, lg: 12 }} 
      py={{ base: 8, md: 12 }}
    >
      {title && (
        <Heading 
          as="h2" 
          size="xl" 
          fontWeight="semibold"
          mb={{ base: 6, md: 8 }}
          color="gray.800"
        >
          {title}
        </Heading>
      )}
      <Grid
        templateColumns={{ 
          base: '1fr', 
          sm: 'repeat(2, 1fr)', 
          lg: 'repeat(3, 1fr)' 
        }}
        // Keeping the column gap tight (max 32px / 2rem) forces the tiles closer 
        // together on desktop instead of letting them drift apart.
        columnGap={{ base: 4, md: 6, lg: 8 }}
        rowGap={{ base: 6, md: 8, lg: 10 }}
      >
        {products.map((product, index) => {
          if (!product) return null;
          return (
            <GridItem key={product.id || index}>
              <ProductTile {...product} />
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};