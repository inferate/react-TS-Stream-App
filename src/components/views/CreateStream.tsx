import React, { Component } from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { EForm } from "../../models/types/actionTypes";
interface IPRops {
  test: string;
}
interface State {}

class CreateStream extends Component<InjectedFormProps, {}> {
  renderField = (formProps: InjectedFormProps) => {
    return <input onChange={() => {}} />;
  };

  onContextMenu = (e: any) => {
    e.preventDefault();
    console.log("peshi", e.nativeEvent.offsetX === 2);
    console.log(e.nativeEvent.offsetY === 2);
    // e.persist();
    console.log(e.nativeEvent.offsetX);
  };

  render() {
    return (
      <textarea onContextMenu={this.onContextMenu}>
        {/* <Field name={EForm.title} component={this.renderField} />
        <Field name={EForm.desciption} component={this.renderField} /> */}
      </textarea>
    );
  }
}

export default reduxForm({
  form: EForm.streamCreate
})(CreateStream);
