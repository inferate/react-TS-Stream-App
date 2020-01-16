import { IFormActionsState } from "../../models/IFormActions";
import { EActionTypes } from "../../models/types/actionTypes";
import { ITrackLoginAction, ITrackStreams } from "./IActionsTypes";

export interface IGetSignupAction extends ITrackLoginAction {
  type: EActionTypes.SIGN_IN;
  payload: string;
}

export interface IGetSignoutAction extends ITrackLoginAction {
  type: EActionTypes.SIGN_OUT;
}

export interface IGetStreamsAction extends ITrackStreams {
  type: EActionTypes.CREATE_STREAM;
  payload: Array<IFormActionsState>;
}

export interface IFetchStreams extends ITrackStreams {
  type: EActionTypes.FETCH_STREAMS;
  payload: Array<IFormActionsState>;
}

export interface IDeleteStreams extends ITrackStreams {
  type: EActionTypes.DELETE_STREAM;
  payload: number;
}

export interface IGetStream extends ITrackStreams {
  type: EActionTypes.GET_STREAM;
  payload: Array<IFormActionsState>;
}

export interface IGetEditStream extends ITrackStreams {
  type: EActionTypes.EDIT_STREAM;
  payload: Array<IFormActionsState>;
}
