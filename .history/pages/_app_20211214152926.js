import ContextProvider from "../components/Context";
import "../styles/globals.css";

// material-ui


function MyApp({ Component, pageProps }) {
  return(
  <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
  )
}

export default MyApp;
