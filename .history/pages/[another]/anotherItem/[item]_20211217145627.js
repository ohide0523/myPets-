import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { db } from "../../../components/firebase";
import { Context } from "../../../components/Context";
import Styles from "../../../styles/Home.module.css";

// material-ui関連
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 110,
    height: 110,
    marginRight:20
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding:15,
    '& > *': {
      margin: theme.spacing(1),
     
    },
}
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
            <img
              src={item.img}
              alt="ワンちゃんの画像"
              style={{ width: "90%", height: "30%", borderRadius: 20 }}
            />
            <h1>{item.title}</h1>
            <h2>{item.category}</h2>
            <h2>{item.sex}</h2>
            {another === uid && (
              <Link
                href="/myTool/edit/item/[editItem]"
                as={`/myTool/edit/item/${item.id}`}
              >
                <button>itemを編集する</button>
              </Link>
            )}

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
                  <div style={{ display: "flex" ,alignItems:"center"}} >
                       <Paper elevation={3} className={classes.root}>
                      <Link href="/[another]/[profile]" as={`/profile/${user.id}`}>
                    <Avatar
                      alt="アバター画像"
                      src={user.img}
                      className={classes.avatar}
                      key={index}
                    />
                    </Link>
                    <div>{user.name}</div>
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
