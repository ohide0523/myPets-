import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Context } from "../components/Context";

const login = () => {
  const { googleLogin, logout } = useContext(Context);
  const router = useRouter();
  const { uid,email,setEmail,password,setPassword } = useContext(Context);

  const onClickTop = () => {
    if (uid) {
      router.push("/Top");
    } else {
      alert("ログインしてください。。");
    }
  };



  return (
    <div>
      <h1>ログインページ</h1>
      <button onClick={googleLogin}>Googleログイン</button>
      <button onClick={logout}>ログアウト</button>
      <div>emailログインはこch</div>

      <div onClick={onClickTop}>トップページへ</div>
    </div>
  );
};

export default login;
