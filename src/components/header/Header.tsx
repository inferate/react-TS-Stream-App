import React from "react";
import {
  Input,
  Nav,
  NavCenter,
  NavHeader,
  NavLeft,
  NavRight,
  PositionedLink
} from "../../styled/";
import Authentication from "../auth/Authentication";
interface Props {}

export const Header: React.FC<Props> = props => {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <PositionedLink to="/">Streamer</PositionedLink>
        </NavLeft>
        <NavCenter>
          <Input type="text" placeholder="Search" />
        </NavCenter>
        <NavRight>
          <Authentication />
          <PositionedLink to="/">All Streams</PositionedLink>
        </NavRight>
      </NavHeader>
    </Nav>
  );
};
