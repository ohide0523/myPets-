import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import { Context } from "../../../components/Context";
import { db } from "../../../components/firebase";
import firebase from "@firebase/app";
import Styles from "../../../styles/Home.module.css";

// material-ui
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
  },
}));

const createItem = () => {
  // 募集をかけるワンちゃんのvalue
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [content, setContent] = useState("");
  const [itemImg, setItemImg] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const classes = useStyles();

  const { uid, setNewItems, getItems } = useContext(Context);
  const router = useRouter();

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
            setItemImg(imgURL);
            setPreviewImg(true);
          })
          .catch(() => {
            alert("アップロードに失敗しました。。もう一度試してください。。");
          });
      });
  };


// 選択した写真の削除
  const onClickPhotoDelete = () => {
    const lec = window.confirm("この写真を消しますか？？");
    if (!lec) {
      return false;
    } else {
      setItemImg("");
      setPreviewImg(false);
    }
  };


  // itemの追加
  const addItem = () => {
    const newDoc = db.collection("users").doc(uid).collection("items").doc().id;

    if (title == "") {
      alert("名前を入力してください。。");
      return;
    }
    if (category == "") {
      alert("カテゴリーを入力してください。。");
      return;
    }
    if (age == "") {
      alert("年齢を入力してください。。");
      return;
    }
    if (sex == "") {
      alert("性別を入力してください。。");
      return;
    }
    if (content == "") {
      alert("内容を入力してください。。");
      return;
    }

    db.collection("users")
      .doc(uid)
      .collection("items")
      .doc(newDoc)
      .set({
        id: newDoc,
        userId: uid,
        title: title,
        img: itemImg,
        category: category,
        age: age,
        sex: sex,
        content: content,
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
        likeCount: 0,
      })
      .then(() => {
        alert("募集しました！");
        setTitle("");
        setCategory("");
        setSex("");
        setAge("");
        setContent("");
        router.push("/Top");
      })
      .catch(() => {
        alert("失敗しました。。");
      });
  };

  return (
    <div className={Styles.create_item_container}>
      <h1>募集ページ</h1>
      <div style={{ textAlign: "center" }}>
        {previewImg && (
          <img
            src={itemImg}
            style={{ width: "70%", height: "0%" }}
            onClick={onClickPhotoDelete}
          />
        )}
      </div>
      <input accept="image/*" style={{display:"none"}} id="icon-button-file" type="file" onChange={uploadPhoto}/>
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>

      <TextField
        id="standard-basic"
        label="名前を入力してください"
        variant="standard"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ m: 1, width: "80%" }}
      />

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          カテゴリー
        </InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
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
          value={sex}
          onChange={(e) => setSex(e.target.value)}
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
          value={age}
          onChange={(e) => setAge(e.target.value)}
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
        value={content}
        onChange={(e) => setContent(e.target.value)}
        multiline
        rows={5}
        defaultValue="Default Value"
        variant="outlined"
        className={classes.textarea}
        placeholder="内容を入力してください"
      />

      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={addItem}
        className={classes.button}
      >
        募集を確定する
      </Button>
    </div>
  );
};

export default createItem;
