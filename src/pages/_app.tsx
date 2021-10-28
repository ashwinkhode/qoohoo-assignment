import Head from "next/head";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { ButtonProvider } from "../context/ButtonAnimationContext";
import "../styles/index.css";
import { ProductImageProvider } from "../context/ProductImageContext";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Qoohoo Assignment</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AnimatePresence>
        <ButtonProvider>
          <ProductImageProvider>
            <Component key={router.pathname} {...pageProps} />
          </ProductImageProvider>
        </ButtonProvider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
