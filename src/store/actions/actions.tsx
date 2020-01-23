import { Dispatch } from "react";
import streamsApi from "../../api/streamsApi";
import history from "../../components/navigator/history";
import { IAuthState } from "../../models/IAuthState";
import { IFormActionsState } from "../../models/IFormActions";
import {
  ActionCreatorsStreams,
  EActionTypes
} from "../../models/types/actionTypes";

export const signInAction = (userId: IAuthState) => {
  return {
    type: EActionTypes.SIGN_IN,
    payload: userId
  };
};

export const signOutAction = () => {
  return {
    type: EActionTypes.SIGN_OUT
  };
};
/** Actions Creators */
export const createStreamAction = (formValues: IFormActionsState) => async (
  dispatch: Dispatch<ActionCreatorsStreams>,
  getState: any
) => {
  const { userId } = getState().auth;
  const res = await streamsApi.post("/streams", { ...formValues, userId });
  dispatch({ type: EActionTypes.CREATE_STREAM, payload: res.data });
  console.log(typeof res.data);
  history.push("/");
};

export const fetchStreamsAction = () => async (
  dispatch: Dispatch<ActionCreatorsStreams>
) => {
  const res = streamsApi.get("streams");
  await res.then(
    res => {
      dispatch({ type: EActionTypes.FETCH_STREAMS, payload: res.data });
    },
    err => {
      dispatch({ type: EActionTypes.ADD_ERROR, message: err.message });
    }
  );
};

export const getStreamAction = (id: number) => async (
  dispatch: Dispatch<ActionCreatorsStreams>
) => {
  const res = await streamsApi.get(`/streams/${id}`);
  dispatch({ type: EActionTypes.GET_STREAM, payload: res.data });
};

export const editStreamAction = (
  id: number,
  formValues: IFormActionsState
) => async (dispatch: Dispatch<ActionCreatorsStreams>) => {
  const res = await streamsApi.put(`/streams/${id}`, formValues);
  dispatch({ type: EActionTypes.EDIT_STREAM, payload: res.data });
  history.push("/");
};
export const deleteStreamAction = (id: number) => async (
  dispatch: Dispatch<ActionCreatorsStreams>
) => {
  await streamsApi.delete(`/streams/${id}`);
  dispatch({ type: EActionTypes.DELETE_STREAM, payload: id });
  history.push("/");
};
