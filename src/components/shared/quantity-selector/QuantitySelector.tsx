import { Input } from '@chakra-ui/input';
import { Box, Button, Flex, FormControl, FormLabel, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

type QuantitySelectorProps = {
  productName?: string | null;
};

export const QuantitySelector = ({ productName }: QuantitySelectorProps) => {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState<number>(1);

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setQuantity(Number.isNaN(val) ? 0 : val);
  };

  const handleContactClick = () => {
    if (!phone) return;
    const message = `Hello, I'm interested in ${productName ?? 'this product'} (Qty: ${quantity}). Could you help me?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <FormControl>
      <Text
        as={FormLabel}
        variant="small"
        fontWeight="600"
        letterSpacing="0.1rem"
        textTransform="uppercase">
        {t('product.quantity')}
      </Text>
      <Flex flexDirection="row" mt={2}>
        <Input width={16} min={0} textAlign="center" type="number" defaultValue={1} onChange={handleQuantityChange} />
        <Button
          ml={2}
          bg="#25D366"
          color="white"
          _hover={{ bg: '#20ba5a' }}
          _active={{ bg: '#1ca34f' }}
          onClick={handleContactClick}
          isDisabled={!phone}
        >
          {t('product.contactWhatsapp')}
        </Button>
      </Flex>
    </FormControl>
  );
};
