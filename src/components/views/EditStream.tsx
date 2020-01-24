import React, { useEffect } from "react";
import { connect } from "react-redux";
import { match } from "react-router-dom";
import { PERMISSION_MESSAGE } from "../../helpers/formValidation";
import { titles } from "../../models/enums/EHeadings";
import { IFormActionsState } from "../../models/IFormActions";
import { editStreamAction, getStreamAction } from "../../store/actions/actions";
import { RootAppState } from "../../store/reducers/rootReducer";
import { ListHeading } from "../../styled/list/ListContainer";
import StreamForm from "../form/StreamForm";
import { Loader } from "../loader/Loader";

interface Params {
  id: string;
}

interface IOwnProps {
  match: match<Params>;
}

interface IEditStreamProps {
  getStreamAction: (arg: Params | any) => void;
  stream: IFormActionsState;
  editStreamAction: (args: any, argV: any) => void;
  currentUserId: string;
}

const EditStream: React.FC<IEditStreamProps & IOwnProps> = ({
  getStreamAction,
  editStreamAction,
  currentUserId,
  stream,
  match
}) => {
  const { id } = match.params;
  const { ...initialValues } = stream;

  useEffect(() => {
    getStreamAction(id);
  }, [id, getStreamAction]);

  const onSubmit = (formValues: any) => {
    editStreamAction(id, formValues);
  };

  if (!stream) {
    return <Loader />;
  } else if (stream.userId !== currentUserId && currentUserId) {
    return <ListHeading>{PERMISSION_MESSAGE}</ListHeading>;
  } else {
    return (
      <>
        <ListHeading>{titles.sTitle}</ListHeading>
        <StreamForm initialValues={initialValues} onSubmit={onSubmit} />
      </>
    );
  }
};
const mapStateToProps = (state: RootAppState, ownProps: IOwnProps) => {
  const { id } = ownProps.match.params;
  return { stream: state.streams[id], currentUserId: state.auth.userId };
};
export default connect(mapStateToProps, { getStreamAction, editStreamAction })(
  EditStream
);
