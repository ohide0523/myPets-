import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth, db, googleProvider } from "./firebase";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [uid, setUid] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // 自分のアカウントのuidをstateで管理する
        setUid(user.uid);
      } else {
        router.push("/login");
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
    router.push("/Top");
  };

  //emailログイン
  const emailLogin = () => {
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
//   emailアカウントを作成する
const createEmailUser =()=>{
    auth.createUserWithEmailAndPassword(email, password).then((res) => {
        const user = res.user;
        db.collection("users").doc(user.uid).set({
          name: "emailユーザー",
          id: user.uid,
          email: "設定されていません",
          password: password,
          img: "設定されていません",
          imgID: "設定されていません",
          sex: "設定されていません",
          followerCount: 0,
          createAt: firebase.firestore.FieldValue.serverTimestamp(),
        },
       
        alert("アカウントを作成しました！");
       
        setEmail("");
        setPassword("");
      });
}

  const logout = () => {
    auth.signOut().then(() => {
      alert("ログアウトしました");
      router.push("/Login");
    });
  };

  return (
    <Context.Provider
      value={{
        googleLogin,
        emailLogin,
        logout,
        uid,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
