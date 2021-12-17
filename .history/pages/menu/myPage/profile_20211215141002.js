import React,{useState,useEffect,useContext} from "react";
import {db} from "../../../components/firebase"

// material-ui関連
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Context } from "../../../components/Context";

const profile = () => {
    const [myUser,setMyUser] = useState([])

    const {uid} = useContext(Context)
    useEffect(()=>{
        getMyUser()
    },[])

    const getMyUser=()=>{
        db.collection("users").doc(uid).onSnapshot((doc)=>{
            setMyUs
        })
    }
  return (
    <div style={{ paddingTop: "40px" }}>
      <h1>Myページ</h1>
      {myUser.length > 0 && myUser.map((user)=>(
          <Avatar alt="アバター画像" src={user.img} className={classes.avatar} />

      ))}

    </div>
  );
};

export default profile;
