import {useRouter} from "next/router"
import React, { useEffect, useState } from "react";
import { db } from "../../components/firebase";

const anotherProfile = () => {
  const [anotherUser, setAnotherUser] = useState([]);
  const router = useRouter()
  const {profile} = router.query
  useEffect(() => {
    if (profile) {
      getAnotherUser();
    }
  }, [profile]);

  // 他人のユーザーの取得
  const getAnotherUser = () => {
    let newItem = [];

    db.collection("users")
      .doc(profile)
      .get()
      .then((doc) => {
        newItem.push({
          id: profile,
          img: doc.data().img,
          name: doc.data().name,
          likeCount: doc.data().likeCount,
        });
        setAnotherUser(newItem);
      });
  };

  return <div style={{paddingTop:5}}
  
  
  ></div>;
};

export default anotherProfile;
