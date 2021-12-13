import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Context } from "../components/Context";

const login = () => {
  const router = useRouter();
  const { uid,email,setEmail,password,setPassword,emailLogin,googleLogin } = useContext(Context);

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
      <div>emailログインはこちら</div>
      <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
      <button onClick={emailLogin}>emailログする</button>

      <div>emailアカウント作成はこちら</div>
      <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
      <button>emailアカウント作成する</button>

      <div onClick={onClickTop}>トップページへ</div>
    </div>
  );
};

export default login;
