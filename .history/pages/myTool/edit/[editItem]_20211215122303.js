import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../../components/Context";
import { db } from "../../../components/firebase";

const editItem = () => {
const [editItemImg,setEditItemImg] = useState("")
  const [editTitle, setEditTitle] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editSex, setEditSex] = useState("");
  const [editContent, setEditContent] = useState("");

  const { uid } = useContext(Context);
  const router = useRouter();
  const { editItem } = router.query;

  useEffect(() => {
    if (uid && editItem) {
      getEditData();
    }
  }, [uid, editItem]);

  const getEditData = () => {
    db.collection("users")
      .doc(uid)
      .collection("items")
      .doc(editItem)
      .get()
      .then((doc) => {
        setEditItemImg(doc.data().Img)
        setEditTitle(doc.data().title);
        setEditCategory(doc.data().category);
        setEditAge(doc.data().age);
        setEditSex(doc.data().sex);
        setEditContent(doc.data().content);
      });
  };

  const edit_item = () => {
    db.collection("users")
      .doc(uid)
      .collection("items")
      .doc(editItem)
      .update({
        title: editTitle,
        // img: itemURL,
        category: editCategory,
        age: editAge,
        sex: editSex,
        content: editContent,
      })
      .then(() => {
        alert("編集をしました！");
        router.push("/Top");
      });
  };

  const delete_item = () => {
    db.collection("users")
      .doc(uid)
      .collection("items")
      .doc(editItem)
      .delete()
      .then(() => {
        alert("削除しました!");
        router.push("/Top");
      });
  };

  return (
    <div className={Styles.create_item_page_container}>
      <h1>募集ページ</h1>
      <div style={{ textAlign: "center" }}>
        {previewImg && (
          <img
            src={itemImg}
            style={{ width: "90%", height: "90%" }}
            onClick={onClickPhotoDelete}
          />
        )}
      </div>
      <input accept="image/*" style={{display:"none"}} id="icon-button-file" type="file" onChange={uploadPhoto}/>
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>

      <TextField
        id="standard-basic"
        label="名前を入力してください"
        variant="standard"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ m: 1, width: "80%" }}
      />

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          カテゴリー
        </InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
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
          value={sex}
          onChange={(e) => setSex(e.target.value)}
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
          value={age}
          onChange={(e) => setAge(e.target.value)}
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
        value={content}
        onChange={(e) => setContent(e.target.value)}
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
        onClick={addItem}
        className={classes.button}
      >
        募集を確定する
      </Button>
    </div>
  );
};

export default editItem;
