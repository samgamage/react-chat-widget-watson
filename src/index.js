import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "theme-ui";
import store from "../src/store/store";
import Widget from "./components/Widget";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Widget />
    </Provider>
  </ThemeProvider>,
  document.getElementById("dfs-chat")
);
