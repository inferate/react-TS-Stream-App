import { Reducer } from "redux";
import { IAuthState, initialAuthState } from "../../models/IAuthState";
import { EActionTypes } from "../../models/types/actionTypes";
import { IGetSignoutAction, IGetSignupAction } from "../actions";
type TLoginReducerAction = IGetSignupAction | IGetSignoutAction;

export const authReducer: Reducer<IAuthState> = (
  state = initialAuthState,
  action: TLoginReducerAction
) => {
  switch (action.type) {
    case EActionTypes.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };

    case EActionTypes.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: "" };
    default:
      return state;
  }
};
