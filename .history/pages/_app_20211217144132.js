import React,{useEffect} from 'react';
import Head from "next/head";
import Link from "next/link";
import ContextProvider from "../components/Context";
import "../styles/globals.css";

import Styles from "../styles/Home.module.css";

// material-ui
import { makeStyles } from "@material-ui/core/styles";

import HomeIcon from "@material-ui/icons/Home";
import PetsIcon from "@material-ui/icons/Pets";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import PersonIcon from "@material-ui/icons/Person";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Tooltip from "@material-ui/core/Tooltip";

//header
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    position: "fixed",
    zIndex:4
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  pets_icon:{
    marginTop:14,
    [theme.breakpoints.up("")]
  }
}));

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  useEffect(()=>{
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  },[])

  return (
    <ContextProvider>
      <Head>
        <meta charSet="utf-8" />

        <title>MyPets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

     
      </Head>
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

            <Link href="/menu/createItem/createItem">
              <Tooltip title="里親を募集する" arrow>
                <BottomNavigationAction
                  label="里親を募集する"
                  value="pets"
                  icon={<PetsIcon />}
                  className={classes.pets_icon}
                />
              </Tooltip>
            </Link>

            <Link href="/menu/myPage/profile">
              <Tooltip title="マイページ" arrow>
                <BottomNavigationAction
                  label="マイページ"
                 
                  icon={<PersonIcon />}
                />
              </Tooltip>
            </Link>
          </BottomNavigation>
        </div>
      </footer>
    </ContextProvider>
  );
}

export default MyApp;



