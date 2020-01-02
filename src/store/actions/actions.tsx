import { IAuthState } from "../../models/IAuthState";
import { EActionTypes } from "../../models/types/actionTypes";

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
