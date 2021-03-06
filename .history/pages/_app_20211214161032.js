import Head from "next/head";
import Link from "next/link";
import ContextProvider from "../components/Context";
import "../styles/globals.css";

import Styles from "../styles/Home.module.css";

// material-ui
import HomeIcon from "@material-ui/icons/Home";
import PetsIcon from "@material-ui/icons/Pets";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import PersonIcon from "@material-ui/icons/Person";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Tooltip from "@material-ui/core/Tooltip";

//header
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Head>
        <meta charSet="utf-8" />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=yes"
        />
      </Head>
      <header>
        <AppBar position="static" style={{display:"flex",justifyContent:"space-between",width:"1"}}>
          <Toolbar>
         
            <Typography variant="h6">MyPets!</Typography>
          <Switch inputProps={{ "aria-label": "controlled" }} />
          </Toolbar>
        </AppBar>
      </header>

      <Component {...pageProps} />
      <footer
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          marginTop: "50px",
        }}
      >
        <div>
          <BottomNavigation
            sx={{ width: "100%" }}
            onChange={() => handleChange(e)}
            style={{
              background: "#f4f4f4",
            }}
          >
            <Link href="/Top">
              <Tooltip title="γγΌγ " arrow>
                <BottomNavigationAction
                  label="γγΌγ "
                  value="Home"
                  icon={<HomeIcon />}
                />
              </Tooltip>
            </Link>

            <Link href="/menu/alert">
              <Tooltip title="ιη₯" arrow>
                <BottomNavigationAction
                  label="γη₯γγ"
                  value="alert"
                  icon={<NotificationsActiveIcon />}
                />
              </Tooltip>
            </Link>

            <Link href="/menu/createItem">
              <Tooltip title="ιθ¦ͺγειγγ" arrow>
                <BottomNavigationAction
                  label="ιθ¦ͺγειγγ"
                  value="pets"
                  icon={<PetsIcon />}
                  className={Styles.petsIcon}
                />
              </Tooltip>
            </Link>

            <Link href="/menu/[mypage]" as={`/menu/myPage`}>
              <Tooltip title="γγ€γγΌγΈ" arrow>
                <BottomNavigationAction
                  label="γγ€γγΌγΈ"
                  value="mypage"
                  icon={<PersonIcon />}
                />
              </Tooltip>
            </Link>
          </BottomNavigation>
        </div>
      </footer>
    </ContextProvider>
  );
}

export default MyApp;
