import React, { useEffect } from "react";
import { connect } from "react-redux";
import { match } from "react-router-dom";
import { buttonTitle, headings, titles } from "../../models/enums/EHeadings";
import {
  deleteStreamAction,
  getStreamAction
} from "../../store/actions/actions";
import { RootAppState } from "../../store/reducers/rootReducer";
import { ListCreateButton } from "../../styled/buttons/ActionButton";
import { ListHeading } from "../../styled/list/ListContainer";
import Modal from "../modal/Modal";
import history from "../navigator/history";

interface IDeleteStream {
  match: match<Params>;
  getStreamAction: (param: Params | any) => void;
  deleteStreamAction: (param: Params | any) => void;
}

interface Params {
  id: string;
}
const DeleteStream: React.FC<IDeleteStream> = props => {
  const { getStreamAction, deleteStreamAction } = props;
  const { id } = props.match.params;
  console.log(props);

  useEffect(() => {
    getStreamAction(id);
  }, [id, getStreamAction]);

  const renderActionButtons = (
    <>
      <ListCreateButton
        title={buttonTitle.Ok}
        onClick={() => deleteStreamAction(id)}
      />
      <ListCreateButton
        title={buttonTitle.Cancel}
        onClick={() => history.push("/")}
      />
    </>
  );
  return (
    <ListHeading>
      <Modal
        onDismiss={() => history.push("/")}
        title={titles.mTitle}
        description={headings.modal}
        actions={renderActionButtons}
      />
    </ListHeading>
  );
};
const mapStateToProps = (state: RootAppState, ownProps: IDeleteStream) => {
  const { id } = ownProps.match.params;
  return { stream: state.streams[id] };
};
export default connect(mapStateToProps, {
  getStreamAction,
  deleteStreamAction
})(DeleteStream);
