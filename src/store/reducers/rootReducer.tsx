import { combineReducers, Reducer } from "redux";
import { reducer as formReducer } from "redux-form";
import { authReducer } from "./authReducer";

export const rootReducer: Reducer = combineReducers<Reducer>({
  auth: authReducer,
  form: formReducer
});

export type RootState = ReturnType<typeof rootReducer>;
