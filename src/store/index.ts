import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export type AppDispatch = typeof store.dispatch;
