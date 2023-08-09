import Main from '@src/component/layout/main';
import HeaderProvider from '@src/provider/header.provider';

import '@styles/global.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderProvider>
        <Main>
          <Component {...pageProps} />
        </Main>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paintbox" element={<DemoPaintBox />} />
          </Routes>
          <Component {...pageProps} />
        </BrowserRouter> */}
      </HeaderProvider>
    </>
  );
}

export default MyApp;
