import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Context } from "../components/Context";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
    width:"80%",
      margin:"20px auto",
   
      display: "flex",
      flexDirection: "column",
    },
  button:{
marginLeft:thme.spacing8
  },
}
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
      <h1 style={{textAlign:"center",paddingTop:100}}>ログインページ</h1>

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
          <MailIcon/>
        E-mailログイン
      </Button>
<div style={{textAlign:"center"}}>もしくは</div>
      <Button variant="contained" color="primary" onClick={googleLogin}>
        Googleログイン
      </Button>

      <Button variant="contained" color="secondary" onClick={anonymouslyLogin}>
        テストログイン
      </Button>

      <div style={{textAlign:"center"}}>　もしくは</div>

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
