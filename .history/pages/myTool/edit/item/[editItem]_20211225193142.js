import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../../../components/Context";
import { db } from "../../../../components/firebase";
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

const useStyles = makeStyles((theme) => ({
  root:{
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: "auto",
    alignItems: "center",
    
    [theme.breakpoints.up("md")]: {
      width:"40%",
      marginTop:"150px",
      marginBottom:"100px",
    
      }
  },
  textField:{
    width:"100%",
    marginBottom: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    width:"100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  textarea: {
    width: "100%",
    marginBottom: "30px",
    marginTop: theme.spacing(2),
  },
  button: {
    width: "80%",
  },
  delete_button:{
    width:"80%",
    marginTop:15,
  }
}));

const editItem = () => {
  const [editItemImg, setEditItemImg] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editSex, setEditSex] = useState("");
  const [editContent, setEditContent] = useState("");

  const { uid } = useContext(Context);
  const router = useRouter();
  const { editItem } = router.query;
  const classes = useStyles()

  useEffect(() => {
    if (uid && editItem) {
      getEditData();
    }
  }, [uid, editItem]);

  const getEditData = () => {
    db.collection("users")
      .doc(uid)
      .collection("items")
      .doc(editItem)
      .get()
      .then((doc) => {
        setEditItemImg(doc.data().img);
        setEditTitle(doc.data().title);
        setEditCategory(doc.data().category);
        setEditAge(doc.data().age);
        setEditSex(doc.data().sex);
        setEditContent(doc.data().content);
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
            setEditItemImg(imgURL);
          })
          .catch(() => {
            alert("アップロードに失敗しました。。もう一度試してください。。");
          });
      });
  };

  const edit_item = () => {
       if(editItemImg ==""||editTitle==""||editCategory==""||editAge==""||editSex==""||editContent==""){
           alert("入力項目が不足しています。。")
           return;
       }
    db.collection("users")
      .doc(uid)
      .collection("items")
      .doc(editItem)
      .update({
        img: editItemImg,
        title: editTitle,
        category: editCategory,
        age: editAge,
        sex: editSex,
        content: editContent,
      })
      .then(() => {
        alert("編集をしました！");
        router.push("/Top");
      });
  };

  const delete_item = () => {
    const lec = window.confirm("本当に削除しますか？？");
    if (!lec) {
      return false;
    } else {
      db.collection("users")
      .doc(uid)
      .collection("items")
      .doc(editItem)
      .delete()
      .then(() => {
        alert("削除しました!");
        router.push("/Top");
      });
    }
  };

  return (
    <main className={classes.root}>
      <h1>編集ページ</h1>
      <div style={{ textAlign: "center" }}>
        <img
          src={editItemImg}
          style={{ width: "90%", height: "90%" ,borderRadius:20}}
          alt="ワンちゃんの写真"
        />
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
        variant="standard"
        inputProps={{ maxLength: 10, pattern: "^[a-zA-Z0-9_]+$" }}
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        className={classes.textField}
      />

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          カテゴリー
        </InputLabel>
        <Select
          value={editCategory}
          onChange={(e) => setEditCategory(e.target.value)}
          label="カテゴリー"
        >
          <MenuItem value={"　オーストラリアンシェパード"}>
            オーストラリアンシェパード
          </MenuItem>
          <MenuItem value={"シーズー"}>シーズー</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">性別</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={editSex}
          onChange={(e) => setEditSex(e.target.value)}
          label="性別"
        >
          <MenuItem value={"オス"}>オス</MenuItem>
          <MenuItem value={"メス"}>メス</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">年齢</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={editAge}
          onChange={(e) => setEditAge(e.target.value)}
          label="年齢"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>

      <TextField
        value={editContent}
        onChange={(e) => setEditContent(e.target.value)}
        multiline
        rows={5}
        variant="outlined"
        className={classes.textarea}
        placeholder="内容を入力してください"
      />

      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={edit_item}
        className={classes.button}
      >
        編集を確定する
      </Button>

      <Button
        variant="contained"
        color="secondary"
        disableElevation
        onClick={delete_item}
        className={classes.delete_button}
      >
        削除する
      </Button>
    </main>
  );
};

export default editItem;
