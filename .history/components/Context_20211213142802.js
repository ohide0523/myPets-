import React, { createContext, useState, useEffect } from "react";
import { auth, db, googleProvider } from "./firebase";


export const Context = createContext();

const ContextProvider = ({children}) => {

const googleLogin =()=>{
    auth.signInWithPopup(googleProvider)
    .then((res) => {
        const firstLogin = res.additionalUserInfo.isNewUser;
        if(firs)
        alert("ログインしました！")
}

}

  return <Context.Provider>{children}</Context.Provider>;
};

export default ContextProvider;
