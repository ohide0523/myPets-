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

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },

input:{



  height:50,
 
  width:"80%",
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
      <div className={Styles.chat_space}>
    

        {messages.length > 0 &&
          messages.map((msg, index) => (
            <div key={index}>
              <div
                className={uid == msg.id ? Styles.balloon_r : Styles.balloon_i}
                ref={ref}
              >
                <div>
                  {msg.name}
                  <p className={Styles.says}>{msg.content}</p>
                </div>
              </div>
              {/* メッセージを送信した時間の表示 */}
              <div
                className={
                  uid == msg.id ? Styles.says_time_r : Styles.says_time_i
                }
              >
                {uid === msg.id ? "" : getStrTime(msg.createAt)}
                {uid === msg.id ? getStrTime(msg.createAt) : ""}
              </div>
            </div>
          ))}
      </div>

      <div className={Styles.input_form}>
        {/* <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={Styles.input}
          ref={ref}
          onKeyDown={(e) => submitMsg(e)}
        /> */}
          <TextFieldclassNa label="Standard" ref={ref}/>



        <button onClick={onClickSubmitMsg} className={Styles.input_button}>
          送信
        </button>
      </div>
    </>
  );
};

export default chat;
