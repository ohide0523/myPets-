import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import { db } from "../components/firebase";

import { Context } from "../components/Context";
import Search_answer from "./search_answer";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(7),
    },
  },
  Button: {
    margin: theme.spacing(4),
    width: "80%",
    [theme.breakpoints.up("md")]: {
      margin: "auto",
      padding: 10,
      marginTop: theme.spacing(6),
    },
  },
  pets_icon: {
    marginTop: 14,
    [theme.breakpoints.up("sm")]: {
      marginTop: 40,
    },
  },
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: "auto",
    marginBottom: 0,
    marginTop: 100,

    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",

      width: "40%",
      margin: "auto",
      marginTop: 100,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
  },
  searchIcon: {
    fontSize: 33,
    marginLeft: 30,
  },
  switchIcon: {},
}));

const Search = () => {
  const router = useRouter();
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const [isSearch, setIsSearch] = useState(false);

  //   const [searchItems, setSearchItems] = useState([]);
  const { setSearchItems,category_dog,sort_dog} = useContext(Context);

  const handleSearch = () => {
    if (category == "" || sort == "") {
      alert("条件が不足しています。");
      return;
    }

    if (category && sort == sort_dog.a) {
      let newItem = [];
     
      db.collectionGroup("items")
        .where("category", "==", category)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            newItem.push({
              userId: doc.data().userId,
              id: doc.data().id,
              title: doc.data().title,
              img: doc.data().img,
              category: doc.data().category,
              age: doc.data().age,
              sex: doc.data().sex,
              content: doc.data().content,
              likeCount: doc.data().likeCount,
            });
          });
          setSearchItems(newItem);
          setIsSearch(true);
        });

      <Search_answer isSearch={isSearch} />;
      router.push("/search_answer");
      return;
    }

    if (category && sort == sort_dog.b) {
      let newItem = [];
      db.collectionGroup("items")
        .where("category", "==", category)
        .orderBy("createAt", "desc")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            newItem.push({
              userId: doc.data().userId,
              id: doc.data().id,
              title: doc.data().title,
              img: doc.data().img,
              category: doc.data().category,
              age: doc.data().age,
              sex: doc.data().sex,
              content: doc.data().content,
              likeCount:doc.data().likeCount
            });
          });
          setSearchItems(newItem);
          setIsSearch(true);
        });
      router.push("/search_answer");
      return;
    }
  };



  return (
    <main>
      <div className={classes.root}>
        <h1>絞り込み検索</h1>
        <FormControl className={classes.formControl}>
          <InputLabel>カテゴリー</InputLabel>
          <Select
            native
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            input={<Input id="demo-dialog-native" />}
          >
            <option aria-label="None" value="" />
            <option value={category_dog.a}>
            {category_dog.a}
            </option>
            <option value={category_dog.b}>{category_dog.b}</option>
            <option value={category_dog.c}>{category_dog.c}</option>
            <option value={category_dog.d}>{category_dog.d}</option>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>並べ替え</InputLabel>
          <Select
            native
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            input={<Input id="demo-dialog-native" />}
          >
            <option aria-label="None" value="" />
            <option value={sort_dog.a}>{sort_dog.a}</option>
            <option value={sort_dog.b}>{sort_dog.b}</option>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className={classes.Button}
          onClick={handleSearch}
        >
          この条件で検索
        </Button>
      </div>
    </main>
  );
};

export default Search;
