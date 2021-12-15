import React, { useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Context } from "../components/Context";

// // material-ui
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width:"90%",
    margin:"auto",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  card: {
    borderRadius: 10,
    position: "relative",
    background: "#F0F8FF",
    width: 130,
    height: 165,
    marginBottom:"50"
  },
  avatar: {
    width: 90,
    height: 85,
    margin: "auto",
  },
  title: {
    position: "absolute",
    top: 120,
    left: 5,
    fontFamily: "Comic Sans MS",
    fontSize: "15px",
    width: "95%",
    background: "#CEF9DC",
    padding: 2,
    paddingLeft: 10,
    borderRadius: 30,
  },
  likeIcon:{
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: 100,
    left: 5,
    background: "#CEF9DC",
    padding: "2px 10px 2px 7px",
    borderRadius: 20,
    opacity: 0.7,
  }
}));

const Top = () => {
  const classes = useStyles();
  const router = useRouter();
  const { uid, logout, items, getItems } = useContext(Context);

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <Link href="myTool/createItem/createItem">
        <div>item作成</div>
      </Link>

      <h2>item一覧</h2>

      <div>
        <Grid container spacing={4}  className={classes.root}>
        
          {items.length > 0 &&
        items.map((item, index) => (
            <Grid item xs={5}>
            <Card elevation={5} className={classes.card} >
        <CardContent> 
                 <Link
                    href="/[another]/anotherItem/[editItem]"
                    as={`/${item.userId}/anotherItem/${item.id}`}
                  >
                    <Avatar
                      alt="アバター画像"
                      // src={item.img}
                      className={classes.avatar}
                    />
                  </Link> 
                 <h2 className={classes.title}> {item.title}</h2>
                  <div className={classes.likeCount}> 
                 {/* likeCountのcss   */}
                 <div
                    className={classes.likeIcon}
                    >
                      <FavoriteIcon style={{ paddingRight: 3 }}></FavoriteIcon>
                      {item.likeCount}
                    </div>
                  </div> 
                 </CardContent>
            </Card>
          </Grid>
             ))}
       
        </Grid>
      </div>

   
    </>
  );
};

export default Top;
