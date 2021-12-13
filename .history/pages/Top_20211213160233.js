
import React, { useEffect, useContext } from "react";
import Link from "next/link"
import { useRouter } from "next/router";
import { Context } from "../components/Context";

const Top = () => {
  const router = useRouter();
  const { uid,logout } = useContext(Context);


  return (
    <div>
      <h1>トップページ</h1>
      <button onClick={logout}>ログアウト</button>
      <Link href="/createItem/createItem">
          <a>itemの作成へ</a>
      </Link>
    </div>
  );
};

export default Top;