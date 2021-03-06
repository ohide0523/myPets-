import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import { db } from "../components/firebase";

import { Context } from "../components/Context";
import Search_answer from "./search_answer";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
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

  const [searchItems, setSearchItems] = useState([]);
  const { isSearch, setIsSearch } = useContext(Context);

  const handleSearch = () => {
    if (category == "" || sort == "") {
      alert("?????????????????????????????????");
      return;
    }

    if (category && sort == "????????????") {
      let newItem = [];
      console.log(category);
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
        });
      setIsSearch(false);
    router.push("/Search_answer")
      return;
    }

    if (category && sort == "newItem") {
      let newItem = [];
      console.log(category);
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
            });
          });
          setSearchItems(newItem);
        });
      setIsSearch(false);
      router.push("/Search_answer")
      return;
    }
  };

  return (
    <>
  
        <div className={classes.root}>
          <h1>??????????????????</h1>
          <FormControl className={classes.formControl}>
            <InputLabel>???????????????</InputLabel>
            <Select
              native
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              input={<Input id="demo-dialog-native" />}
            >
              <option aria-label="None" value="" />
              <option value={"??????"}>??????</option>
              <option value="????????????">????????????</option>
              <option value={"???????????????????????????????????????"}>
                ???????????????????????????????????????
              </option>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel>????????????</InputLabel>
            <Select
              native
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              input={<Input id="demo-dialog-native" />}
            >
              <option aria-label="None" value="" />
              <option value={"????????????"}>????????????</option>
              <option value={"newItem"}>???????????????????????????</option>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            className={classes.Button}
            onClick={handleSearch}
          >
            ?????????????????????
          </Button>
        </div>
    
        <Search_answer searchItems={searchItems} />
      )}
    </>
  );
};

export default Search;
