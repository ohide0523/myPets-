import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";
import ContextProvider from "../components/Context";
import {db} from "../"

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
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
  },
  searchIcon: {
    fontSize: 33,
    marginLeft: 30,
  },
  switchIcon:{
    
  },
}));

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  const [isSearch, setIsSearch] = useState(false);
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const search_open = () => {
    setIsSearch(true);
  };

  const handleSearch = () => {
    setIsSearch(false);
  };

  const handleSearch=()=>{

  }

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

      {isSearch ? (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            width: "80%",
            margin: "auto",
            marginTop: 100,
          }}
        >
          <h1>絞り込み検索</h1>
          <FormControl className={classes.formControl}>
            <InputLabel>カテゴリー</InputLabel>
            <Select
              native
              // value={age}
              // onChange={handleChange}
              input={<Input id="demo-dialog-native" />}
            >
              <option aria-label="None" value="" />
              <option value={"柴犬"}>柴犬</option>
              <option value={"シーズー"}>シーズー</option>
              <option value={"オーストラリアンシェパード"}>オーストラリアンシェパード</option>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel>並べ替え</InputLabel>
            <Select
              native
              // value={age}
              onChange={handleSearch}
              input={<Input id="demo-dialog-native" />}
            >
              <option aria-label="None" value="" />
              <option value={""}>おまかせ</option>
              <option value={"newItem"}>新しく追加された順</option>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            className={classes.Button}
            onClick={handleSearch}
          >
            この条件で検索
          </Button>
        </div>
      ) : (
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

                  <Switch className={classes.switchIcon}/>
                </div>
              </Toolbar>
            </AppBar>
          </header>

          <Component {...pageProps} />
        </>
      )}

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
