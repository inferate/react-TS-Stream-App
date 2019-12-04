import React from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Nav,
  NavCenter,
  NavHeader,
  NavLeft,
  NavRight,
  PositionedLink
} from "../../styled/";

interface Props {}

export const Header: React.FC<Props> = props => {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <Link to="/">Streamer</Link>
        </NavLeft>
        <NavCenter>
          <Input type="text" placeholder="Search" />
        </NavCenter>
        <NavRight>
          <PositionedLink to="/">All Streams</PositionedLink>
        </NavRight>
      </NavHeader>
    </Nav>
  );
};
