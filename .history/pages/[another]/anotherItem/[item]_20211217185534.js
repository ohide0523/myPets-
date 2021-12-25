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

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 110,
    height: 110,
    marginRight: 20,
  },
  name: {
    paddingTop: 20,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: 15,
    borderRadius: 10,
    height: "auto",
    "& > *": {
      margin: theme.spacing(1),
    },
    content_container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    subtitle_container: {
      display: "flex",
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
        console.lo
      getAnotherItem();
      getAnotherUser();
    }
    if (another && item && uid) {
      getLike();
    }
  }, [another, item, uid]);

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

  const getAnotherItem = () => {
    let newItem = [];
    db.collection("users")
      .doc(another)
      .collection("items")
      .doc(item)
      .onSnapshot((doc) => {
        newItem.push({
          userId: doc.data().userId,
          id: doc.data().id,
          img: doc.data().img,
          title: doc.data().title,
          category: doc.data().category,
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
    // batch.update(db.doc(myUserRef.path).collection("likedItems").doc(item), {
    //     makeAt:firebase.firestore.FieldValue.serverTimestamp(),
    // })
    batch.update(myUserRef, {
    
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    await batch.commit();
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
          console.log(false);
          setLike(false);
        }
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            console.log(true);
            setLike(change.doc.data().like);
          }
        });
      });
  };

  return (
    <div>
      {anotherItem.length > 0 &&
        anotherItem.map((item, index) => (
          <div key={index} className={Styles.another_item_page_container}>
            <Paper elevation={5} className={classes.root}>
              <img
                src={item.img}
                alt="ワンちゃんの画像"
                style={{
                  width: "100%",
                  height: "50%",
                  borderRadius: 20,
                  margin: "auto",
                }}
              />

              <div className={classes.content_container}>
                {another === uid && (
                  <Link
                    href="/myTool/edit/item/[editItem]"
                    as={`/myTool/edit/item/${item.id}`}
                  >
                    <button>itemを編集する</button>
                  </Link>
                )}

                <div style={{ display: "flex", alignItems: "center" }}>
                  <h1>{item.title}</h1>
                  {/* いいねアイコン */}
                  <div style={{ marginTop: 18, marginLeft: 20 }}>
                    {" "}
                    {like ? (
                      <FavoriteIcon
                        onClick={() => deleteLikedItem(item.userId, item.id)}
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
                </div>

                <div className={classes.subtitle}>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 30 }}>カテゴリー</div>
                    {item.category}
                  </div>

                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 30 }}>性別</div>
                    {item.sex}
                  </div>
                </div>
              </div>
            </Paper>
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2>飼い主</h2>

              {anotherUser.length > 0 &&
                anotherUser.map((user, index) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Paper elevation={5} className={classes.root}>
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
                      <div className={classes.name}>{user.name}</div>
                      <div>{user.followerCount}</div>
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
