import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../components/Context";

const Top = () => {
  const router = useRouter();
  const { uid,logout } = useContext(Context);

//   useEffect(() => {
//     if (!uid) {
//       router.push("/login");
//     }
//   }, [uid]);

  return (
    <div>
      <h1>トップページ</h1>
      <button onClick={logout}>ログアウト</button>

    </div>
  );
};

export default Top;
