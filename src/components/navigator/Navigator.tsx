import React from "react";
import { Route } from "react-router-dom";
import CreateStream from "../views/CreateStream";
import DeleteStream from "../views/DeleteStream";
import EditStream from "../views/EditStream";
import ListStream from "../views/ListStream";
import ShowStream from "../views/ShowStream";
interface InavigatorProps {}

const Navigator: React.FC<InavigatorProps> = props => {
  return (
    <>
      <Route path="/" exact component={ListStream} />
      <Route path="/streams/new" exact component={CreateStream} />
      <Route path="/streams/edit" exact component={EditStream} />
      <Route path="/streams/delete" exact component={DeleteStream} />
      <Route path="/streams/show" exact component={ShowStream} />
    </>
  );
};

export default Navigator;
