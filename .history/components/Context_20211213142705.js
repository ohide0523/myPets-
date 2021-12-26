import React, { createContext, useState, useEffect } from "react";
import { auth, db, googleProvider } from "./firebase";


export const Context = createContext();

const ContextProvider = ({children}) => {

const googleLogin =()=>{
    auth.signInWithPopup(googleProvider)
    .then((res) => {
        alert("ログインしました！")
}car\tc

  return <Context.Provider>{children}</Context.Provider>;
};

export default ContextProvider;
