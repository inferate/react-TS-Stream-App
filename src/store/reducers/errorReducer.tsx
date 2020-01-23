import { EActionTypes } from "../../models/types/actionTypes";
import { IAddError, IRemoveError, IResetError } from "../actions";

type TErrorReducerAction = IAddError | IRemoveError | IResetError;

export const errorReducer = (state = null, action: TErrorReducerAction) => {
  switch (action.type) {
    case EActionTypes.ADD_ERROR:
      return action.message;
    case EActionTypes.RESET_ERROR_MESSAGE:
      return null;
    default:
      return state;
  }
};
