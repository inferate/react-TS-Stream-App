import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { formValidation } from "../../helpers/formValidation";
import { buttonTitle, EForm, ILabels } from "../../models/enums/EHeadings";
import { IFormActionsState } from "../../models/IFormActions";
import { createStreamAction } from "../../store/actions/actions";
import { CustomButton } from "../../styled/buttons/AuthButton";
import { FieldWrapper } from "../../styled/form/MainForm";
import { FormInput } from "../form/FormInput";

class CreateStream extends Component<InjectedFormProps & any> {
  onSubmit = (formValues: IFormActionsState) => {
    this.props.createStreamAction(formValues);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <FieldWrapper>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name={EForm.title}
            label={ILabels.eTitle}
            component={FormInput}
          />
          <Field
            name={EForm.desciption}
            label={ILabels.eDesc}
            component={FormInput}
          />
          <CustomButton onClick={() => {}} title={buttonTitle.Submit} primary />
        </form>
      </FieldWrapper>
    );
  }
}

const form = reduxForm<{}>({
  form: EForm.createStreamForm,
  validate: formValidation
})(CreateStream);
export default connect(null, { createStreamAction })(form);
