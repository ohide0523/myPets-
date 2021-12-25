import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { db } from "../../../components/firebase";
import { Context } from "../../../components/Context";

// material-ui関連
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import FavoriteIcon from "@material-ui/icons/Favorite";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

import Tooltip from "@material-ui/core/Tooltip";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import CreateIcon from "@material-ui/icons/Create";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <div>{children}</div>
          {/* //Typography */}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
  },
  listItem: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },

  name: {
    width: "100%",
    paddingBottom: 40,
  },
  tab: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  root: {
    width: "100%",
    textAlign: "center",
    paddingTop: 100,
  },
  root_profile: {
    width: "80%",
    margin: "auto",
    [theme.breakpoints.up("md")]: {
        width:"40%"
    }
  },

  root_tab: {
    marginTop: 100,
    marginBottom: 350,
    [theme.breakpoints.up("md")]: {
        padding:30
    }
  },
  tab_bar:{
    [theme.breakpoints.up("md")]: {
        
    }
  },

  items: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  card: {
    borderRadius: 10,
    position: "relative",
    background: "#F0F8FF",
    width: 130,
    marginRight: 20,
    [theme.breakpoints.up("md")]: {
        width: 230,
    }
  },
  userIcon: {
    width: 250,
    height: 250,
    margin: "auto",
    marginBottom: 40,
    [theme.breakpoints.up("md")]: {
        width: 300,
        height: 300,
        marginBottom: 80,
    }
  },
  avatar: {
    width: 90,
    height: 90,
    margin: "auto",
    marginBottom: "60px",
    [theme.breakpoints.up("md")]: {
        width: 180,
        height: 180,
    }
  },
  title: {
    position: "absolute",
    top: 125,
    left: 5,
    fontFamily: "Comic Sans MS",
    fontSize: "15px",
    width: "95%",
    background: "#CEF9DC",
    padding: 2,
    paddingLeft: 10,
    borderRadius: 30,
    [theme.breakpoints.up("md")]: {
        top: 205,
        padding:10
    }
  },
  likeIcon: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: 110,
    left: 5,
    background: "#CEF9DC",
    padding: "2px 10px 2px 7px",
    borderRadius: 20,
    opacity: 0.7,
    [theme.breakpoints.up("md")]: {
    top: 170,
    padding:10
    }

  },
  introduce: {
    margin: theme.spacing(1),
    width: "100%",
    height: theme.spacing(30),
    margin: "auto",
    borderRadius: 20,
    padding: 20,
    overflowWrap: "break-word",
  },
  button: {
    width: "100%",
    border: "2px 0px 1px 0px",
    padding: 10,
    marginBottom: 50,
  },
}));

