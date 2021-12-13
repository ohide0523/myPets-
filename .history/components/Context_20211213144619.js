import React, { createContext, useState, useEffect } from "react";
import {useRouter} from "next/router"
import { auth, db, googleProvider } from "./firebase";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [uid,setUid] = useState(null)
    const router = useRouter()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // 自分のアカウントのuidをstateで管理する
        setUid(user.uid);
      }else{
          router.push("/login")
      }
    });
  }, []);


//googleログイン
  const googleLogin = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
      // 初めてのユーザーなのか確認している。
      const firstLogin = res.additionalUserInfo.isNewUser;
      if (firstLogin) {
        alert("初めてのユーザーのログインを確認しました！");
      } else {
        alert("既存のユーザーログインを確認しました！");
      }
    });
    router.push("/Top")
  };

//emailログイン
const emailLogin =()=>{
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("ログインに成功しました！");
        setEmail("");
        setPassword("");
      })
      .catch(() => {
        alert("ログインに失敗しました。。");
      });
  };

  const logout =()=>{
    auth.signOut().then(() => {
        alert("ログアウトしました");

        setUid(null);
        router.push("/Login");
        // 全ユーザーのitemを空にする
        setItems([]);
        // 自分のitemの初期化
        setMyUserItems([]);
        // 自分がいいねしたitemの初期化
        setLikedItems([]);
        // 自分がフォローしたユーザーの初期化
        setFollowLists([]);
      });
  }




  return (
    <Context.Provider
      value={{
        googleLogin,
        uid,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
