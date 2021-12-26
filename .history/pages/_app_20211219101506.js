import React, { useEffect } from "react";
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
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  //   width: "100%",
  //   position: "fixed",
  //   zIndex: 4,
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  pets_icon: {
    marginTop: 14,
    [theme.breakpoints.up("sm")]: {
      marginTop: 40,
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
  
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  searchIcon:{
    fontSize:30,
  }
}));

function MyApp({ Component, pageProps }) {
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
      <header className={classes.root}>
        {/* <AppBar position="static">
          <Toolbar>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                minHeight:120
              }}
            >
              <Link href="/Top">
                <Typography variant="h6">MyPets!</Typography>
              </Link>
              <div style={{ display: "flex",alignItems:"center" }}>
                <SearchIcon style={{fontSize:30,marginRight:10}}/>
                <Switch></Switch>
              </div>
            </div>
          </Toolbar>
        </AppBar>
       */}
         <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
         
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon className={classes./>
          </IconButton>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
          <Switch></Switch>
          </IconButton>
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
