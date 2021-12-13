import React, { useEffect, useState } from "react";
import { db } from "../../../components/firebase";

const editItem = () => {
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

        setTitle()
        setCategory()
        setAge()
        setS
        userId:doc.data().userId,
        id:doc.data().id,
        title:doc.data().title,
        // img: itemURL,
        category: doc.data().category,
        age: doc.data().age,
        sex: doc.data().sex,
      });
  };

  return (
    <div>
      <h1>item編集ページ</h1>
    </div>
  );
};

export default editItem;
