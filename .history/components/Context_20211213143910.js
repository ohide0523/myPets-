import React, { createContext, useState, useEffect } from "react";
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
    router.push("/")
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
