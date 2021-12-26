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
        router.push("/Login");
      });
  }




  return (
    <Context.Provider
      value={{
        googleLogin,
        logout,
        uid,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
