import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Context } from "../components/Context";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        display:"flex",
        flexDirection:"column",
        justifyContent:"ce"
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
    anonymouslyLogin
  } = useContext(Context);
  const classes = useStyles()

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
      <Button variant="contained" color="primary" onClick={googleLogin}>
      Googleログイン
      </Button>

      <TextField
          id="filled-password-input"
          label="e-mail"
          type="e-mail"
          autoComplete="current-password"
          variant="outlined"
        />
      <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      
      <Button variant="contained" color="primary">
      Emailログイン
      </Button>
      <Button variant="contained" color="secondary">
      テストログイン
      </Button>
     
      <div>emailログインはこちら</div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={emailLogin}>emailログインする</button>

      <div>emailアカウント作成はこちら</div>
      <input
        type="newEmail"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <input
        type="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={createEmailUser}>emailアカウント作成する</button>

      {/* ログインによってuidに値が入ることで、Topページに遷移できるようになる */}
      <div onClick={onClickTop}>トップページへ</div>
      <div>テストログインはこちら</div>
      <button onClick={anonymouslyLogin}>テストログイン</button>
    </div>
  );
};

export default login;
