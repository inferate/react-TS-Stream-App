import React from "react";
import {
  Nav,
  NavHeader,
  NavLeft,
  NavRight,
  PositionedLink
} from "../../styled/";
import Authentication from "../auth/Authentication";
interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = props => {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <PositionedLink to="/">Streamer</PositionedLink>
        </NavLeft>
        {/* <NavCenter>
          <Input placeholder={headings.search} />
        </NavCenter> */}
        <NavRight>
          <PositionedLink to="/">All Streams</PositionedLink>
          <Authentication />
        </NavRight>
      </NavHeader>
    </Nav>
  );
};
