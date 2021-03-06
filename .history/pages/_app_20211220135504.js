import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";
import ContextProvider from "../components/Context";
import { db, auth } from "../components/firebase";

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
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const search_open = () => {
    router.push("/search");
  };

  // ??????????????????
  const anonymouslyLogin = () => {
    auth
      .signInAnonymously()
      .then(() => {
        db.collection("users").doc(uid).set({
          id: uid,
          img: "",
          name: "?????????????????????",
          email: "???????????????????????????",
          introduce: "???????????????????????????",
        });
        alert("??????????????????????????????????????????");
      })
      .catch(() => {
        alert("????????????????????????");
      });
  };

// ???
  const logout = () => {
    auth.signOut().then(() => {
      alert("???????????????????????????");
      router.push("/Login");
    });
  };


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

      <>
        <header className={classes.root}>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                MyPets!
              </IconButton>
              <Typography
                className={classes.title}
                variant="h5"
                noWrap
              ></Typography>
              <div className={classes.icons}>
                <Button onClick={search_open}>
                  <SearchIcon className={classes.searchIcon} />
                </Button>
                {isLogin ? (
                  <Switch
                    className={classes.switchIcon}
                    value={true}
                    onChange={logout}
                  />
                ) : (
                  <Switch
                    className={classes.switchIcon}
                    value={false}
                    onChange={anonymouslyLogin}
                  />
                )}
              </div>
            </Toolbar>
          </AppBar>
        </header>

        <Component {...pageProps} />
      </>

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
              <Tooltip title="?????????" arrow>
                <BottomNavigationAction
                  label="?????????"
                  value="Home"
                  icon={<HomeIcon />}
                />
              </Tooltip>
            </Link>

            {/* <Link href="/menu/alert/alert">
              <Tooltip title="??????" arrow>
                <BottomNavigationAction
                  label="????????????"
                  value="alert"
                  icon={<NotificationsActiveIcon />}
                />
              </Tooltip>
            </Link> */}

            <Link href="/menu/createItem/createItem">
              <Tooltip title="?????????????????????" arrow>
                <BottomNavigationAction
                  label="?????????????????????"
                  value="pets"
                  icon={<PetsIcon />}
                  className={classes.pets_icon}
                />
              </Tooltip>
            </Link>

            <Link href="/menu/myPage/profile">
              <Tooltip title="???????????????" arrow>
                <BottomNavigationAction
                  label="???????????????"
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
