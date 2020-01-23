import { combineReducers, Reducer } from "redux";
import { reducer as formReducer } from "redux-form";
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer";
import { streamReducer } from "./streamReducer";

export const rootReducer: Reducer = combineReducers<Reducer>({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
  err: errorReducer
});

export type RootAppState = ReturnType<typeof rootReducer>;
