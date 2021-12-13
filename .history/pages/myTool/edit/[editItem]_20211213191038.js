import React, { useEffect, useState } from "react";
import { db } from "../../../components/firebase";

const editItem = () => {
  const [editTitle, setEditTitle] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editSex, setEditSex] = useState("");
  const [editContent,setEditCon]
  useEffect(() => {
    getEditData();
  }, []);

  const getEditData = () => {
    db.collection("users")
      .doc(uid)
      .collection("items")
      .doc(editItem)
      .get()
      .then((doc) => {
        setTitle(doc.data().title);
        setCategory(doc.data().category);
        setAge(doc.data().age);
        setSex(doc.data().sex);
        setContent(doc.data().content)
      });
  };

  return (
    <div>
      <h1>item編集ページ</h1>
      <input
        type="text"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        placeholder="名前を入力してください"
        required="required"
      />
      <select value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
        <option>カテゴリー</option>
        <option value="オーストラリアンシェパード">
          オーストラリアンシェパード
        </option>
        <option value="シーズー">シーズー</option>
      </select>
      <select value={editSex} onChange={(e) => setEditSex(e.target.value)}>
        <option>性別</option>
        <option value="メス"> メス</option>
        <option value="オス">オス</option>
      </select>
      <select value={editAge} onChange={(e) => eetEditAge(e.target.value)}>
        <option>年齢</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <textarea
        value={editContent}
        onChange={(e) => eetEditContent(e.target.value)}
        required
      />

      <button onClick={addItem}>募集を確定する</button>
    </div>
  );
};

export default editItem;
