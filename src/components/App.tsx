import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./header/Header";
import Navigator from "./navigator/Navigator";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navigator />
      </BrowserRouter>
    </>
  );
};

export default App;
