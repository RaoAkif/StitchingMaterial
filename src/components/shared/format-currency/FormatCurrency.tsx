import { useRouter } from 'next/router';

interface FormatCurrencyProps {
  value: number;
  locale?: string;
  style?: string;
  currency?: string;
}

export const formatCurrencyFunc = ({
  value,
  locale,
  style = 'currency',
}: FormatCurrencyProps) => {
  if (!locale) return null;

  return new Intl.NumberFormat(locale, {
    style,
    currency: 'PKR',
    currencyDisplay: 'narrowSymbol',
  }).format(value);
};

export const FormatCurrency = (props: FormatCurrencyProps) => {
  const { locale: localeFromRouter } = useRouter();

  if (!localeFromRouter) return null;

  return <>{formatCurrencyFunc({ ...props, locale: localeFromRouter })}</>;
};
