import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Context } from "./Context";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PetsIcon from "@material-ui/icons/Pets";
import PersonIcon from "@material-ui/icons/Person";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Tooltip from "@material-ui/core/Tooltip";

// material-uiのCSS
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

// 全ページに表示するボトムメニュー
function Footer() {
  const router = useRouter();
  const classes = useStyles();
  const { uid, onClickTop } = useContext(Context);

  // createItem(ワンちゃんを里親に出すページに遷移する処理
  const onClickCreateItem = () => {

    if (uid) {
      // ユーザー情報があればそのまま遷移する
      router.push("/menu/createItem/createItem");
    } else {
      // なければalertの警告のみが表示される
      alert("ログインしてください。。");
    }
  };

   // 自分のprofile画面に遷移する処理
  const onClickMyPage = () => {
    if (uid) {
      router.push("/menu/myPage/profile");
    } else {
      alert("ログインしてください。。");
    }
  };

  return (
    <div>
      <footer
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          marginTop: "50px",
        }}
      >
        <div>
          <BottomNavigation sx={{ width: "100%" }}>
            <Tooltip title="ホーム" arrow>
              <BottomNavigationAction
                label="ホーム"
                value="Home"
                icon={<HomeIcon />}
                onClick={onClickTop}
              />
            </Tooltip>

            <Tooltip title="里親を募集する" arrow>
              <BottomNavigationAction
                label="里親を募集する"
                value="pets"
                icon={<PetsIcon />}
                className={classes.pets_icon}
                onClick={onClickCreateItem}
              />
            </Tooltip>

            <Tooltip title="マイページ" arrow>
              <BottomNavigationAction
                label="マイページ"
                icon={<PersonIcon />}
                onClick={onClickMyPage}
              />
            </Tooltip>
          </BottomNavigation>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
