import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Context } from "../components/Context";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
    width:"80%",
      margin: "auto",
      mari
      display: "flex",
      flexDirection: "column",
    },
    button: {
      width: "100%",
      alignSelf: "center",
    },
  },
}));

const login = () => {
  const router = useRouter();
  const {
    uid,
    email,
    setEmail,
    password,
    setPassword,
    newEmail,
    setNewEmail,
    newPassword,
    setNewPassword,
    emailLogin,
    createEmailUser,
    googleLogin,
    anonymouslyLogin,
  } = useContext(Context);

  const classes = useStyles();

  const onClickTop = () => {
    if (uid) {
      router.push("/Top");
    } else {
      alert("ログインしてください。。");
    }
  };

  return (
    <div className={classes.root}>
      <h1>ログインページ</h1>

      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="filled-password-input"
        label="e-mail"
        type="e-mail"
        autoComplete="current-password"
        variant="outlined"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={emailLogin}
      >
        E-mailログイン
      </Button>

      <Button variant="contained" color="primary" onClick={googleLogin}>
        Googleログイン
      </Button>

      <Button variant="contained" color="secondary" onClick={anonymouslyLogin}>
        テストログイン
      </Button>

      <div>emailアカウント作成はこちら</div>

      <TextField
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        id="filled-password-input"
        label="e-mail"
        type="e-mail"
        autoComplete="current-password"
        variant="outlined"
      />
      <TextField
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={createEmailUser}
      >
        E-mailアカウント作成
      </Button>

      {/* ログインによってuidに値が入ることで、Topページに遷移できるようになる */}
      <div onClick={onClickTop}>トップページへ</div>
    </div>
  );
};

export default login;
