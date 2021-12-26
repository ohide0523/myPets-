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

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    textField:{
        width:"100%",
        marginTop:30,
    },
  avatar: {
    width: 110,
    height: 110,
    marginRight: 20,
  },
  name: {
    paddingTop: 20,
  },
  button:{
      width
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: 15,
    borderRadius: 10,
    height: "auto",
    width: "100%",

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
          category:doc.data().category,
          age:doc.data().age,
          sex:doc.data().sex,
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
                    <Button　variant="outlined" color="primary" className={classes.button}>編集する</Button>
                  </Link>
                )}

                <h1>{item.title}</h1>
                {/* いいねアイコン */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
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
                      alignItems: "center",
                      width: "100%",
                    }}
                    key={index}
                  >
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
