import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth, db, googleProvider } from "./firebase";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [uid, setUid] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState([]);

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


  useEffect(() => {
    setItems(newItems);
   
  }, [newItems]);

  //googleログイン
  const googleLogin = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
      // 初めてのユーザーなのか確認している。
      const firstLogin = res.additionalUserInfo.isNewUser;
      if (firstLogin) {
        alert("初めてのユーザーのログインを確認しました！");
        db.collection("users").doc(uid).set({
            id:uid,
            img:"",
            name:"設定されていません",
            email:"設定されていません",
            introduce:"設定されていません",
        })
      } else {
        alert("既存のユーザーログインを確認しました！");
        db.collection("users").doc(uid).set({
            id:uid,
            img:"",
            name:"設定されていません",
            email:"設定されていません",
            introduce:"設定されていません",
        })
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
    auth
      .createUserWithEmailAndPassword(newEmail, newPassword)
      .then(() => {
        alert("アカウントを作成しました！");
        setNewEmail("");
        setNewPassword("");
        db.collection("users").doc(uid).set({
            id:uid,
            img:"",
            name:"設定されていません",
            email:"設定されていません",
            introduce:"設定されていません",
        })
      })
      .catch(() => {
        alert("失敗しました。。。");
      });
  };

  const logout = () => {
    auth.signOut().then(() => {
      alert("ログアウトしました");
      router.push("/Login");
    });
  };

  // itemの取得
  const getItems = () => {
    
    let newItems =[]
    db.collectionGroup("items").onSnapshot(() => {
        db.collectionGroup("items").get().then((snapshot)=>{
            snapshot
        })
    //   snapshot.forEach((doc) => {
       
    //    newItems.push({
    //        userId:doc.data().userId,
    //        id:doc.data().id,
    //        title:doc.data().title,
    //        img: doc.data().img,
    //        category: doc.data().category,
    //        age: doc.data().age,
    //        sex: doc.data().sex,
    //        content:doc.data().content
    //    })
    });
    setItems(newItems)
})
  };

  return (
    <Context.Provider
      value={{
        googleLogin,
        emailLogin,
        createEmailUser,
        getItems,
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
        setNewItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
