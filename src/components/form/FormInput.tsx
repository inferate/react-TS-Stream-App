import React from "react";
import {
  ErrorMessage,
  FormContainer,
  FormInputField
} from "../../styled/form/MainForm";

interface IFormContainerProps {
  input: HTMLInputElement;
  label: HTMLLabelElement;
}

export const FormInput: React.FC<IFormContainerProps> = (field: any) => (
  <FormContainer>
    <label>{field.label}</label>
    <FormInputField {...field.input} />
    {field.meta.touched && <ErrorMessage>{field.meta.error}</ErrorMessage>}
  </FormContainer>
);
