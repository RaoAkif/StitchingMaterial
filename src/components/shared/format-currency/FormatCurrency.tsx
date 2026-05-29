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

  const formatted = new Intl.NumberFormat(locale, {
    style,
    currency: 'PKR',
    currencyDisplay: 'narrowSymbol',
  }).format(value);

  return formatted.replace(/^Rs(?=[\d\s\u00A0])/, 'Rs.');
};

export const FormatCurrency = (props: FormatCurrencyProps) => {
  const { locale: localeFromRouter } = useRouter();

  if (!localeFromRouter) return null;

  return <>{formatCurrencyFunc({ ...props, locale: localeFromRouter })}</>;
};
