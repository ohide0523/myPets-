import Rou
import React, { useEffect, useState } from "react";
import { db } from "../../components/firebase";

const anotherProfile = () => {
  const [anotherUser, setAnotherUser] = useState([]);
  useEffect(() => {
    if (another) {
      getAnotherUser();
    }
  }, [another]);

  // 他人のユーザーの取得
  const getAnotherUser = () => {
    let newItem = [];

    db.collection("users")
      .doc(another)
      .get()
      .then((doc) => {
        newItem.push({
          id: another,
          img: doc.data().img,
          name: doc.data().name,
          likeCount: doc.data().likeCount,
        });
        setAnotherUser(newItem);
      });
  };

  return <div></div>;
};

export default anotherProfile;
