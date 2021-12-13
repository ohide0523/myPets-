import React, { useState, useContext } from "react";
import { Context } from "../../../components/Context";
import { db } from "../../../components/firebase";
import firebase from "@firebase/app";

const createItem = () => {
  // 募集をかけるワンちゃんのvalue
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [content, setContent] = useState("");
  const [previewImg, setPreviewImg] = useState(false);

  const { uid,setNewItems,getItems } = useContext(Context);

  // itemの追加
  const addItem = async () => {
      if(title==""){
        alert("名前を入力してください。。");
        return
      }
      if(category==""){
        alert("カテゴリーを入力してください。。");
        return
      }
      if(age==""){
        alert("年齢を入力してください。。");
        return
      }
      if(sex==""){
        alert("性別を入力してください。。");
        return
      }
      if(content==""){
        alert("内容を入力してください。。");
        return
      }
   
      const data = await db
        .collection("users")
        .doc(uid)
        .collection("items")
        .doc()
        .set({
          userId: uid,
          title: title,
          // img: itemURL,
          category: category,
          age: age,
          sex: sex,
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
       db.collectionGroup("items").get().then((snapshot)=>{
           snapshot.forEach((doc)=>{
               setNewItems(prev=>[...prev,])
           })
       })
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
        padding: "100px",
      }}
    >
      <h1>募集ページ</h1>

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
      <select　value={sex} onChange={(e) => setSex(e.target.value)}>
        <option >
          性別
        </option>
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
