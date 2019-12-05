import React from "react";
import styled from "styled-components";
import { GooglePlus } from "styled-icons/boxicons-logos/GooglePlus";
interface IDefaultButtonProps {
  primary: any;
  title?: string;
  onClick: () => void;
}

interface IDefaultButtonText {
  title?: string;
}

const GoogleIcon = styled(GooglePlus)`
  color: white;
  padding-bottom: 2px;
  margin-right: 5px;
`;
const ButtonContainer = styled.button<IDefaultButtonProps>`
  width: 40%;
  min-width: 100px;
  color: white;
  border-radius: 4px 12px 4px 12px;
  background: ${props =>
    props.primary ? props.theme.buttonStyles.auth : props.theme.icons.main};
`;

export const CustomButton: React.FC<IDefaultButtonProps> = ({
  primary,
  title,
  onClick
}) => (
  <ButtonContainer onClick={onClick} primary={primary}>
    <GoogleIcon size="24" />
    {title}
  </ButtonContainer>
);
