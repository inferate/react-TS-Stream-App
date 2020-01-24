import flv from "flv.js";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { match } from "react-router-dom";
import { PERMISSION_MESSAGE } from "../../helpers/formValidation";
import { IFormActionsState } from "../../models/IFormActions";
import { getStreamAction } from "../../store/actions/actions";
import { RootAppState } from "../../store/reducers/rootReducer";
import { ListDesc, ListHeading } from "../../styled/list/ListContainer";
import { Loader } from "../loader/Loader";

interface Params {
  id: string;
}

interface IOwnProps {
  match: match<Params>;
}

interface IEditStreamProps {
  getStreamAction: (arg: any) => void;
  stream: IFormActionsState;
  currentUserId?: string;
}

const ShowStream: React.FC<IEditStreamProps & IOwnProps> = ({
  getStreamAction,
  currentUserId,
  stream,
  match
}) => {
  const [playerCreated, setPlayerCreated] = useState<any>(null);
  const videoRef = useRef<any>(null);

  useEffect(() => {
    getStreamAction(match.params.id);
  }, [getStreamAction, match]);

  useEffect(() => {
    if (playerCreated) {
      return () => {
        playerCreated?.destroy();
        setPlayerCreated(false);
      };
    }
  }, [playerCreated]);
  useEffect(() => {
    if (stream && !playerCreated) {
      const player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${stream.id}.flv`
      });
      setPlayerCreated(player);
      setTimeout(() => {
        player.attachMediaElement(videoRef.current);
        player.load();
      }, 500);
    }
  }, [stream, playerCreated]);

  if (!stream) {
    return <Loader />;
  } else if (stream.userId !== currentUserId && currentUserId) {
    return <ListHeading>{PERMISSION_MESSAGE}</ListHeading>;
  } else {
    return (
      <>
        <video ref={videoRef} style={{ width: "100%" }} controls />
        <ListHeading>{stream.title}</ListHeading>
        <ListDesc>{stream.description}</ListDesc>
      </>
    );
  }
};

const mapStateToProps = (state: RootAppState, ownProps: IOwnProps) => {
  const { id } = ownProps.match.params;
  return { stream: state.streams[id], currentUserId: state.auth.userId };
};
export default connect(mapStateToProps, { getStreamAction })(ShowStream);
