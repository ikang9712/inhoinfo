import Main from '@src/component/layout/main';
import HeaderProvider from '@src/provider/header.provider';

import '@styles/global.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <HeaderProvider>
        <Main>
          <Component {...pageProps} />
        </Main>
      </HeaderProvider>
    </>
  );
}

export default MyApp;
