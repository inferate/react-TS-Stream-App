import { EActionTypes } from "../../models/types/actionTypes";
import { ITrackLoginAction } from "./IActionsTypes";

export interface IGetSignupAction extends ITrackLoginAction {
  type: EActionTypes.SIGN_IN;
  payload: string;
}

export interface IGetSignoutAction extends ITrackLoginAction {
  type: EActionTypes.SIGN_OUT;
}
