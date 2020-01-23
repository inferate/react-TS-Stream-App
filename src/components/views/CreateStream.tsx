import React, { Component } from "react";
import { connect } from "react-redux";
import { InjectedFormProps } from "redux-form";
import { titles } from "../../models/enums/EHeadings";
import { IFormActionsState } from "../../models/IFormActions";
import { createStreamAction } from "../../store/actions/actions";
import { ListHeading } from "../../styled/list/ListContainer";
import StreamForm from "../form/StreamForm";
interface ICreateStreamProps {
  createStreamAction: (param: IFormActionsState) => void;
}

class CreateStream extends Component<InjectedFormProps & ICreateStreamProps> {
  onSubmit = (formValues: any) => {
    this.props.createStreamAction(formValues);
  };
  render() {
    return (
      <>
        <ListHeading>{titles.lTitle}</ListHeading>
        <StreamForm onSubmit={this.onSubmit} />
      </>
    );
  }
}

export default connect(null, { createStreamAction })(CreateStream);
