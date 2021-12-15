import ContextProvider from "../components/Context";
import "../styles/globals.css";

// material-ui
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import NotificationsActiveIcon from "@material-ui/NotificationsActive";
import PersonIcon from "@material-ui/icons/Person";
import BottomNavigation from "@material-ui/BottomNavigation";
import BottomNavigationAction from "@material-ui/BottomNavigationAction";
import Tooltip from '@material-ui/core/Tooltip';

function MyApp({ Component, pageProps }) {
  return(
  <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
  )
}

export default MyApp;
