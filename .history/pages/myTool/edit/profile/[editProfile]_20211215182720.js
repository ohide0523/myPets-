import React,{useState,useEffect} from 'react'
import Styles from "../../../../styles/Home.module.css"



// firebase関連
import firebase from "@firebase/app";
import "@firebase/storage";


import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 240,
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
    textarea: {
      width: "80%",
      marginBottom: "30px",
    },
    button: {
      width: "80%",
    },
  }));


const editProfile = () => {
    const classes = useStatle

    const [editImg,setEditImg] = useState("")
    const [editName,setEditName] = useState("")
    const [editEmail,setEditEmail] = useState("")
    const [editIntroduce,setEditIntroduce] = useState("")

    return (
        <div style={{paddingTop:50}}>
            <h1>プロフィール編集</h1>
            <div className={Styles.create_item_page_container}>
      <h1>編集ページ</h1>
      <div style={{ textAlign: "center" }}>
        <img
          src={editImg}
          style={{ width: "90%", height: "90%" ,borderRadius:20}}
          alt="ワンちゃんの写真"
        />
      </div>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="icon-button-file"
        type="file"
        onChange={uploadPhoto}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>

      <TextField
        id="standard-basic"
        label="名前を入力してください"
        variant="standard"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
        style={{ m: 1, width: "80%" }}
      />

   

      <TextField
        value={editIntroduce}
        onChange={(e) => setEditIntroduce(e.target.value)}
        multiline
        rows={5}
        defaultValue="Default Value"
        variant="outlined"
        className={classes.textarea}
        placeholder="内容を入力してください"
      />

      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={edit_profile}
        className={classes.button}
      >
        編集を確定する
      </Button>
    </div>
        </div>
    )
}

export default editProfile
