import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Context } from "../components/Context";

// // material-ui
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/Favorite";

import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { red } from '@mui/material/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    paddingTop: "20px",
    [theme.breakpoints.up("md")]: {
      width: "90%",
      margin: "auto",
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
    cursor:"pointer",
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
    padding: "5px 15px 5px 8px",
    borderRadius: 20,
    opacity: 0.7,
    [theme.breakpoints.up("md")]: {
      top: 180,
      left: 5,
      padding: "10px 15px",
    },
    like_icon:{
      background:'#d32f2f'
    },
  },
}));

const Top = () => {
  const classes = useStyles();
  const { items, getItems } = useContext(Context);

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <main
        style={{
          width: "100%",
          padding: 20,
          paddingTop: 60,
          paddingBottom: "100%",
          background: "#FFFFCC",
        }}
      >
        <Grid container spacing={3} className={classes.root}>
          {items.length > 0 &&
            items.map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Paper elevation={6} className={classes.card}>
                  <CardContent>
                    <Link
                      href="/[another]/anotherItem/[editItem]"
                      as={`/${item.userId}/anotherItem/${item.id}`}
                      passHref
                    >
                      <Avatar
                        alt="??????????????????"
                        src={item.img}
                        className={classes.avatar}
                      />
                    </Link>
                    <h2 className={classes.title}> {item.title}</h2>
                    <div className={classes.likeIcon}>
                      <FavoriteIcon  className={classes.like_icon}/>

                      <div>{item.likeCount}</div>
                    </div>
                  </CardContent>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </main>
    </>
  );
};

export default Top;
