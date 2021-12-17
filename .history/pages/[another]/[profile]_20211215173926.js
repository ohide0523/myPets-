import {useRouter} from "next/router"
import React, { useEffect, useState } from "react";
import { db } from "../../components/firebase";

const anotherProfile = () => {
  const [anotherUser, setAnotherUser] = useState([]);
  const router = useRouter()
  const {profile} = router.query
  useEffect(() => {
    if (another) {
      getAnotherUser();
    }
  }, [pr]);

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
