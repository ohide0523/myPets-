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
<<<<<<< HEAD
=======
      <header className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Link href="/Top">
              <Typography variant="h6">MyPets!</Typography>
              </Link>
              <Switch></Switch>
            </div>
          </Toolbar>
        </AppBar>
      </header>

      <Component {...pageProps} />
      <footer
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          marginTop: "50px",
        }}
      >
        <div>
          <BottomNavigation
            sx={{ width: "100%" }}
            onChange={() => handleChange(e)}
            style={{
              background: "#f4f4f4",
            }}
          >
            <Link href="/Top">
              <Tooltip title="ホーム" arrow>
                <BottomNavigationAction
                  label="ホーム"
                  value="Home"
                  icon={<HomeIcon />}
                />
              </Tooltip>
            </Link>

            <Link href="/menu/alert/alert">
              <Tooltip title="通知" arrow>
                <BottomNavigationAction
                  label="お知らせ"
                  value="alert"
                  icon={<NotificationsActiveIcon />}
                />
              </Tooltip>
            </Link>
>>>>>>> main

    
      <Header />

      <Component {...pageProps} />
    
      <Footer />
    </ContextProvider>
  );
}

export default MyApp;
