import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import { Context } from "../../../components/Context";
import { db } from "../../../components/firebase";
import firebase from "@firebase/app";

// material-ui
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const createItem = () => {
  // 募集をかけるワンちゃんのvalue
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [content, setContent] = useState("");
  const [previewImg, setPreviewImg] = useState(false);
  const [isScreen,setIsScreen] = useState(false)

  const { uid, setNewItems, getItems } = useContext(Context);
  const router = useRouter();

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
        // img: itemURL,
        category: category,
        age: age,
        sex: sex,
        content:content,
        //   createAt: firebase.firestore.FieldValue.serverTimestamp(),
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
   
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "auto",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <h1>募集ページ</h1>

      <label htmlFor="icon-button-file">
          <Input
            accept="image/*"
            id="icon-button-file"
            type="file"
            // onChange={uploadPhoto}
            style={{display:"none"}}
          />
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
          label="名前を入力してください"
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ m: 1, width: "100%" }}
        />

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <InputLabel id="demo-simple-select-filled-label">
            カテゴリーを選択してください
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={category}
            // onChange={(e) => handleChange(e)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"猫"}>猫</MenuItem>
            <MenuItem value={"犬"}>犬</MenuItem>
          </Select>
        </FormControl>

       


      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="名前を入力してください"
        required="required"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>カテゴリー</option>
        <option value="オーストラリアンシェパード">
          オーストラリアンシェパード
        </option>
        <option value="シーズー">シーズー</option>
      </select>
      <select value={sex} onChange={(e) => setSex(e.target.value)}>
        <option>性別</option>
        <option value="メス"> メス</option>
        <option value="オス">オス</option>
      </select>
      <select value={age} onChange={(e) => setAge(e.target.value)}>
        <option>年齢</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <button onClick={addItem}>募集を確定する</button>
    </div>
  );
};

export default createItem;
