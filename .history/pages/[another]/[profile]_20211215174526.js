import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { db } from "../../components/firebase";

// material-ui関連
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 110,
    height: 110,
   
    marginRight:20
  },
}));

const anotherProfile = () => {
  const [anotherUser, setAnotherUser] = useState([]);
  const router = useRouter();
  const { profile } = router.query;
  const classes = useStyles()
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

  return (
    <div style={{ paddingTop: 100,width:"90%",margin:"auto",text }}>
      {anotherUser.length > 0 &&
        anotherUser.map((user,index) => (
          <Avatar
            alt="アバター画像"
            src={user.img}
            className={classes.avatar}
            key={index}
          />
        ))}
    </div>
  );
};

export default anotherProfile;
