import React from "react";
import styled from "styled-components";
import { Minus } from "styled-icons/boxicons-regular/Minus";
import { MoreVert } from "styled-icons/material/MoreVert";
import { defaultIconSize } from "../../models/enums/EHeadings";
import {
  ButtonContainer,
  IDefaultButtonProps,
  Submit
} from "../buttons/AuthButton";

const Modify = styled<any>(MoreVert)`
  color: black;
  padding-bottom: 2px;
  margin-right: 5px;
  size:24px;cls
`;

const Delete = styled<any>(Minus)`
  padding-bottom: 2px;
  margin-right: 5px;
`;
const Create = styled<any>(Submit)`
  color: inherit;
`;
export const ListButtonContainer = styled.div`
  text-align: right;
  margin: 5px;
`;
export const ListCreateContainer = styled.div`
  text-align: center;
`;

const ListActionButtonContainer = styled(ButtonContainer)`
  color: #d09262
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.3);
  margin: 5px;
  padding: 5px;
  border: 2px solid #494949 !important;
  display: inline-block;
  transition: all 0.3s ease 0s;
  &:hover {
    color: #494949 ;
    border-radius: 50px;
    border-color: #d09262 !important;
    transition: all 0.3s ease 0s;
  }
  :focus {
    outline: 0;
  }
`;
const ListCreateActionButton = styled(ListActionButtonContainer)`
  min-width:120px;
  color: #494949
  border-radius: 4px 12px 4px 12px;
  &:hover{
      color:#d09262 
  }

`;
export const ListActionButton: React.FC<IDefaultButtonProps> = ({
  onClick,
  title,
  icon
}) => (
  <ListActionButtonContainer onClick={onClick}>
    {icon ? (
      <Delete size={defaultIconSize} />
    ) : (
      <Modify size={defaultIconSize} />
    )}
    {title}
  </ListActionButtonContainer>
);

export const ListCreateButton: React.FC<IDefaultButtonProps> = ({
  title,
  onClick,
  icon
}) => (
  <ListCreateActionButton onClick={onClick}>
    {icon ? (
      <Create size={defaultIconSize} />
    ) : (
      <Modify size={defaultIconSize} />
    )}
    {title}
  </ListCreateActionButton>
);
