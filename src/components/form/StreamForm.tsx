import React, { Component } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { formValidation } from "../../helpers/formValidation";
import { buttonTitle, EForm, titles } from "../../models/enums/EHeadings";
import { IFormActionsState } from "../../models/IFormActions";
import { CustomButton } from "../../styled/buttons/AuthButton";
import { FieldWrapper } from "../../styled/form/MainForm";
import { FormInput } from "../form/FormInput";

class StreamForm extends Component<any & InjectedFormProps> {
  onSubmit = (formValues: IFormActionsState) => {
    this.props.onSubmit(formValues);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <FieldWrapper>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name={EForm.title}
            label={titles.eTitle}
            component={FormInput}
          />
          <Field
            name={EForm.desciption}
            label={titles.eDesc}
            component={FormInput}
          />
          <CustomButton title={buttonTitle.Submit} primary />
        </form>
      </FieldWrapper>
    );
  }
}
export default reduxForm<{}>({
  form: EForm.createStreamForm,
  validate: formValidation
})(StreamForm);
