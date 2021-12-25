import React from "react";

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


const search = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "auto",
          marginTop: 100,
        }}
      >
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
            <option value={"柴犬"}>柴犬</option>
            <option value={"シーズー"}>シーズー</option>
            <option value={"オーストラリアンシェパード"}>
              オーストラリアンシェパード
            </option>
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
            <option value={""}>おまかせ</option>
            <option value={"newItem"}>新しく追加された順</option>
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
    </div>
  );
};

export default search;
