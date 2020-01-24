import { Link } from "react-router-dom";
import styled from "styled-components";
import { VideoPlus } from "styled-icons/boxicons-regular/VideoPlus";

export const ListItemEven = styled.div`
  font-size: 1.2rem;
  display: inline-flex;
  cursor: pointer;
  color:#494949
  margin: 5px;
`;
export const ListItemOdd = styled(ListItemEven)`
  font-size: 0.8rem;
  color:#d09262
  cursor: default;
  border-bottom: 1px solid #d09262;
  display: flex;
  margin-left: 30px;
`;

export const ListContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 75px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;
  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }
`;

export const ListWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ListIcon = styled<any>(VideoPlus)`
  padding-bottom: 5px;
`;
export const ListHeading = styled.h2`
  display: flex;
  justify-content: center;
`;

export const ListStreamHead = styled.h2`
  margin-left: 3rem;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    display: flex;
    margin-left: 0;
    justify-content: center;
  }
`;
export const ListDesc = styled.h3`
  margin-left: 3rem;
`;
export const ListLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
