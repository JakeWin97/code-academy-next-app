import "tailwindcss/tailwind.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "../style/styles.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Groceries 4U</title>
        <meta name="description" content="This is the Groceries 4U website" />
        <link rel="icon" href="/icon.png" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;