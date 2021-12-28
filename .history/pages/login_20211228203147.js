import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Context } from "../components/Context";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: "auto",
    marginTop: 50,
    marginBottom: 50,
    height: "100vh",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      width: "40%",
      marginTop: 100,
      marginBottom: 10,
    },
  },
  textField: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
  google: {
    width: "60%",
    margin: "auto",
  },
  test: {
    width: "60%",
    margin: "auto",
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
        className={classes.textField}
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
        <MailIcon style={{ marginRight: 10 }} />
        E-mailログイン
      </Button>
      <div style={{ margin: "20px 0px 20px 0px" }}>もしくは</div>

      <TextField
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        id="filled-password-input"
        label="e-mail"
        type="e-mail"
        autoComplete="current-password"
        variant="outlined"
        className={classes.textField}
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
        {" "}
        <MailIcon style={{ marginRight: 10 }} />
        E-mailアカウント作成
      </Button>

      <h2>googleログイン</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={googleLogin}
        className={classes.google}
      >
        Googleログイン
      </Button>
      <h2>お試しで使ってみたい方</h2>
      <Button
        variant="contained"
        color="secondary"
        onClick={anonymouslyLogin}
        className={classes.test}
      >
        テストログイン
      </Button>
    </div>
  );
};

export default login;
