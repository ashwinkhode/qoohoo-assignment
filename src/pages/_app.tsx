import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/index.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { ButtonProvider } from "../context/ButtonAnimation";

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
          <Component key={router.pathname} {...pageProps} />
        </ButtonProvider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
