import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { db } from "../../components/firebase";

// material-ui関連
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 210,
    height: 210,
    margin: "auto",
  },
  button:{
      marginTop:10
  },introduce:{
    margin: theme.spacing(1),
    width: theme.spacing(33),
    height: theme.spacing(25),
    margin: "auto",
    borderRadius: 20,
    padding: 20,
  }

}));

const anotherProfile = () => {
  const [anotherUser, setAnotherUser] = useState([]);
  const router = useRouter();
  const { profile } = router.query;
  const classes = useStyles();
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
    <div style={{ paddingTop: 100, width: "90%", margin: "auto" }}>
      {anotherUser.length > 0 &&
        anotherUser.map((user, index) => (
          <div
            style={{
              width: "80%",
              margin: "auto",
              textAlign: "center",
              display:"flex",
              flexDirection: "column",
              
            }}
            key={index}
          >
            <Avatar
              alt="アバター画像"
              src={user.img}
              className={classes.avatar}
            />

            <div className={classes}>{user.name}</div>
            <div>{user.email}</div>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className={classes.button}
            >
              フォローする
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className={classes.button}
            >
              この人とチャット
            </Button>
            <h2>自己紹介</h2>
            <Paper elevation={3} className={classes.introduce}>
              {user.introduce}
            </Paper>
          </div>
        ))}
    </div>
  );
};

export default anotherProfile;
