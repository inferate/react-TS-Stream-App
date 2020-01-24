import React, { MouseEvent } from "react";
import styled from "styled-components";
import { GooglePlus } from "styled-icons/boxicons-logos/GooglePlus";
import { Plus } from "styled-icons/boxicons-regular/Plus";
import { defaultIconSize } from "../../models/enums/EHeadings";

export interface IDefaultButtonProps {
  primary?: boolean;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  title?: string;
  icon?: boolean;
}

export const GoogleIcon = styled<any>(GooglePlus)`
  color: white;
  padding-bottom: 2px;
  margin-right: 5px;
`;

export const Submit = styled<any>(Plus)`
  color: white;
  padding-bottom: 2px;
  margin-right: 5px;
`;

export const ButtonContainer = styled.button<IDefaultButtonProps>`
  min-width: 100px;
  mаx-width: 112px;
  cursor: pointer;
  color: white;
  border-radius: 4px 12px 4px 12px;
  background: ${props =>
    props.primary ? props.theme.buttonStyles.auth : props.theme.icons.main};
  :focus {
    outline: 0;
  }
`;

export const CustomButton: React.FC<IDefaultButtonProps> = ({
  primary,
  onClick,
  title,
  icon
}) => (
  <ButtonContainer onClick={onClick} primary={primary}>
    {icon ? (
      <GoogleIcon size={defaultIconSize} />
    ) : (
      <Submit size={defaultIconSize} />
    )}
    {title}
  </ButtonContainer>
);
