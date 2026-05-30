import { ChakraProvider } from '@chakra-ui/react';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { Inter, Poppins } from '@next/font/google';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Layout } from '@src/components/templates/layout';
import { theme } from '@src/theme';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  return (
    <ContentfulLivePreviewProvider
      locale={router.locale || 'en-US'}
      enableInspectorMode={pageProps.previewActive}
      enableLiveUpdates={pageProps.previewActive}>
      <ChakraProvider
        theme={{
          ...theme,
          fonts: {
            heading: `${poppins.style.fontFamily}, ${theme.fonts.heading}`,
            body: `${inter.style.fontFamily}, ${theme.fonts.body}`,
          },
        }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ContentfulLivePreviewProvider>
  );
};

export default appWithTranslation(App);
