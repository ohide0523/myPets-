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
      <input type="text" value={title} 
  </div>;
};

export default createItem;