import React from "react";

// material-ui関連
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const profile = () => {
  return (
    <div style={{ paddingTop: "40px" }}>
      <h1>Myページ</h1>
      {myUser.length > 0 && myUser.map((user)=>(

      <Avatar alt="アバター画像" src={item.img} className={classes.avatar} />
      ))}

    </div>
  );
};

export default profile;
