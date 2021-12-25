import React from 'react'

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
              onChange={e=>setCategory(e.target.value)}
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
              onChange={e=>setSort(e.target.value)}
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
    )
}

export default search
