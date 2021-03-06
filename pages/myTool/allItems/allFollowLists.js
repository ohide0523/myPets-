import Link from "next/link";
import React, { useState, useEffect, useContext,useCallback } from "react";
import { db } from "../../../components/firebase";

// // material-ui
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Context } from "../../../components/Context";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    paddingTop: "20px",
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      width: "90%",
      margin: "auto",
    },
  },
  title_page:{
    fontSize:20,
    textAlign:"center",
    background: "#CEF9DC",
    padding:10,
    borderRadius:30,
    [theme.breakpoints.up("md")]: {
      fontSize:30,
      padding:"25px 20px",
      width:"50%",
      margin:"auto",
      marginTop:30,
  },
  },
  card: {
    borderRadius: 10,
    position: "relative",
    background: "#F0F8FF",
    width: 160,
    height: 210,
    [theme.breakpoints.up("md")]: {
      borderRadius: 10,
      position: "relative",
      background: "#F0F8FF",
      width: 270,
      height: 330,
    },
  },
  avatar: {
    width: 110,
    height: 110,
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      width: 210,
      height: 190,
      margin: "auto",
    },
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
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: 220,
      left: 5,
      fontFamily: "Comic Sans MS",
      fontSize: "15px",
      width: "95%",
      background: "#CEF9DC",
      padding: 12,
    },
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
    [theme.breakpoints.up("md")]: {
      top: 180,
      left: 5,
      padding: "10px 20px 10px 7px",
    },
  },
}));

const AllFollowList = () => {
  const [allFollowList, setAllFollowList] = useState([]);
  const classes = useStyles();
  const { uid } = useContext(Context);

  

  //   ???????????????????????????List?????????
  const getAllFollowList = () => {
    
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
                userId: doc.data().userId,
                id: doc.data().followUser,
                img: doc.data().img,
                name: doc.data().name,
                followerCount: doc.data().followerCount,
              });
            });
            setAllFollowList(newItems);
          });
      });
    
  };

  useEffect(() => {
    if (uid) {
      getAllFollowList();
    }
  }, [uid]);

  return (
    <>
      <main
        style={{
          width: "100%",
          minHeight: "100vh",
          padding: 20,
          paddingTop: 70,
          paddingBottom: "100%",
          background: "#FFEEFF",
        }}
      >
        <h1 className={classes.title_page}>??????????????????????????????</h1>
        <Grid container spacing={3} className={classes.root}>
          {allFollowList.length > 0 &&
            allFollowList.map((user, index) => (
              <Grid user xs={6} sm={3} key={index}>
                <Card elevation={6} className={classes.card}>
                  <CardContent>
                    <Link
                      href="/[another]/[profile]"
                      as={`/another/${user.id}`}
                      passHref
                    >
                      <Avatar
                        alt="??????????????????"
                        src={user.img}
                        className={classes.avatar}
                      />
                    </Link>
                    <h2 className={classes.title}> {user.name}</h2>
                    <div className={classes.followerCount}>
                      {/* likeCount???css   */}
                      <div className={classes.likeIcon}>
                        <AccountBoxIcon style={{ marginRight: 5 }} />
                        {user.followerCount}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </main>
    </>
  );
};

export default AllFollowList;
