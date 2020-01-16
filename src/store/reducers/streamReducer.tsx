import { AnyAction } from "redux";
import {
  ActionCreatorStreams,
  EActionTypes
} from "../../models/types/actionTypes";

type TStreamReducerAction = ActionCreatorStreams | AnyAction;

export const streamReducer = (state = {}, action: TStreamReducerAction) => {
  switch (action.type) {
    case EActionTypes.FETCH_STREAMS:
      return {
        ...state,
        ...action.payload.reduce(
          (obj: any, item: any) => ({
            ...obj,
            [item.id]: item
          }),
          {}
        )
      };
    case EActionTypes.CREATE_STREAM:
    case EActionTypes.EDIT_STREAM:
    case EActionTypes.GET_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EActionTypes.DELETE_STREAM:
      const newStream = { ...state } as any;
      delete newStream[action.payload.id];
      return newStream;
    default:
      return state;
  }
};
