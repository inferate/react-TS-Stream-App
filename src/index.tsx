import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../src/store";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyles } from "./styled/navigation/MainStyles";
import { theme } from "./styled/theme/theme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
