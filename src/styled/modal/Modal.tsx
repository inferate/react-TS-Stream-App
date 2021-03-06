import styled from "styled-components";
import { ListHeading } from "../../styled/list/ListContainer";

export const ModalV = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0000007d;
  color: black;
  text-align: center;
`;

export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  position: relative;
  height: 22%;
  margin: 0 auto;
  top: 12.2rem;
  z-index: 1050;
  width: 70%;
  background-color: #fefefe;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
`;

export const ModalHeading = styled(ListHeading)`
  margin: 17px;
  padding-top: 5px;
  text-align: left;
`;
export const ActionWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  width: 94%;
  @media (max-width: 580px) {
    justify-content: space-around;
  }
`;
export const DefButton = styled.div`
  width: 20%;
`;
export const ModalContent = styled.h4`
@media (max-width: 580px) {
  height: 12%
`;
