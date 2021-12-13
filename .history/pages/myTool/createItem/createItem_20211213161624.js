import React, { useState } from "react";

const createItem = () => {
  // 募集をかけるワンちゃんのvalue
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [content, setContent] = useState("");
  const [previewImg, setPreviewImg] = useState(false);

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

      <input type="/file" />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={category} onChange={e=>setCategory(e.target.value)}>
        <option>カテゴリー</option>
        <option value="お">オーストラリアンシェパード</option>
        <option>シーズー</option>
      </select>
      <select>
        <option>性別</option>
        <option>メス</option>
        <option>オス</option>
      </select>
      <select>
        <option>年齢</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
      </select>

      <textarea value={content} onChange={(e) => setContent(e.target.value)} />

      <button>募集を確定する</button>
    </div>
  );
};

export default createItem;
