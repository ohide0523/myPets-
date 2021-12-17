import React, { useState, useEffect, useContext } from "react";
import { db } from "../../../components/firebase";
import { Context } from "../../../components/Context";

// material-ui関連
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

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

const profile = () => {
  const [myUser, setMyUser] = useState([]);

  const { uid } = useContext(Context);
  const classes = useStyles();

  useEffect(() => {
    if (uid) {
      getMyUser();
    }
  }, [uid]);

  const getMyUser = () => {
    db.collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        setMyUser([doc.data()]);
      });
  };

  return (
    <div style={{ paddingTop: "40px" }}>
      <h1>Myページ</h1>
      {myUser.length > 0 &&
        myUser.map((user, index) => (
          <div key={index}>
            <div style={{ display: "flex" }}>
              <Avatar
                alt="アバター画像"
                src={user.img}
                className={classes.avatar}
              />
              <div style={{display: "flex", }}>
              <div>{user.name}</div>
              <div>{user.email}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default profile;
