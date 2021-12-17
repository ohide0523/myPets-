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


const editProfile = () => {

    co
    return (
        <div style={{paddingTop:50}}>
            <h1>プロフィール編集</h1>
            <div className={Styles.create_item_page_container}>
      <h1>編集ページ</h1>
      <div style={{ textAlign: "center" }}>
        <img
          src={editItemImg}
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
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        style={{ m: 1, width: "80%" }}
      />

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          カテゴリー
        </InputLabel>
        <Select
          value={editCategory}
          onChange={(e) => setEditCategory(e.target.value)}
        >
          <MenuItem value={"　オーストラリアンシェパード"}>
            オーストラリアンシェパード
          </MenuItem>
          <MenuItem value={"シーズー"}>シーズー</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">性別</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={editSex}
          onChange={(e) => setEditSex(e.target.value)}
        >
          <MenuItem value={"オス"}>オス</MenuItem>
          <MenuItem value={"メス"}>メス</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">年齢</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={editAge}
          onChange={(e) => setEditAge(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>

      <TextField
        value={editContent}
        onChange={(e) => setEditContent(e.target.value)}
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
        onClick={edit_item}
        className={classes.button}
      >
        編集を確定する
      </Button>
    </div>
        </div>
    )
}

export default editProfile
