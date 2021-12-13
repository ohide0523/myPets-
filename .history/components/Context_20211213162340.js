import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth, db, googleProvider } from "./firebase";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [uid, setUid] = useState(null);
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [newPassword,setNewPassword] = useState("")
  const [newEmail, setNewEmail] = useState("");



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
  const createEmailUser = () => {
    auth.createUserWithEmailAndPassword(newEmail, newPassword).then(() => {
      alert("アカウントを作成しました！");
      setNewEmail("");
      setNewPassword("");
    }).catch(()=>{
        alert("失敗しました。。。")
    })
  };

  const logout = () => {
    auth.signOut().then(() => {
      alert("ログアウトしました");
      router.push("/Login");
    });
  };


// itemの追加
const addItem = async()=>{
    const data = await db.collection("users")
      .doc(uid)
      .collection("items")
      .doc()
      .set({
        userId: uid,
        title: title,
        img: itemURL,
        category: category,
        age: age,
        sex: sex,
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
        likeCount: 0,
      })

}

  return (
    <Context.Provider
      value={{
        googleLogin,
        emailLogin,
        createEmailUser,
        あっd
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
