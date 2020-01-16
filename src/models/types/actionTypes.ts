import {
  IDeleteStreams,
  IFetchStreams,
  IGetEditStream,
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
  GET_STREAM = "GET_STREAM"
}

export type ActionCreatorStreams =
  | IFetchStreams
  | IGetStreamsAction
  | IDeleteStreams
  | IGetStream
  | IGetEditStream;
