import React, { useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Context } from "../components/Context";


// // material-ui
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
    avatar:{
        width: 130,
        height: 130,
        margin: "auto",
        marginTop: "10px",
    },
    title: {
        position: "absolute",
        top: 140,
        left: 5,
        fontFamily: "Comic Sans MS",
    fontSize: "15px",
    width: "95%",
    background: "#CEF9DC",
    padding: 5,
    paddingLeft: 10,
    marginTop: 30,

    borderRadius: 30,
    }
})

const Top = () => {
const classes = useStyle
  const router = useRouter();
  const { uid, logout, items,getItems } = useContext(Context);

  useEffect(()=>{
      getItems()
  },[])


  return (
    <div>
      <h1>トップページ</h1>
      <button onClick={logout}>ログアウト</button>
      <br />
      <Link href="/myTool/createItem/createItem">
        <a>itemの作成へ</a>
      </Link>
      <br />
      <br />

      <div>
        <div>item一覧</div>
        <br/>
        {items.length > 0 &&
          items.map((item, index) => (
            <div key={index}>
                {/* <Link href="/[another]/anotherItem/[editItem]" as={`/${item.userId}/anotherItem/${item.id}`}>
              <div>{item.title}</div>
              </Link>
              <div>{item.id}</div> */}
                <Box
                    sx={{
                      margin: "auto",
                      display: "flex",
                      flexWrap: "wrap",
                      borderRadius: 10,
                      "& > :not(style)": {
                        m: 1,
                        width: 170,
                        height: 210,
                      },
                    }}
                  >
                    <Paper
                      elevation={5}
                      style={{
                        borderRadius: 10,
                        position: "relative",
                        background: "#F0F8FF",
                      }}
                    >
                      <Avatar
                        alt="アバター画像"
                        // src={item.img}
                        className={classes.avatar}
                      />

                      <h2 className={classes.title}> {item.title}</h2>
                      <div className={classes.likeCount}>
                        {/* likeCountのcss */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",

                            position: "absolute",

                            top: 135,
                            left: 5,
                            background: "#CEF9DC",
                            padding: "2px 10px 2px 7px",
                            borderRadius: 20,
                            opacity: 0.7,
                          }}
                        >
                          <FavoriteBorderIcon
                            style={{ paddingRight: 3 }}
                          ></FavoriteBorderIcon>
                          {item.likeCount}
                        </div>
                      </div>
                    </Paper>
                  </Box>

            </div>
          ))}
      </div>
    </div>
  );
};

export default Top;
