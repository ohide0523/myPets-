import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth, db, googleProvider } from "./firebase";
import firebase from "@firebase/app";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  // 自分のユーザー情報
  const [myUser, setMyUser] = useState([]);
  // 自分のユーザーのid
  const [uid, setUid] = useState(null);
  // 自分のユーザーが保持しているitem(ワンちゃん)
  const [myItems, setMyItems] = useState([]);
  // 自分がいいねしているitem(ワンちゃん)
  const [myLikedItems, setMyLikedItems] = useState([]);
  // 自分がフォローしているユーザー
  const [myFollowUser, setMyFollowUser] = useState([]);
  // ユーザーのemail
  const [email, setEmail] = useState("");
  // ユーザーのpassword
  const [password, setPassword] = useState("");
  // 新しく作成するアカウントのemail
  const [newEmail, setNewEmail] = useState("");
  // 新しく作成するアカウントのpassword
  const [newPassword, setNewPassword] = useState("");
  //トップ画面に表示する全ユーザーの持っているitem(ワンちゃん)
  const [items, setItems] = useState([]);
  // 絞り込み検索した結果のitems
  const [searchItems, setSearchItems] = useState([]);
  // ユーザーのログイン状態
  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter();

  // 犬について

  // カテゴリー
  const category_dog = {
    a: "オーストラリアンシェパード",
    b: "ボーダーコリー",
    c: "シーズー",
    d: "柴犬",
  };

  // 性別
  const sex_dog = {
    a: "メス",
    b: "オス",
  };

  // 絞り込みに必要なデータ

  // 並べ替え
  const sort_dog = {
    a: "おまかせ",
    b: "新しく追加された順",
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // 自分のアカウントのuidをstateで管理する
        setUid(user.uid);
      } else {
        // ユーザーにid情報がなければlogin画面へ遷移する
        router.push("/login");
      }
    });
  }, []);

  useEffect(() => {
    if (uid) {
      // ユーザーにid情報が入っていればログイン状態をtrueにする
      setIsLogin(true);
    }
  }, [uid]);

  // Topページに遷移する処理
  const onClickTop = () => {
    if (uid) {
      // ユーザーにid情報が入っていればトップ画面に遷移する
      router.push("/Top");
    } else {
      // ユーザー情報が入ってなければ、alertのみ表示する
      alert("ログインしてください。。");
    }
  };

  // 匿名ログイン
  const anonymouslyLogin = () => {
    // 匿名ログインする
    auth
      .signInAnonymously()
      .then((res) => {
        // 必要なユーザー情報をあらかじめ設定する
        db.collection("users").doc(res.user.uid).set({
          id: res.user.uid,
          img: "",
          name: "テストユーザー",
          email: "設定されていません",
          introduce: "設定されていません",
          followerCount: 0,
          createAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        alert("テストログインに成功しました！");
        //トップ画面に遷移する
        router.push("/Top");
        // ログイン状態をtrueにする
        setIsLogin(true);
      })
      .catch(() => {
        alert("失敗しました。。");
      });
  };

  //googleログイン
  const googleLogin = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
      // 初めてのユーザーなのか確認している。
      const firstLogin = res.additionalUserInfo.isNewUser;
      // 初めてのユーザーなら、ユーザー初期設定をする
      if (firstLogin) {
        alert("初めてのユーザーのログインを確認しました！");
        router.push("Top");
        db.collection("users").doc(res.user.uid).set({
          id: res.user.uid,
          img: "",
          name: "設定されていません",
          email: "設定されていません",
          introduce: "設定されていません",
          followerCount: 0,
          createAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setIsLogin(true);
      } else {
        // 既存のユーザーならトップページに遷移するだけ
        alert("既存のユーザーログインを確認しました！");
        router.push("/Top");
        setIsLogin(true);
      }
    });
  };

  //emailログイン
  const emailLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("ログインに成功しました！");
        setEmail("");
        setPassword("");
        router.push("/Top");
      })
      .catch(() => {
        alert("ログインに失敗しました。。");
      });
  };

  //   emailアカウントを作成する
  const createEmailUser = () => {
    auth
      .createUserWithEmailAndPassword(newEmail, newPassword)
      .then((res) => {
        alert("アカウントを作成しました！");
        router.push("Top");
        setNewEmail("");
        setNewPassword("");
        // emailアカウント作成時にユーザー初期設定をする
        db.collection("users").doc(res.user.uid).set({
          id: res.user.uid,
          img: "",
          name: "設定されていません",
          email: "設定されていません",
          introduce: "設定されていません",
          followerCount: 0,
          createAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      })
      .catch(() => {
        alert("失敗しました。。。");
      });
  };


  // ログアウト処理
  const logout = () => {
    auth.signOut().then(() => {
      if (isLogin == false) {
        return;
      }
      alert("ログアウトしました");
      router.push("/Login");
      setIsLogin(false);
    });
  };



  // 全ユーザーのitem(ワンちゃん)の取得してトップ画面に表示する
  const getItems = () => {
    let newItem = [];
    db.collectionGroup("items")
      .orderBy("createAt", "desc")
      .get()
      .then((snapshot) => {
        // item一つ一つの情報を取得
        snapshot.forEach((doc) => {
          newItem.push({
            userId: doc.data().userId,
            id: doc.data().id,
            title: doc.data().title,
            img: doc.data().img,
            category: doc.data().category,
            age: doc.data().age,
            sex: doc.data().sex,
            content: doc.data().content,
            likeCount: doc.data().likeCount,
          });
        });
        // itemに全て入れている
        setItems(newItem);
      });
  };

  //自分のアカウント情報の取得
  const getMyUser = () => {
    let newUser = [];
    db.collection("users")
      .where("id", "==", uid)
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          newUser.push({
            // ユーザーのid情報
            id: doc.data().id,
            // ユーザーのアイコン
            img: doc.data().img,
            // ユーザーの名前
            name: doc.data().name,
            // ユーザーのemail
            email: doc.data().email,
            // ユーザーの自己紹介文
            introduce: doc.data().introduce,
          });
        });

        setMyUser(newUser);
      });
  };

  //   自分がいいねしたitemの取得
  const getMyLikedItems = () => {
    let newItems = [];
    db.collection("users")
      .doc(uid)
      .collection("likedItems")
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
        setMyLikedItems(newItems);
      });
  };

  return (
    // グローバルで管理
    <Context.Provider
      value={{
        onClickTop,
        getMyLikedItems,
        anonymouslyLogin,
        googleLogin,
        emailLogin,
        createEmailUser,
        getItems,
        getMyUser,
        logout,
        uid,
        email,
        setEmail,
        password,
        setPassword,
        newEmail,
        setNewEmail,
        newPassword,
        setNewPassword,
        items,
        setItems,
        myUser,

        isLogin,
        setIsLogin,

        myItems,
        setMyItems,
        myLikedItems,
        setMyLikedItems,
        myFollowUser,
        setMyFollowUser,
        searchItems,
        setSearchItems,
        category_dog,
        sort_dog,
        sex_dog,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
