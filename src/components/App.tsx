import React from "react";
import { Router } from "react-router-dom";
import { Header } from "./header/Header";
import history from "./navigator/history";
import Navigator from "./navigator/Navigator";

const App: React.FC = () => {
  return (
    <>
      <Router history={history}>
        <Header />
        <Navigator />
      </Router>
    </>
  );
};

export default App;
