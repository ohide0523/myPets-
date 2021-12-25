import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Context } from "../components/Context";
import { db, auth } from "../components/firebase";

import Styles from "../styles/Home.module.css";

// material-ui
import { makeStyles } from "@material-ui/core/styles";

//header
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    header:{
       
    },
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
    [theme.breakpoints.up("md")]: {}
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

const Header = () => {
  const classes = useStyles();
  const router = useRouter();
  const { uid, isLogin, anonymouslyLogin } = useContext(Context);

  const search_open = () => {
    router.push("/search");
  };

  return (
  
      <header className={classes.header}>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <Link href="/Top">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                MyPets!
              </IconButton>
            </Link>
            <Typography
              className={classes.title}
              variant="h5"
              noWrap
            ></Typography>
            <div className={classes.icons}>
              <Button onClick={search_open}>
                <SearchIcon className={classes.searchIcon} />
              </Button>

              <Switch
                className={classes.switchIcon}
                checked={isLogin}
                onChange={anonymouslyLogin}
              />
            </div>
          </Toolbar>
        </AppBar>
      </header>
  
  );
};

export default Header;
