import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { db } from "../../../components/firebase";
import { Context } from "../../../components/Context";
import Styles from "../../../styles/Home.module.css";

// material-ui関連
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar"


const useStyles = makeStyles((theme) => ({
   
    avatar: {
      width: 110,
      height: 110,
      margin: "auto",
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
  }));



const item = () => {
  const [anotherItem, setAnotherItem] = useState([]);
  const [anotherUser, setAnotherUser] = useState([]);
  const router = useRouter();
  const { another, item } = router.query;
  const { uid } = useContext(Context);

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
        setAnotherUser(newItem)
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
                href="/myTool/edit/[editItem]"
                as={`/myTool/edit/${item.id}`}
              >
                <button>itemを編集する</button>
              </Link>
            )}
          </div>
        ))}
        <div style={{display:"flex",}}>
            {anotherUser.length >0&&anotherUser.map((user,index)=>(
                  <Avatar
                  alt="アバター画像"
                  src={user.img}
                  className={classes.avatar}
                  key={index}
                />
            ))}
        </div>
    </div>
  );
};

export default item;
