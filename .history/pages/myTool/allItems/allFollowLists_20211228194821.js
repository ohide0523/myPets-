import Link from "next/link"
import React,{useState,useEffect,useContext} from 'react'
import{db} from "../../../components/firebase"

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
import { Context } from '../../../components/Context';



const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
        paddingTop: "50px",
        [theme.breakpoints.up("md")]: {
         width:"90%",
         margin:"auto"
        }
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
        
        }
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
        }
      },
  }));

const allFollowList = () => {
    const [allFollowList,setAllFollowList] = useState([])
    const classes =useStyles()
    const {uid} = useContext(Context)

    useEffect(()=>{
        if(uid){
            getAllFollowList()
        }
    },[uid])



  //   自分がフォローしたListの取得
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


    return (
        <>
        <main
          style={{
            width: "100%",
            minHeight:"100vh",
            padding:20,
            paddingTop:60,
            paddingBottom: "100%",
          background:"#FFEEFF"
          }}
        >
            <h1>あなたがあたおy</h1>
          <Grid container spacing={3} className={classes.root}>
            {allFollowList.length > 0 && 
              allFollowList.map((user, index) => (
                <Grid user xs={6} sm={3} key={index}>
                  <Card elevation={6} className={classes.card}>
                    <CardContent>
                      <Link
                        href="/[another]/[profile]"
                        as={`/another/${user.id}`}
                      >
                        <Avatar
                          alt="アバター画像"
                          src={user.img}
                          className={classes.avatar}
                        />
                      </Link>
                      <h2 className={classes.title}> {user.name}</h2>
                      <div className={classes.followerCount}>
                        {/* likeCountのcss   */}
                        <div className={classes.likeIcon}>
                          <FavoriteIcon
                            style={{ paddingRight: 3 }}
                          ></FavoriteIcon>
                          {user.likeCount}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </main>
      </>

      
    )
}

export default allFollowList
