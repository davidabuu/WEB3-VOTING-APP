import "../styles/globals.css";
import React from "react";
import "antd/dist/antd.css";
function MyApp({ Component, pageProps }) {
  //  let persistor = persistStore(store)
  return <Component {...pageProps} />;
}
export default MyApp;
``