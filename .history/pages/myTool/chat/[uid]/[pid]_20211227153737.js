import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useRouter } from "next/router";
import { db } from "../../../../components/firebase";
import { Context } from "../../../../components/Context";
import Styles from "../../../../styles/Home.module.css";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    padding: "20px",
    overflow: "auto",
    paddingTop: "100px",
    paddingBottom: "150px",
    background: "#CCFFCC",
    textAlign: "center",
  },

  input_form: {
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
    position: "fixed",
    bottom: "56px",
  },
  input: {
    height: 50,
    borderRadius: 10,
    width: "90%",
    [theme.breakpoints.up("md")]: {
      width: "97%",
    },
  },
}));

const chat = () => {
  // チャット用の自分のユーザー
  const [myUser, setMyUser] = useState([]);
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");
  const router = useRouter();
  const { pid } = router.query;
  const { uid } = useContext(Context);
  const ref = useRef();
  //messagesのlength
  const length = messages.length;
  const classes = useStyles();

  useEffect(() => {
    console.log(messages);
  }, [messages]);
  useEffect(() => {
    if (length) {
      scrollToEnd();
    }
  }, [length]);

  useEffect(() => {
    if (pid && uid) {
      getMsg();
      ref.current.focus();
    }
  }, [pid, uid]);

  useEffect(() => {
    if (uid) {
      let user = [];
      db.collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
          user.push({
            id: doc.data().id,
            img: doc.data().img,
            name: doc.data().name,
          });
          setMyUser(user);
        });
    }
  }, [uid]);

  //全メッセージ内容の取得
  const getMsg = () => {
    const id = uid > pid ? `${uid}${pid}` : `${pid}${uid}`;
    db.collection("chatRoom")
      .doc(id)
      .collection("messages")
      .orderBy("createAt")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            setMessages((prev) => [...prev, change.doc.data()]); //なぜかエラーのもと
          }
        });
      });
  };

  //メッセージ送信 ~~~Enterでの送信パターン~~~
  const submitMsg = (e) => {
    const id = uid > pid ? `${uid}${pid}` : `${pid}${uid}`;
    if (content == "") {
      return;
    }
    if (e.keyCode === 13) {
      db.collection("chatRoom")
        .doc(id)
        .set({
          roomId: id,
          member: [uid, pid],
        });

      db.collection("chatRoom").doc(id).collection("messages").add({
        img: myUser[0].img,
        name: myUser[0].name,
        id: myUser[0].id,
        content: content,
        createAt: new Date().getTime(),
      });
      setContent("");
      ref.current.focus();
    }
  };

  // ~~~~カーソルでの送信パターン~~~~
  const onClickSubmitMsg = () => {
    if (content == "") {
      return;
    }
    const id = uid > pid ? `${uid}${pid}` : `${pid}${uid}`;
    db.collection("chatRoom")
      .doc(id)
      .set({
        roomId: id,
        member: [uid, pid],
      });

    db.collection("chatRoom").doc(id).collection("messages").add({
      img: myUser[0].img,
      name: myUser[0].name,
      id: myUser[0].id,
      content: content,
      createAt: new Date().getTime(),
    });
    setContent("");
    ref.current.focus();
  };

  // 時間の型を作る
  const getStrTime = (time) => {
    let t = new Date(time);
    return (
      `${t.getHours()}`.padStart(2, 0) +
      ":" +
      `${t.getMinutes()}`.padStart(2, "0")
    );
  };

  //下まで自動スクロール
  const scrollToEnd = useCallback(() => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [ref]);

  return (
    <>
      <div className={classes.root}>
        {messages.length > 0 &&
          messages.map((msg, index) => (
            <div key={index}>
              <div
                className={uid == msg.id ? Styles.balloon_r : Styles.balloon_l}
                ref={ref}
              >
                {msg.name}

                <p className={Styles.says}>{msg.content}</p>
              </div>
              {/* メッセージを送信した時間の表示 */}
              <div
                className={
                  uid == msg.id ? Styles.says_time_r : Styles.says_time_l
                }
              >
                {uid === msg.id ? "" : getStrTime(msg.createAt)}
                {uid === msg.id ? getStrTime(msg.createAt) : ""}
              </div>
            </div>
          ))}
      </div>

      <div className={classes.input_form}>
        <TextField
          className={classes.input}
          label="メッセージを入力"
          ref={ref}
          onKeyDown={(e) => submitMsg(e)}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <SendIcon
          className={classes.button}
          onClick={onClickSubmitMsg}
          fontSize="large"
          color="primary"
        />
      </div>
    </>
  );
};

export default chat;
