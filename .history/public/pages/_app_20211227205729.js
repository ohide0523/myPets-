import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";
import ContextProvider from "../components/Context";



// material-ui\

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ContextProvider>
      <Head>
        <meta charSet="utf-8" />
        <title>MyPets</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>


    
      <Header />

      <Component {...pageProps} />
    
      <Footer />
    </ContextProvider>
  );
}

export default MyApp;
