import  ContextProvider from "../components/Context";
import Header from "../components/Header";
import Footer from "../components/Footer";

import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from "prop-types";
import Head from "next/head";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
       <HelmetProvider>
    <ContextProvider>
       <React.StrictMode>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        {/* <ThemeProvider theme={theme}> */}
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
          <Footer />
        {/* </ThemeProvider> */}
      </CacheProvider>
      </React.StrictMode>
    </ContextProvider>
      </HelmetProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
