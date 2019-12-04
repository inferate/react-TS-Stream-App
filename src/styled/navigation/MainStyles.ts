import { Link } from "react-router-dom";
import styled from "styled-components";
// const window = Dimensions.get("window");

interface IStylesNav {}

export const PositionedLink = styled(Link)<IStylesNav>`
  text-decoration: none;
`;

export const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(97, 58, 97, 1);
  display: flex;
  border-radius: 3px;
  box-shadow: 27px 24px 26px -6px rgba(97, 58, 97, 1);
`;

export const NavHeader = styled.div`
  padding: 26px 20px;
  width: 100%;
  display: flex;
  max-width:1200px
  align-items: center;
  justify-content:space-between
  @media (max-width: 762px) {
    flex-direction:column
    align-items:flex-start
   
  }
`;
export const NavLeft = styled.div`
flex:1
  text-align: left;
`;
export const NavCenter = styled.div`
  flex:1
  text-align: center;
  @media (max-width: 762px) {
  
    padding :15px
`;
export const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;

  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`;

export const NavRight = styled.div`
  flex: 1;
  text-align: right;
`;
