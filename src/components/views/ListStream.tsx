import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { buttonTitle, defaultIconSize } from "../../models/enums/EHeadings";
import { IFormActionsState } from "../../models/IFormActions";
import { fetchStreamsAction } from "../../store/actions/actions";
import { RootAppState } from "../../store/reducers/rootReducer";
import {
  ListActionButton,
  ListButtonContainer,
  ListCreateButton,
  ListCreateContainer
} from "../../styled/buttons/ActionButton";
import {
  ListContainer,
  ListHeading,
  ListIcon,
  ListItemEven,
  ListItemOdd,
  ListWrapper
} from "../../styled/list/ListContainer";

type TListStreamProps = ReturnType<typeof mapStateToProps & any>;
interface IAction {
  fetchStreamsAction: () => void;
  streams: IFormActionsState[];
  renterAdmin: any;
}

class ListStream extends Component<IAction & TListStreamProps> {
  componentDidMount() {
    this.props.fetchStreamsAction();
  }

  renderAdminButtons = () => {
    return (
      <ListButtonContainer>
        <Link to="/streams/edit">
          <ListActionButton onClick={() => {}} title={buttonTitle.Edit} />
        </Link>
        <Link to="/streams/delete">
          <ListActionButton
            onClick={() => {}}
            title={buttonTitle.Delete}
            icon
          />
        </Link>
      </ListButtonContainer>
    );
  };
  renderCreateButton = () => {
    return (
      <ListCreateContainer>
        <Link to="/streams/new">
          <ListCreateButton
            onClick={() => {}}
            title={buttonTitle.Create}
            icon
          />
        </Link>
      </ListCreateContainer>
    );
  };
  renderListStreams = () => {
    const { streams, currentUserId } = this.props;
    const streamItems = streams.map((stream: IFormActionsState) => {
      return (
        <div key={stream.id}>
          <ListContainer>
            <ListWrapper>
              <ListIcon size={defaultIconSize} />
              <ListItemEven>{stream.title}</ListItemEven>
              <ListItemOdd>{stream.description}</ListItemOdd>
            </ListWrapper>
          </ListContainer>
          {stream.userId === currentUserId &&
            currentUserId &&
            this.renderAdminButtons()}
        </div>
      );
    });
    return streamItems;
  };
  render() {
    return (
      <>
        <ListHeading>All Streams</ListHeading>
        <div>{this.renderListStreams()}</div>
        {this.props.isSignedIn ? this.renderCreateButton() : null}
      </>
    );
  }
}
const mapStateToProps = (state: RootAppState) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreamsAction })(ListStream);
