import { Action } from "redux";
import { EActionTypes } from "../../models/types/actionTypes";

export interface ITrackLoginAction extends Action {
  type: EActionTypes;
}
export interface ITrackStreams extends Action {
  type: EActionTypes;
}
