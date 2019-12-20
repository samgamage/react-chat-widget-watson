import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "theme-ui";
import store from "../src/store/store";
import CSSReset from "./components/CSSReset";
import Widget from "./components/Widget";
import * as serviceWorker from "./serviceWorker";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CSSReset />
      <Widget />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
