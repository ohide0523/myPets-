import { useRouter } from "next/router";
import React, {useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";
import ContextProvider from "../components/Context";



// material-ui
import { makeStyles } from "@material-ui/core/styles";


import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
 
  formControl: {
    margin: theme.spacing(4),
  },
  Button: {
    margin: theme.spacing(4),
    width: "80%",
  },
  pets_icon: {},
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
  },
  searchIcon: {
    fontSize: 33,
    marginLeft: 30,
  },
  switchIcon: {},
}));

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const classes = useStyles();

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

      
       <Header/>

        <Component {...pageProps} />
      

     
    </ContextProvider>
  );
}

export default MyApp;
