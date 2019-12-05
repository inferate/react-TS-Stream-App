import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styled/navigation/MainStyles";
import { theme } from "../styled/theme/theme";
import { Header } from "./header/Header";
import CreateStream from "./views/CreateStream";
import DeleteStream from "./views/DeleteStream";
import EditStream from "./views/EditStream";
import ListStream from "./views/ListStream";
import ShowStream from "./views/ShowStream";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Route path="/" exact component={ListStream} />
            <Route path="/streams/new" exact component={CreateStream} />
            <Route path="/streams/edit" exact component={EditStream} />
            <Route path="/streams/delete" exact component={DeleteStream} />
            <Route path="/streams/show" exact component={ShowStream} />
          </ThemeProvider>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
