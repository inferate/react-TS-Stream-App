import React from "react";
import { connect } from "react-redux";
import { titles } from "../../models/enums/EHeadings";
import { IFormActionsState } from "../../models/IFormActions";
import { createStreamAction } from "../../store/actions/actions";
import { ListHeading } from "../../styled/list/ListContainer";
import StreamForm from "../form/StreamForm";
interface ICreateStreamProps {
  createStreamAction: (param: IFormActionsState) => void;
}

const CreateStream: React.FC<ICreateStreamProps> = ({ createStreamAction }) => {
  const onSubmit = (formValues: any) => {
    createStreamAction(formValues);
  };
  return (
    <>
      <ListHeading>{titles.lTitle}</ListHeading>
      <StreamForm onSubmit={onSubmit} />
    </>
  );
};

export default connect(null, { createStreamAction })(CreateStream);
