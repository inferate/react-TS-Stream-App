import { IFormActionsState } from "../../models/IFormActions";
import { EActionTypes } from "../../models/types/actionTypes";
import {
  ITrackErrors,
  ITrackLoginAction,
  ITrackStreams
} from "./IActionsTypes";

export interface IGetSignupAction extends ITrackLoginAction {
  type: EActionTypes.SIGN_IN;
  payload: string;
}

export interface IGetSignoutAction extends ITrackLoginAction {
  type: EActionTypes.SIGN_OUT;
}

export interface IGetStreamsAction extends ITrackStreams {
  type: EActionTypes.CREATE_STREAM;
  payload: IFormActionsState;
}

export interface IFetchStreams extends ITrackStreams {
  type: EActionTypes.FETCH_STREAMS;
  payload: IFormActionsState;
}

export interface IDeleteStreams extends ITrackStreams {
  type: EActionTypes.DELETE_STREAM;
  payload: number;
}

export interface IGetStream extends ITrackStreams {
  type: EActionTypes.GET_STREAM;
  payload: IFormActionsState;
}

export interface IGetEditStream extends ITrackStreams {
  type: EActionTypes.EDIT_STREAM;
  payload: IFormActionsState;
}

export interface IGetRenderError extends ITrackErrors {
  type: EActionTypes.RENDER_ERROR;
  payload?: string;
}
export interface IAddError extends ITrackErrors {
  message?: string;
  type: EActionTypes.ADD_ERROR;
  payload?: any;
}

export interface IRemoveError extends ITrackErrors {
  payload: any;
  type: EActionTypes.REMOVE_ERROR;
}
export interface IResetError extends ITrackErrors {
  payload: any;
  type: EActionTypes.RESET_ERROR_MESSAGE;
}
