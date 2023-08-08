import LoadingProvider from '@src/provider/loading.provider';
import '@styles/global.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoadingProvider>
        <Component {...pageProps} />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paintbox" element={<DemoPaintBox />} />
          </Routes>
          <Component {...pageProps} />
        </BrowserRouter> */}
      </LoadingProvider>
    </>
  );
}

export default MyApp;
