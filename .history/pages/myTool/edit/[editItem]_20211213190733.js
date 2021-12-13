import React, { useEffect, useState } from "react";
import { db } from "../../../components/firebase";

const editItem = () => {


    const [editTitle,setTitle] = useState("")
    const [category,setCategory] = useState("")
    const [age,setAge] = useState("")
    const [sex,setSex] = useState("")
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

        setTitle(doc.data().title)
        setCategory( doc.data().category)
        setAge( doc.data().age)
        setSex( doc.data().sex)
       
      });
  };

  return (
    <div>
      <h1>item編集ページ</h1>
    </div>
  );
};

export default editItem;
