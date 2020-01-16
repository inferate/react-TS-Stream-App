import { Link } from "react-router-dom";
import styled from "styled-components";

export const PositionedLink = styled(Link)`
  text-decoration: none;
  align-self:center
  flex-grow:2;
  color: ${props => props.theme.textStyle.fourty};
`;

export const Nav = styled.div`
  text-align: center;
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
  @media (max-width: 762px) {
    padding :15px
    
`;
export const Input = styled.input`
  border:  1px solid #494949
  border-radius: 3px;
  padding: 7px 33px;
  font-weight: 300;
  text-align: center;
  background: #fcfcfc
  &:active,
  &:focus {
    text-align: left;
    border: solid 1px #613a61;
    color: #494949;
    border-radius: 50px;
    border-color: #d09262 !important;
    transition: all 0.3s ease 0s;
    outline: 0;
    ::-webkit-input-placeholder {
      color: transparent;
  };
 
  
`;

export const NavRight = styled.div`
  flex: 1;
  display: inline-flex;
  justify-content: space-between;
  @media (max-width: 762px) {
    text-align: left;
    flex-direction: column;
  }
`;
