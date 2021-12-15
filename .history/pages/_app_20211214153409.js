import ContextProvider from "../components/Context";
import "../styles/globals.css";

// material-ui
import HomeIcon from "@material-ui/icons/Home";
import PetsIcon from "@material-ui/icons/Pets";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import PersonIcon from "@material-ui/icons/Person";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Tooltip from '@material-ui/core/Tooltip';

function MyApp({ Component, pageProps }) {
  return(
  <ContextProvider>
    <Component {...pageProps} />

  </ContextProvider>
  )
}

export default MyApp;
