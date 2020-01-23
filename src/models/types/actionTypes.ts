import {
  IAddError,
  IDeleteStreams,
  IFetchStreams,
  IGetEditStream,
  IGetRenderError,
  IGetStream,
  IGetStreamsAction
} from "../../store/actions";

export enum EActionTypes {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
  CREATE_STREAM = "CREATE_STREAM",
  EDIT_STREAM = "EDIT_STREAM",
  FETCH_STREAMS = "FETCH_STREAMS",
  DELETE_STREAM = "DELETE_STREAM",
  GET_STREAM = "GET_STREAM",
  RENDER_ERROR = "RENDER_ERROR",
  ADD_ERROR = "ADD_ERROR",
  REMOVE_ERROR = "REMOVE_ERROR",
  RESET_ERROR_MESSAGE = "RESET_ERROR_MESSAGE"
}

export type ActionCreatorsStreams =
  | IFetchStreams
  | IGetStreamsAction
  | IDeleteStreams
  | IGetStream
  | IGetEditStream
  | IGetRenderError
  | IAddError;
