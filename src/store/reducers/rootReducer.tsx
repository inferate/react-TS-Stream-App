import { combineReducers, Reducer } from "redux";
import { reducer as formReducer } from "redux-form";
import { authReducer } from "./authReducer";
import { streamReducer } from "./streamReducer";

export const rootReducer: Reducer = combineReducers<Reducer>({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});

export type RootAppState = ReturnType<typeof rootReducer>;
