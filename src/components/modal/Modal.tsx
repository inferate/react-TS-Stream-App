import React from "react";
import ReactDom from "react-dom";
import { modalRoot } from "../../models/globals/globals";
import {
  ActionWrapper,
  ModalContent,
  ModalHeading,
  ModalV,
  Wrapper
} from "../../styled/modal/Modal";

export interface IModal {
  title?: string;
  description?: string;
  actions?: JSX.Element;
  onDismiss: any;
}
const Modal: React.FC<IModal> = props => {
  return ReactDom.createPortal(
    <ModalV onClick={props.onDismiss}>
      <Wrapper onClick={e => e.stopPropagation()}>
        <ModalHeading>{props.title}</ModalHeading>
        <ModalContent>{props.description}</ModalContent>
        <ActionWrapper>{props.actions}</ActionWrapper>
      </Wrapper>
    </ModalV>,
    modalRoot
  );
};
export default Modal;
