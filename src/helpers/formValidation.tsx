import { FormErrors } from "redux-form";
interface IValidationProps {
  title: string;
  description: string;
}

export const formValidation = (
  formValues: IValidationProps
): FormErrors<IValidationProps> => {
  const errors: FormErrors<IValidationProps> = {};
  if (!formValues.title) {
    errors.title = "Title is required";
  }
  if (!formValues.description) {
    errors.description = "Description is required";
  }
  return errors;
};

export const PERMISSION_MESSAGE =
  "You do not have the permission to edit this stream";
