import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { db } from "../../../components/firebase";
import { Context } from "../../../components/Context";
import Styles from "../../../styles/Home.module.css";
import firebase from "@firebase/app";

// material-ui関連
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import PetsIcon from "@material-ui/icons/Pets";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: 15,
    borderRadius: 10,
    height: "auto",
    width: "90%",
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      width: "30%",
      margin: "auto",
    },

    "& > *": {
      margin: theme.spacing(1),
    },
    content_container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  img: {
    width: "100%",
    height: "50%",
    borderRadius: 20,
    margin: "auto",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      width: "90%",
      height: "10%",
    },
  },
  likeIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    right: 50,
    background: "#CEF9DC",
    padding: "4px 15px 4px 15px",
    borderRadius: 15,
    [theme.breakpoints.up("md")]: {
      right: 540,
    },
  },
  textField: {
    width: "100%",
    marginTop: 30,
  },
  avatar: {
    width: 110,
    height: 110,
    marginRight: 20,
    [theme.breakpoints.up("md")]: {
      width: 130,
      height: 130,
    },
  },
  title: {
    width: "100%",
    marginTop: 20,
    textAlign: "center",
  },
  smallTitle: {
    width: "100%",
    marginBottom: 10,
  },
  titleIcon: {
    marginRight: 20,
    fontSize: 30,
  },
  name: {
    paddingTop: 20,
  },
  button: {
    width: "100%",
    padding: 5,
  },
  anotherUser: {
    display: "flex",
    flexWrap: "wrap",
    padding: 15,
    borderRadius: 10,
    height: "auto",
    width: "90%",
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      padding: 30,
    },
  },
}));

const item = () => {
  const [like, setLike] = useState(false);
  const [anotherItem, setAnotherItem] = useState([]);
  const [anotherUser, setAnotherUser] = useState([]);
  const router = useRouter();
  const { another, item } = router.query;
  const { uid } = useContext(Context);
  const classes = useStyles();

  useEffect(() => {
    if (another && item) {
      console.log("発火");
      getAnotherItem();
      getAnotherUser();
    }
    if (another && item && uid) {
      getLike();
    }
  }, [another, item, uid]);

  //他人のユーザー情報の取得
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
          followerCount: doc.data().followerCount,
        });
        setAnotherUser(newItem);
      });
  };

  //他人のユーザーの持つitemの取得
  const getAnotherItem = () => {
    let newItem = [];
    db.collection("users")
      .doc(another)
      .collection("items")
      .doc(item)
      .get()
      .then((doc) => {
        newItem.push({
          userId: doc.data().userId,
          id: doc.data().id,
          img: doc.data().img,
          title: doc.data().title,
          category: doc.data().category,
          age: doc.data().age,
          sex: doc.data().sex,
          likeCount: doc.data().likeCount,
        });
        setAnotherItem(newItem);
      });
  };

  //  いいねする機能
  const addLikedItem = async (userId, itemId, img, title, count) => {
    // batch
    const batch = db.batch();

    const anotherItemRef = db
      .collection("users")
      .doc(userId)
      .collection("items")
      .doc(itemId);
    const myUserRef = db.collection("users").doc(uid);

    batch.set(db.doc(anotherItemRef.path).collection("likedUsers").doc(item), {
      user: uid,
      itemId: item,
    });

    batch.update(anotherItemRef, {
      likeCount: firebase.firestore.FieldValue.increment(+1),
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    batch.set(db.doc(myUserRef.path).collection("likedItems").doc(item), {
      title: title,
      img: img, //ここに個々のitemの写真を打ち込みたい
      id: itemId,
      userId: userId,
      itemRef: anotherItemRef,
      like: true, //ここは、likeの状態を表すもの。後で、likeのstateで管理する。
      likeCount: count,
    });

    batch.update(myUserRef, {
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    await batch.commit();
    getAnotherItem();
  };

  //   いいねを解除する機能
  const deleteLikedItem = async (userId, itemId) => {
    const batch = db.batch();
    const anotherItemRef = db
      .collection("users")
      .doc(userId)
      .collection("items")
      .doc(itemId);
    const myUserRef = db.collection("users").doc(uid);
    batch.delete(
      db.doc(anotherItemRef.path).collection("likedUsers").doc(item)
    );
    batch.update(anotherItemRef, {
      likeCount: firebase.firestore.FieldValue.increment(-1),
    });

    batch.delete(db.doc(myUserRef.path).collection("likedItems").doc(item));
    await batch.commit();
    getAnotherItem();
  };

  //各itemのlikeの状態を取得
  const getLike = () => {
    db.collection("users")
      .doc(uid)
      .collection("likedItems")
      .where("id", "==", item)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.data());
          setLike(doc.data().like);
        });
      });
    db.collection("users")
      .doc(uid)
      .collection("likedItems")
      .where("id", "==", item)
      .onSnapshot((snapshot) => {
        if (!snapshot.exists) {
          setLike(false);
        }
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            setLike(change.doc.data().like);
          }
        });
      });
  };

  return (
    <div className={Styles.another_item_page_container}>
      <h1 style={{ textAlign: "center" }}>困っているワンちゃん</h1>
      {anotherItem.length > 0 &&
        anotherItem.map((item, index) => (
          <div key={index}>
            <Paper elevation={5} className={classes.root}>
              <img
                src={item.img}
                alt="ワンちゃんの画像"
                className={classes.img}
              />
              {/* いいねアイコン */}
              <div className={classes.likeIcon}>
                {" "}
                {like ? (
                  <FavoriteIcon
                    onClick={() => deleteLikedItem(item.userId, item.id)}
                    style={{ marginRight: 7 }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={() =>
                      addLikedItem(
                        item.userId,
                        item.id,
                        item.img,
                        item.title,
                        item.likeCount
                      )
                    }
                  />
                )}
                {item.likeCount}
              </div>

              <div className={classes.content_container}>
                {another === uid && (
                  <Link
                    href="/myTool/edit/item/[editItem]"
                    as={`/myTool/edit/item/${item.id}`}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                    >
                      内容を編集する
                    </Button>
                  </Link>
                )}

                <TextField
                  label="名前"
                  id="standard-size-normal"
                  defaultValue={item.title}
                  InputProps={{
                    readOnly: true,
                  }}
                  className={classes.title}
                />

                <TextField
                  label="カテゴリー"
                  defaultValue={item.category}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  label="年齢"
                  defaultValue={item.age}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  label="性別"
                  defaultValue={item.sex}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  className={classes.textField}
                />
              </div>
            </Paper>

            <div
              style={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <h2>飼い主</h2>

              {anotherUser.length > 0 &&
                anotherUser.map((user, index) => (
                  <div
                    style={{
                      display: "flex",
                    }}
                    key={index}
                  >
                    <Paper elevation={5} className={classes.anotherUser}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Link
                          href="/[another]/[profile]"
                          as={`/profile/${user.id}`}
                        >
                          <Avatar
                            alt="アバター画像"
                            src={user.img}
                            className={classes.avatar}
                            key={index}
                          />
                        </Link>

                        <div
                          style={{ display: "flex", flexDirection: "column",minWidth:"100%" }}
                        >
                          <div style={{ display: "flex" }}>
                            <AccountCircle />
                            {user.name}
                          </div>
                          <div style={{ display: "flex" }}>
                            <AccountBoxIcon style={{ marginRight: 8 }} />
                            <div>{user.followerCount}フォロワー</div>
                          </div>
                        </div>
                      </div>
                    </Paper>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default item;