const profile = () => {
  const {
    uid,
    getMyUser,
    myUser,
    myItems,
    setMyItems,
    myLikedItems,
    myFollowUser,
    setMyFollowUser,
    getMyLikedItems,
  } = useContext(Context);
  const classes = useStyles();
  const router = useRouter();

  // material-ui関連
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (uid) {
      getMyUser();
      getMyItems();
      getMyLikedItems();
      getMyFollowUser();
    }
  }, [uid]);

  // 自分の募集したitemの取得
  const getMyItems = () => {
    let newItems = [];
    db.collection("users")
      .doc(uid)
      .collection("items")
      .onSnapshot(() => {
        // わざわざもう一度呼び出すことで、newItems[]にしっかりとitemsのデータ分入りこむ
        db.collection("users")
          .doc(uid)
          .collection("items")
          .orderBy("createAt", "desc")
          .limit(2)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              newItems.push({
                userId: doc.data().userId,
                id: doc.data().id,
                img: doc.data().img,
                title: doc.data().title,
                likeCount: doc.data().likeCount,
              });
            });

            setMyItems(newItems);
          });
      });
  };

  //   自分がフォローしたユーザーの取得
  const getMyFollowUser = () => {
    let newItems = [];
    db.collection("users")
      .doc(uid)
      .collection("followLists")
      .onSnapshot(() => {
        db.collection("users")
          .doc(uid)
          .collection("followLists")
          .limit(2)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              newItems.push({
                followUser: doc.data().followUser,
                img: doc.data().img,
                name: doc.data().name,
                followerCount: doc.data().followerCount,
              });
            });
          });
        setMyFollowUser(newItems);
      });
  };

  const onClickAllLikedItems = () => {
    router.push("/myTool/allItems/allLikedItems");
  };

  const onClickAllFollowLists = () => {
    router.push("/myTool/allItems/allFollowLists");
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <main className={classes.root}>
      {myUser.length > 0 &&
        myUser.map((user, index) => (
          <div key={index} className={classes.root_profile}>
            <Avatar
              alt="アバター画像"
              src={user.img}
              className={classes.userIcon}
            />
            <TextField
              className={classes.name}
              id="input-with-icon-textfield"
              label="ユーザー名"
              value={user.name}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              className={classes.name}
              id="input-with-icon-textfield"
              label="email"
              value={user.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Link
              href="/myTool/edit/profile/[editProfile]"
              as={`/myTool/edit/profile/editProfile`}
            >
              <Button
                variant="outlined"
                color="primary"
                disableElevation
                className={classes.button}
              >
                プロフィールを編集する
              </Button>
            </Link>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                borderRadius: 50,
                background: "#66FF99",
                marginBottom: 30,
              }}
            >
              <h2 style={{ paddingRight: 15 }}>自己紹介</h2>
              <div>
                <CreateIcon />
              </div>
            </div>
            <Paper elevation={3} className={classes.introduce}>
              {user.introduce}
            </Paper>
          </div>
        ))}

      <div className={classes.root_tab}>
        <AppBar position="static" className={classes.tab_bar}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="MyDog" {...a11yProps(0)} />
            <Tab label="like" {...a11yProps(1)} />
            <Tab label="follow" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Grid container className={classes.items}>
              {myItems.length > 0 &&
                myItems.map((item, index) => (
                  <Card
                    elevation={6}
                    className={classes.card}
                    style={{ position: "relative" }}
                    key={index}
                  >
                    <CardContent>
                      <Link
                        href="/[another]/anotherItem/[editItem]"
                        as={`/${item.userId}/anotherItem/${item.id}`}
                      >
                        <Avatar
                          alt="アバター画像"
                          src={item.img}
                          className={classes.avatar}
                        />
                      </Link>
                      <h2 className={classes.title}> {item.title}</h2>
                      <div className={classes.likeCount}>
                        {/* likeCountのcss   */}
                        <div className={classes.likeIcon}>
                          <FavoriteIcon
                            style={{ paddingRight: 3 }}
                          ></FavoriteIcon>
                          {item.likeCount}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              {myItems.length > 1 && (
                <Link href="/myTool/allItems/allMyItems">
                  <ArrowForwardIosIcon
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </Link>
              )}
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <Grid container className={classes.items}>
              {myLikedItems.length > 0 &&
                myLikedItems.map((item, index) => (
                  <Card
                    elevation={6}
                    className={classes.card}
                    style={{ position: "relative" }}
                    key={index}
                  >
                    <CardContent>
                      <Link
                        href="/[another]/anotherItem/[item]"
                        as={`/${item.userId}/anotherItem/${item.id}`}
                      >
                        <Avatar
                          alt="アバター画像"
                          src={item.img}
                          className={classes.avatar}
                        />
                      </Link>
                      <h2 className={classes.title}> {item.title}</h2>
                      <div className={classes.likeCount}>
                        {/* likeCountのcss   */}
                        <div className={classes.likeIcon}>
                          <FavoriteIcon
                            style={{ paddingRight: 3 }}
                          ></FavoriteIcon>
                          {item.likeCount}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

              {myLikedItems.length > 1 && (
                <Tooltip title="もっと見る" arrow>
                  <Link href="/myTool/allItems/allLikedItems">
                    <ArrowForwardIosIcon
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={onClickAllLikedItems}
                    />
                  </Link>
                </Tooltip>
              )}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Grid container className={classes.items}>
              {myFollowUser.length > 0 &&
                myFollowUser.map((item, index) => (
                  <Card
                    elevation={6}
                    className={classes.card}
                    style={{ position: "relative" }}
                    key={index}
                  >
                    <CardContent>
                      <Link
                        href="/[another]/[profile]"
                        as={`/profile/${item.followUser}`}
                      >
                        <Avatar
                          alt="アバター画像"
                          src={item.img}
                          className={classes.avatar}
                        />
                      </Link>
                      <h2 className={classes.title}> {item.name}</h2>
                      <div className={classes.followerCount}>
                        {/* likeCountのcss   */}
                        <div className={classes.likeIcon}>
                          <FavoriteIcon
                            style={{ paddingRight: 3 }}
                          ></FavoriteIcon>
                          {item.followerCount}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              {myFollowUser.length > 1 && (
                <Link href="/myTool/allItems/allFollowLists">
                  <ArrowForwardIosIcon
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </Link>
              )}
            </Grid>
          </TabPanel>
        </SwipeableViews>
      </div>
    </main>
  );
};

export default profile;
