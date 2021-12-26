import { useRouter } from "next/router";
import Link from "next/link";
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

import Tooltip from "@material-ui/core/Tooltip";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    paddingTop: "60px",
  },
  items: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  card: {
    borderRadius: 10,
    position: "relative",
    background: "#F0F8FF",
    width: 130,

    marginRight: 20,
  },
  userIcon: {
    width: 210,
    height: 210,
    margin: "auto",
    marginBottom: 40,
  },
  avatar: {
    width: 90,
    height: 90,
    margin: "auto",
    marginBottom: "60px",
  },
  title: {
    position: "absolute",
    top: 125,
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
    top: 110,
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
    overflowWrap: "break-word",
  },
}));

const profile = () => {
  const [myItems, setMyItems] = useState([]);
  const [myLikedItems, setMyLikedItems] = useState([]);
  const [myFollowUser, setMyFollowUser] = useState([]);

  const { uid, getMyUser, myUser } = useContext(Context);
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    if (uid) {
      getMyUser();
      getMyItems();
      getMyLikeItems();
      getMyFollowUser();
    }
  }, [uid]);

  // 自分の募集したitemの取得
  const getMyItems = () => {
    let newItems = [];
    db.collection("users")
      .doc(uid)
      .collection("items")
      .onSnapshot(() => {
        // わざわざもう一度呼び出すことで、newItems[]にしっかりとitemsのデータ分入りこむ
        db.collection("users")
          .doc(uid)
          .collection("items")
          .orderBy("createAt", "desc")
          .limit(2)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              newItems.push({
                userId: doc.data().userId,
                id: doc.data().id,
                img: doc.data().img,
                title: doc.data().title,
                likeCount: doc.data().likeCount,
              });
            });
            console.log(newItems);
            setMyItems(newItems);
          });
      });
  };

  //   自分がいいねしたitemの取得
  const getMyLikeItems = () => {
    let newItems = [];
    db.collection("users")
      .doc(uid)
      .collection("likedItems")
      .onSnapshot(() => {
        db.collection("users")
          .doc(uid)
          .collection("likedItems")
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              newItems.push({
                userId: doc.data().userId,
                id: doc.data().id,
                img: doc.data().img,
                title: doc.data().title,
                likeCount: doc.data().likeCount,
              });
            });
            setMyLikedItems(newItems);
          });
      });
  };

  //   自分がフォローしたユーザーの取得
  const getMyFollowUser = () => {
    let newItems = [];
    db.collection("users")
      .doc(uid)
      .collection("followLists")
      .onSnapshot(() => {
        db.collection("users")
          .doc(uid)
          .collection("followLists")
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              newItems.push({
                followUser: doc.data().followUser,
                img: doc.data().img,
                name: doc.data().name,
                followerCount: doc.data().followerCount,
              });
            });
          });
        setMyFollowUser(newItems);
      });
  };

  //   const onClickAllMyItems = () => {
  //     router.push("/myTool/allItems/allMyItems");
  //   };

  const onClickAllLikedItems = () => {
    router.push("/myTool/allItems/allLikedItems");
  };

  const onClickAllFollowLists = () => {
    router.push("/myTool/allItems/allFollowLists");
  };

  return (
    <div style={{ paddingTop:30,background:"#FFFFCC"}}>
      <h1>Myページ</h1>
      {myUser.length > 0 &&
        myUser.map((user, index) => (
          <div key={index}>
            <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
              <Avatar
                alt="アバター画像"
                src={user.img}
                className={classes.userIcon}
              />

              <div>{user.name}</div>
              <div>{user.email}</div>
              <Link
                href="/myTool/edit/profile/[editProfile]"
                as={`/myTool/edit/profile/editProfile`}
              >
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  className={classes.button}
                >
                  プロフィールを編集する
                </Button>
              </Link>
              <h2>自己紹介</h2>
              <Paper elevation={3} className={classes.introduce}>
                {user.introduce}
              </Paper>
            </div>
          </div>
        ))}
      <div
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "50px",
          paddingBottom:100
        }}
      >
        {myItems.length > 0 && <div>自分が里親を募集したワンちゃんたち</div>}

        <Grid container className={classes.items}>
          {myItems.length > 0 &&
            myItems.map((item, index) => (
              <div key={index}>
                <div style={{ display: "flex" }}>
                  <Grid item xs={1}>
                    <Card
                      elevation={6}
                      className={classes.card}
                      style={{ position: "relative" }}
                    >
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
                </div>
              </div>
            ))}
          {myItems.length > 1 && (
            <Link href="/myTool/allItems/allMyItems">
              <ArrowForwardIosIcon
                style={{
                  cursor: "pointer",
                }}
              />
            </Link>
          )}
        </Grid>

        {myLikedItems.length > 0 && (
          <div style={{ marginTop: 50 }}>
            <div>自分がいいねをしたワンちゃんたち</div>

            <Grid container className={classes.items}>
              {myLikedItems.length > 0 &&
                myLikedItems.map((item, index) => (
                  <div key={index}>
                    <div style={{ display: "flex" }}>
                      <Grid item xs={1}>
                        <Card
                          elevation={6}
                          className={classes.card}
                          style={{ position: "relative" }}
                        >
                          <CardContent>
                            <Link
                              href="/[another]/anotherItem/[item]"
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
                    </div>
                  </div>
                ))}

              {myLikedItems.length > 1 && (
                <Tooltip title="もっと見る" arrow>
                  <Link href="/myTool/allItems/allLikedItems">
                    <ArrowForwardIosIcon
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={onClickAllLikedItems}
                    />
                  </Link>
                </Tooltip>
              )}
            </Grid>
          </div>
        )}
        {myFollowUser.length > 0 && (
          <div style={{ marginTop: 20 }}>
            <div>自分がフォローしたユーザー</div>

            <Grid container className={classes.items}>
              {myFollowUser.length > 0 &&
                myFollowUser.map((item, index) => (
                  <div key={index}>
                    <div style={{ display: "flex" }}>
                      <Grid item xs={1}>
                        <Card
                          elevation={6}
                          className={classes.card}
                          style={{ position: "relative" }}
                        >
                          <CardContent>
                            <Link
                              href="/[another]/[profile]"
                              as={`/profile/${item.followUser}`}
                            >
                              <Avatar
                                alt="アバター画像"
                                src={item.img}
                                className={classes.avatar}
                              />
                            </Link>
                            <h2 className={classes.title}> {item.name}</h2>
                            <div className={classes.likeCount}>
                              {/* likeCountのcss   */}
                              <div className={classes.likeIcon}>
                                <FavoriteIcon
                                  style={{ paddingRight: 3 }}
                                ></FavoriteIcon>
                                {item.followerCount}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Grid>
                    </div>
                  </div>
                ))}
              {myFollowUser.length > 1 && (
                <Link href="/myTool/allItems/allFollowLists">
                  <ArrowForwardIosIcon
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </Link>
              )}
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
};

export default profile;
