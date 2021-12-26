import Link from "next/link"
import { useRouter } from "next/router";
import React, { useEffect, useState,useContext } from "react";
import { db } from "../../components/firebase";

// material-ui関連
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { Context } from "../../components/Context";

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
  },
  name:{
      fontSize:30,
      marginTop:20,
      marginBottom:20
  }

}));

const anotherProfile = () => {
  const [follo]
  const [anotherUser, setAnotherUser] = useState([]);
  const router = useRouter();
  const { profile } = router.query;
  const classes = useStyles();
  const {uid} = useContext(Context) 
  
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
    <div style={{ paddingTop: 100, width: "90%", margin: "auto",marginBottom:100 }}>
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

            <div className={classes.name}>{user.name}</div>
            <div>{user.email}</div>
            {follow ? (
                <Button
                  variant="outlined"
                  onClick={() => onClickUnFollow(user.id)}
                >
                  フォロー
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => onClickFollow(user.id, user.name)}
                >
                  フォロー
                </Button>
              )}

            <Link href="/myTool/chat/[uid]/[pid]" as={`/myTool/chat/${uid}/${user.id}`}>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className={classes.button}
            >
              この人とチャット
            </Button>
            </Link>
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
