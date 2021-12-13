import React, { useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Context } from "../components/Context";

const Top = () => {
  const router = useRouter();
  const { uid, logout, items,getItems } = useContext(Context);

  useEffect(()=>{
      getItems()
  },[])

  const { uid,logout } = useContext(Context);



  return (
    <div>
      <h1>トップページ</h1>
      <button onClick={logout}>ログアウト</button>
      <br />
      <Link href="/myTool/createItem/createItem">
        <a>itemの作成へ</a>
      </Link>
      <br />
      <br />

      <div>
        <div>item一覧</div>
        <br/>
        {items.length > 0 &&
          items.map((item, index) => (
            <div key={index}>
                <Link href="/[another]/anotherItem/[editItem]" as={`/${item.userId}/anotherItem/${item.id}`}>
              <div>{item.title}</div>
              </Link>
              <div>{item.id}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Top;
