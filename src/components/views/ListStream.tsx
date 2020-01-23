import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  buttonTitle,
  defaultIconSize,
  titles
} from "../../models/enums/EHeadings";
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
  ListLink,
  ListWrapper
} from "../../styled/list/ListContainer";
import { Loader } from "../loader/Loader";

type TListStreamProps = ReturnType<typeof mapStateToProps & any>;
interface IListStreamProps {
  fetchStreamsAction: () => void;
  streams: IFormActionsState[];
  isSignedIn: any;
}

class ListStream extends Component<IListStreamProps & TListStreamProps> {
  componentDidMount() {
    this.props.fetchStreamsAction();
  }

  renderContent = () => {
    const { streams, error } = this.props;
    const isEmpty = Object.entries(streams).length === 0;
    if (error) {
      return <ListHeading>{error}</ListHeading>;
    } else if (!error && isEmpty) {
      return <Loader />;
    } else {
      return this.renderListStreams();
    }
  };

  renderAdminButtons = (stream: IFormActionsState) => {
    return (
      <ListButtonContainer>
        <Link to={`/streams/edit/${stream.id}`}>
          <ListActionButton title={buttonTitle.Edit} />
        </Link>
        <Link to={`streams/delete/${stream.id}`}>
          <ListActionButton title={buttonTitle.Delete} icon />
        </Link>
      </ListButtonContainer>
    );
  };
  renderCreateButton = () => {
    const { isSignedIn } = this.props;
    if (isSignedIn) {
      return (
        <ListCreateContainer>
          <Link to="/streams/new">
            <ListCreateButton title={buttonTitle.Create} icon />
          </Link>
        </ListCreateContainer>
      );
    }
    return null;
  };

  renderListStreams = () => {
    const { streams, currentUserId } = this.props;
    const streamItems = streams.map((stream: IFormActionsState) => {
      return (
        <div key={stream.id}>
          <ListContainer>
            <ListWrapper>
              <ListIcon crossOrigin size={defaultIconSize} />
              <ListLink to={`streams/${stream.id}`}>
                <ListItemEven>{stream.title}</ListItemEven>
              </ListLink>
              <ListItemOdd>{stream.description}</ListItemOdd>
            </ListWrapper>
          </ListContainer>
          {stream.userId === currentUserId &&
            currentUserId &&
            this.renderAdminButtons(stream)}
        </div>
      );
    });
    return streamItems;
  };
  render() {
    return (
      <>
        <ListHeading>{titles.sHeading}</ListHeading>
        {this.renderContent()}
        {this.renderCreateButton()}
      </>
    );
  }
}
const mapStateToProps = (state: RootAppState) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    error: state.err
  };
};

export default connect(mapStateToProps, { fetchStreamsAction })(ListStream);
