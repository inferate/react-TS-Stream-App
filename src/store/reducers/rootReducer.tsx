import { combineReducers, Reducer } from "redux";
import { authReducer } from "./authReducer";

export const rootReducer: Reducer = combineReducers<Reducer>({
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;
