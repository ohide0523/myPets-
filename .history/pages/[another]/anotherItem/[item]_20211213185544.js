import React, { useState, useEffect,useContext } from "react";
import { useRouter } from "next/router";
import { db } from "../../../components/firebase";
import { Context } from "../../../components/Context";

const item = () => {
  const [anotherItem, setAnotherItem] = useState([]);
  const router = useRouter();
  const { another, item } = router.query;
  const {uid} = useContext(Context)

  useEffect(() => {
    if (another && item) {
      getAnotherItem();
    }
  }, [another, item]);



  const getAnotherItem = () => {
    let newItem = [];
    db.collection("users")
      .doc(another)
      .collection("items")
      .doc(item)
      .get()
      .then((doc) => {
        newItem.push({
          title: doc.data().title,
        });
        setAnotherItem(newItem);
    });
  };

  return (
    <div>
      <h1>itemページ</h1>
      {anotherItem.length > 0 &&
        anotherItem.map((item, index) => (
          <div key={index}>
            <h1>{item.title}</h1>
            {another===uid&&(
                <
                <button>itemを編集する</button>
            )}
          </div>
        ))}
    </div>
  );
};

export default item;
