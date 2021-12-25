import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import Styles from "../../../../styles/Home.module.css";

// firebase関連
import firebase from "@firebase/app";
import "@firebase/storage";

import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { db } from "../../../../components/firebase";
import { Context } from "../../../../components/Context";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "80%",
    margin: "auto",
    alignItems: "center",

    paddingBottom: 100,
    [theme.breakpoints.up("md")]: {
      width: "40%",
      marginTop: 100,
      margBottom: 0,
      height: "auto",
    },
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  textarea: {
    width: "80%",
    marginBottom: "30px",
  },
  button: {
    width: "80%",
    [theme.breakpoints.up("md")]: {
      marginTop: 20,
      padding: 15,
      [theme.breakpoints.up("md")]: {},
    },
  },
}));

const editProfile = () => {
  const classes = useStyles();
  const router = useRouter();

  const [editImg, setEditImg] = useState("");
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editIntroduce, setEditIntroduce] = useState("");
  const [profileData, setProfileData] = useState([]);

  const { uid } = useContext(Context);

  useEffect(() => {
    if (uid) {
      getMyProfileData();
    }
  }, [uid]);

  const getMyProfileData = () => {
    db.collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        setEditImg(doc.data().img);
        setEditName(doc.data().name);
        setEditEmail(doc.data().email);
        setEditIntroduce(doc.data().introduce);
      });
  };

  //写真の登録
  const uploadPhoto = (e) => {
    const storageRef = firebase.storage().ref();
    const file = e.target.files;
    let blob = new Blob(file, { type: "images/jpeg" });
    const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N = 16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
      .map((n) => S[n % S.length])
      .join("");

    storageRef
      .child(fileName)
      .put(blob)
      .then(() => {
        storageRef
          .child(fileName)
          .getDownloadURL()
          .then((imgURL) => {
            setEditImg(imgURL);
          })
          .catch(() => {
            alert("アップロードに失敗しました。。もう一度試してください。。");
          });
      });
  };

  const edit_profile = () => {
    if (editName == "" || editEmail == "" || editIntroduce == "") {
      alert("入力項目が不足しています。。");
      return;
    }
    db.collection("users")
      .doc(uid)
      .update({
        img: editImg,
        name: editName,
        email: editEmail,
        introduce: editIntroduce,
      })
      .then(() => {
        alert("編集をしました！");
        router.push("/menu/myPage/profile");
      });
  };

  return (
    <main className={classes.root}>
      <h1>編集ページ</h1>
      <div style={{ textAlign: "center" }}>
        <img src={editImg} className={classes.img} alt="プロフィール写真" />
      </div>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="icon-button-file"
        type="file"
        onChange={uploadPhoto}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>

      <TextField
        id="standard-basic"
        label="name"
        variant="standard"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
        style={{ m: 1, width: "80%", marginTop: 20 }}
        inputProps={{ maxLength: 8, pattern: "^[a-zA-Z0-9_]+$" }}
      />

      <TextField
        id="standard-basic"
        label="mail"
        variant="standard"
        value={editEmail}
        onChange={(e) => setEditEmail(e.target.value)}
        style={{ m: 1, width: "80%", marginTop: 20 }}
      />

      <TextField
        label="自己紹介"
        value={editIntroduce}
        onChange={(e) => setEditIntroduce(e.target.value)}
        multiline
        rows={5}
        defaultValue="Default Value"
        variant="outlined"
        className={classes.textarea}
        placeholder="内容を入力してください"
        style={{ m: 1, width: "80%", marginTop: 30 }}
      />
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={edit_profile}
        className={classes.button}
      >
        編集を確定する
      </Button>
    </main>
  );
};

export default editProfile;
