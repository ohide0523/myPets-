import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Context } from "./Context";
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
  header: {},
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
    marginRight: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      padding: 20,
    },
  },
  toolbar: {
    alignItems: "center",
    [theme.breakpoints.up("md")]: {},
  },
  title: {
    flexGrow: 1,
  },
  searchIcon: {
    fontSize: 33,
    marginLeft: 30,
    color: "white",
  },
  switchIcon: {},
}));

// 全ページのHeaderメニューとして表示される
const Header = () => {
  const classes = useStyles();
  const { logout, isLogin, onClickTop ,uid} = useContext(Context);
  const router = useRouter();

  // 検索画面に遷移する処理
  const search_open = () => {
    if (uid) {
      // ユーザー情報が入ってればそのまま遷移する
      router.push("/search");
    } else {
       // ユーザー情報が入ってなければ警告のみ
      alert("ログインしてください。。");
      return;
    }
  };

  return (
    <header className={classes.header}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={onClickTop}
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

            <Switch
              className={classes.switchIcon}
              checked={isLogin}
              onChange={logout}
            />
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
