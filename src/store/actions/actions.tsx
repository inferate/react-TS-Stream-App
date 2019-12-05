import { EActionTypes } from "../../models/types/actionTypes";

export const signInAction = () => {
  return {
    type: EActionTypes.SIGN_IN
  };
};

export const signOutAction = () => {
  return {
    type: EActionTypes.SIGN_OUT
  };
};
