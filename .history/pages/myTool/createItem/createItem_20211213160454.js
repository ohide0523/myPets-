import React,{useState} from "react";

const createItem = () => {

 // 募集をかけるワンちゃんのvalue
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [category2, setCategory2] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [content, setContent] = useState("");
  const [previewImg, setPreviewImg] = useState(false);

  return <div>
      <h1>募集ページ</h1>
      <input type="/file"/>
      <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
        <select>
            <option>カテゴリー</option>
            <option>おーs</option>
            <option></option>
        </select>

      <textarea value={content} onChange={e=>setContent(e.target.value)}>

      </textarea>
  </div>;
};

export default createItem;
