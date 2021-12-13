import React, { createContext, useState, useEffect } from "react";
import {useRouter} from "next/rp"
import { auth, db, googleProvider } from "./firebase";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [uid,setUid] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // 自分のアカウントのuidをstateで管理する
        setUid(user.uid);
      }
    });
  }, []);

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
