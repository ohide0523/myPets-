
import React, { useEffect, useContext } from "react";
import Link from "next/link"
import { useRouter } from "next/router";
import { Context } from "../components/Context";

const Top = () => {
  const router = useRouter();
  const { uid,logout,items } = useContext(Context);


  return (
    <div>
      <h1>トップページ</h1>
      <button onClick={logout}>ログアウト</button>
      <br/>
      <Link href="/myTool/createItem/createItem">
          <a>itemの作成へ</a>
      </Link>
      <br/>
      <div>
          {items.length>0 && items}
      </div>
    </div>
  );
};

export default Top;