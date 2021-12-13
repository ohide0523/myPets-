import React, { createContext, useState, useEffect } from "react";
import { auth, db, googleProvider } from "./firebase";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const googleLogin = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
    // 初めてのユーザーなのかk
      const firstLogin = res.additionalUserInfo.isNewUser;
      if (firstLogin) {
        alert("初めてのユーザーのログインを確認しました！");
      } else {
        alert("既存のユーザーログインを確認しました！");
      }
    });
  };

  return <Context.Provider
  value={{
      googleLogin,
  }}
  >{children}</Context.Provider>;
};

export default ContextProvider;
