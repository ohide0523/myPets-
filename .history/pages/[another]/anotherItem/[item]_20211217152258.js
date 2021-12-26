import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { db } from "../../../components/firebase";
import { Context } from "../../../components/Context";
import Styles from "../../../styles/Home.module.css";

// material-ui関連
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

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
  const [anotherItem, setAnotherItem] = useState([]);
  const [anotherUser, setAnotherUser] = useState([]);
  const router = useRouter();
  const { another, item } = router.query;
  const { uid } = useContext(Context);
  const classes = useStyles();

  useEffect(() => {
    if (another && item) {
      getAnotherItem();
      getAnotherUser();
    }
  }, [another, item]);

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
      .get()
      .then((doc) => {
        newItem.push({
          id: doc.data().id,
          img: doc.data().img,
          title: doc.data().title,
          category: doc.data().category,
          sex: doc.data().sex,
        });
        setAnotherItem(newItem);
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
                <h1>
                  {item.title}
                  <span>アイコン</span>
                </h1>
                <div className={classes.subtitle}>
                  <div>{item.category}</div>
                  <div>{item.sex}</div>
                </div>
              </div>

              {/*                 
                <div className={classes.subtitle_container}>
                  <h2>{item.category}</h2>
                  <h2>{item.sex}</h2>
                </div>
            

              {/* {another === uid && (
                <Link
                  href="/myTool/edit/item/[editItem]"
                  as={`/myTool/edit/item/${item.id}`}
                >
                  <button>itemを編集する</button>
                </Link>
              )} */}
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
