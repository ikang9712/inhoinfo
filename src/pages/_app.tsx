import Main from '@src/component/layout/main';
import HeaderProvider from '@src/provider/header.provider';

import '@styles/global.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeaderProvider>
      <Main>
        <Component {...pageProps} />
      </Main>
    </HeaderProvider>
  );
}

export default MyApp;
