import Link from "next/link"
import React, { useState, useEffect, useContext } from "react";
import { db } from "../../../components/firebase";
import { Context } from "../../../components/Context";

// material-ui関連
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";


import FavoriteIcon from "@material-ui/icons/Favorite";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    paddingTop: "60px",
  },
  card: {
    borderRadius: 10,
    position: "relative",
    background: "#F0F8FF",
    width: 160,
    height: 190,
  },
  avatar: {
    width: 200,
    height: 200,
    margin: "auto",
    marginBottom: "30px",
  },
  title: {
    position: "absolute",
    top: 145,
    left: 5,
    fontFamily: "Comic Sans MS",
    fontSize: "15px",
    width: "95%",
    background: "#CEF9DC",
    padding: 2,
    paddingLeft: 10,
    borderRadius: 30,
  },
  likeIcon: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: 120,
    left: 5,
    background: "#CEF9DC",
    padding: "2px 10px 2px 7px",
    borderRadius: 20,
    opacity: 0.7,
  },
  introduce: {
    margin: theme.spacing(1),
    width: theme.spacing(30),
    height: theme.spacing(25),
    margin: "auto",
    borderRadius: 20,
    padding: 20,
  },
}));

const profile = () => {
  const [myUser, setMyUser] = useState([]);
  const [myItems, setMyItems] = useState([]);

  const { uid } = useContext(Context);
  const classes = useStyles();

  useEffect(() => {
    if (uid) {
      getMyUser();
      getMyItems();
    }
  }, [uid]);

  //   自分のユーザー情報の取得
  const getMyUser = () => {
    db.collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        setMyUser([doc.data()]);
      });
  };

  // 自分の募集したitemの取得
  const getMyItems = () => {
    let newItems = [];
    db.collection("users")
      .doc(uid)
      .collection("items")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          newItems.push({
            id: doc.data().id,
            img: doc.data().img,
            title: doc.data().title,
            likeCount: doc.data().likeCount,
          });
        });
        console.log(newItems)
        setMyItems(newItems)
    });
  };

  return (
    <div style={{ paddingTop: "40px" }}>
      <h1>Myページ</h1>
      {myUser.length > 0 &&
        myUser.map((user, index) => (
          <div key={index}>
            <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
              <Avatar
                alt="アバター画像"
                src={user.img}
                className={classes.avatar}
              />

              <div>{user.name}</div>
              <div>{user.email}</div>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                className={classes.button}
              >
                プロフィールを編集する
              </Button>
              <h2>自己紹介</h2>
              <Paper elevation={3} className={classes.introduce}>
                {user.introduce}
              </Paper>
            </div>
          </div>
        ))}
      <div sty>
        <div>自分が里親を募集したワンちゃんたち</div>
        {myItems.length > 0 &&
          myItems.map((item,index) => (
            <div>
              <Grid container spacing={3} className={classes.root}>
                
                    <Grid item xs={6} key={index}>
                      <Card elevation={6} className={classes.card}>
                        <CardContent>
                          <Link
                            href="/[another]/anotherItem/[editItem]"
                            as={`/${item.userId}/anotherItem/${item.id}`}
                          >
                            <Avatar
                              alt="アバター画像"
                              src={item.img}
                              className={classes.avatar}
                            />
                          </Link>
                          <h2 className={classes.title}> {item.title}</h2>
                          <div className={classes.likeCount}>
                            {/* likeCountのcss   */}
                            <div className={classes.likeIcon}>
                              <FavoriteIcon
                                style={{ paddingRight: 3 }}
                              ></FavoriteIcon>
                              {item.likeCount}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Grid>
                
              </Grid>
            </div>
          ))}
      </div>
    </div>
  );
};

export default profile;
