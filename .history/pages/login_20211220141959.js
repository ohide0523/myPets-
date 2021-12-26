import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Context } from "../components/Context";

const login = () => {
  const router = useRouter();
  const {
    uid,
    email,
    setEmail,
    password,
    setPassword,
    newEmail,
    setNewEmail,
    newPassword,
    setNewPassword,
    emailLogin,
    createEmailUser,
    googleLogin,
  } = useContext(Context);

  const onClickTop = () => {
    if (uid) {
      router.push("/Top");
    } else {
      alert("ログインしてください。。");
    }
  };
const anonymouslyLogin =()=>{
    auth
  .signInAnonymously()
  .then(() => {
    db.collection("users").doc().set({
      id: "",
      img: "",
      name: "テストユーザー",
      email: "設定されていません",
      introduce: "設定されていません",
    });
    alert("匿名ログインに成功しました！");
    setIsLogin(true)
  })
  .catch(() => {
    alert("失敗しました。。");
  });
}
  

  return (
    <div>
      <h1>ログインページ</h1>
      <button onClick={googleLogin}>Googleログイン</button>
      <div>emailログインはこちら</div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={emailLogin}>emailログインする</button>

      <div>emailアカウント作成はこちら</div>
      <input
        type="newEmail"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <input
        type="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={createEmailUser}>emailアカウント作成する</button>

      {/* ログインによってuidに値が入ることで、Topページに遷移できるようになる */}
      <div onClick={onClickTop}>トップページへ</div>
      <div>テストログインはこちら</div>
      <button onClick={anonymouslyLogin}>テストログイン</button>
    </div>
  );
};

export default login;
