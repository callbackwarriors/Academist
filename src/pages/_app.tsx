import type { AppProps } from 'next/app';
import '../assets/styles/globals.css';
import '../assets/styles/scss/main.scss';
import StoreProvider from '../utils/Store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
  </StoreProvider>
  )
}
export default MyApp
