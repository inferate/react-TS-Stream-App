import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;
interface IStylesNav {}

export const PositionedLink = styled(Link)<IStylesNav>`
  text-decoration: none;
  color: ${props => props.theme.textStyle.fourty};
`;

export const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #613a61;
  display: flex;
  border-radius: 3px;
  box-shadow: 27px 24px 26px -6px #613a61;
`;

export const NavHeader = styled.div`
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:space-between
  @media (max-width: 762px) {
    flex-direction:column
    align-items:flex-start
    
   
  }
`;
export const NavLeft = styled.div`
  flex: 1;
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
  border: solid 1px #613a61;
  border-radius: 3px;
  padding: 7px 33px;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fcfcfc
  &:active,
  &:focus {
    text-align: left;
    border: solid 1px #613a61;
  }
`;

export const NavRight = styled.div`
  flex: 1;
  text-align: right;
  @media (max-width: 762px) {
    text-align: left;
  }
`;
