import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';

import { ProductTile } from '@src/components/features/product/ProductTile';
import { PageProductFieldsFragment } from '@src/lib/__generated/sdk';

interface ProductTileGridProps {
  title: string;
  products: Array<PageProductFieldsFragment | undefined | null>;
}

export const ProductTileGrid = ({ title, products }: ProductTileGridProps) => {
  return (
    <Container maxW="container.xl" py={{ base: 8, md: 12 }} px={{ base: 4, md: 8 }}>
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
        columnGap={{ base: 4, md: 6, lg: 8 }}
        rowGap={{ base: 6, md: 8, lg: 10 }}
      >
        {products.map((product, index) => {
          if (!product) return null;
          return (
            <GridItem key={index}>
              <ProductTile {...product} />
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};