import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, useContext, useCallback } from "react";
import firebase from "@firebase/app";
import { db } from "../../components/firebase";

// material-ui関連
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { Context } from "../../components/Context";

import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
    width: "100%",
    margin: "auto",
    paddingBottom: 100,
    background: "#FFFFCC",
  },
  root_profile: {
    width: "80%",
    margin: "auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
  },
  avatar: {
    width: 210,
    height: 210,
    margin: "auto",
    position: "relative",
    marginTop: 50,
    [theme.breakpoints.up("md")]: {
      width: 300,
      height: 300,
      marginTop: 0,
    },
  },
  button: {
    marginTop: 10,
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(2),
      width: "80%",
      margin: "auto",
      height: theme.spacing(5),
    },
  },
  introduce: {
    margin: theme.spacing(1),
    width: "100%",
    height: theme.spacing(25),
    margin: "auto",
    borderRadius: 20,
    padding: 20,
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(45),
    },
  },
  name: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(5),
    },
  },
}));

const AnotherProfile = () => {
  //フォローボタンの状態を管理
  const [follow, setFollow] = useState(false);
  // 他ユーザーの情報
  const [anotherUser, setAnotherUser] = useState([]);
  const router = useRouter();
  // URLの中に他ユーザーのuidを埋め込んでいる
  const { profile } = router.query;
  const classes = useStyles();
  const { uid } = useContext(Context);

  // フォローボタンの状態のリアルタイムで取得
  const getFollow = () => {
    // 自分がフォローしているユーザーを管理するfollowListsからデータを取得
    db.collection("users")
      .doc(uid)
      .collection("followLists")
      .where("followUser", "==", profile)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            // 変更したdata()のfollowの状態を取得
            setFollow(change.doc.data().follow);
          }
          if (change.type === "removed") {
            // followListが削除されたら、followの状態はfalseになる。
            setFollow(false);
          }
        });
      });
  };

  // フォローする機能
  const onClickFollow = async (id, name, img, followerCount) => {
    if (profile == uid) {
      alert("自分のことはフォローできません。");
      return;
    }
    // フォローされる側のユーザーの参照
    const anotherUserRef = db.collection("users").doc(id);
    // フォローする自分のユーザーの参照
    const myUserRef = db.collection("users").doc(uid);

    const batch = db.batch();

    // フォローされた側の処理　フォロワーを管理するfollowerListsを作成
    batch.set(
      db.doc(anotherUserRef.path).collection("followerLists").doc(uid),
      {
        user: uid, //フォローしてきたユーザーのuid
      }
    );

    // フォローされたユーザーのフォロワー数を増やす
    batch.update(db.doc(anotherUserRef.path), {
      followerCount: firebase.firestore.FieldValue.increment(+1),
    });

    // フォローした側の処理　フォローしたユーザーを管理するfollowListsを作成
    batch.set(db.doc(myUserRef.path).collection("followLists").doc(id), {
      followerCount: followerCount, //ユーザーがフォロ-されている数
      img: img, //フォローしたユーザーのアイコン
      name: name, //フォローした人のユーザーの名前（仮）　最終的には、プロフィール写真にしたい
      followUser: id, //フォローした人のuid
      user: uid, //自分のuid
      follow: true, //フォローボタンの状態
    });

    // フォローしたユーザーのフォロワー数を増やす処理(更新)
    batch.update(db.doc(myUserRef.path).collection("followLists").doc(id), {
      followerCount: firebase.firestore.FieldValue.increment(+1),
    });
    await batch.commit();
  };

  //  フォロー解除した時の処理
  const onClickUnFollow = async (id) => {
    // フォローされる側のユーザーの参照
    const anotherUserRef = db.collection("users").doc(id);
    // フォローする自分のユーザーの参照
    const myUserRef = db.collection("users").doc(uid);

    const batch = db.batch();

    batch.delete(
      db.doc(anotherUserRef.path).collection("followerLists").doc(uid)
    );
    // フォローしていたユーザーのフォロワー数を減らす
    batch.update(db.doc(anotherUserRef.path), {
      followerCount: firebase.firestore.FieldValue.increment(-1),
    });

    //自分のフォローリストから、指定したユーザーを削除する
    batch.delete(db.doc(myUserRef.path).collection("followLists").doc(id));

    await batch.commit();
  };

  // 他人のユーザーの取得
  const getAnotherUser = () => {
    let newItem = [];
    db.collection("users")
      .doc(profile)
      .get()
      .then((doc) => {
        newItem.push({
          id: profile,
          img: doc.data().img,
          name: doc.data().name,
          introduce: doc.data().introduce,
          followerCount: doc.data().followerCount,
        });
        setAnotherUser(newItem);
      });
  };

  // 初回レンダリング時に他ユーザーの情報+フォローボタンの状態を取得する。
  useEffect(() => {
    if (profile) {
      // 他ユーザーの情報を取得する関数
      getAnotherUser();
    }
    if (profile && uid) {
      // 他ユーザーをフォローしているかでフォローボタンの状態を変える
      getFollow();
    }
  }, [profile, uid]);

  return (
    <main className={classes.root}>
      {anotherUser.length > 0 &&
        anotherUser.map((user, index) => (
          <div className={classes.root_profile} key={index}>
            <Avatar
              alt="アバター画像"
              src={user.img}
              className={classes.avatar}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "skyblue",
                width: 120,
                padding: 5,
                borderRadius: 20,

                position: "absolute",
              }}
            >
              <AccountBoxIcon />
              {user.followerCount}
              <div style={{ fontSize: 11 }}>フォロワー</div>
            </div>
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

            {follow ? (
              <Button
                variant="outlined"
                onClick={() => onClickUnFollow(user.id)}
                className={classes.button}
              >
                フォロー
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  onClickFollow(
                    user.id,
                    user.name,
                    user.img,
                    user.followerCount
                  )
                }
                className={classes.button}
              >
                フォロー
              </Button>
            )}

            <Link
              href="/myTool/chat/[uid]/[pid]"
              as={`/myTool/chat/${uid}/${user.id}`}
              passHref
            >
              <Button
                variant="contained"
                color="primary"
                disableElevation
                className={classes.button}
              >
                この人とチャット
              </Button>
            </Link>
            <h2>自己紹介</h2>
            <Paper elevation={3} className={classes.introduce}>
              {user.introduce}
            </Paper>
          </div>
        ))}
    </main>
  );
};

export default AnotherProfile;
