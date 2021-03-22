import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import infoReducer from './info/reducer';
import errorReducer from './error/reducer';
import { getTokens, setAuthToken } from "../utils/tokens";

const { applyMiddleware, combineReducers, createStore } = require("redux");

const reducer = combineReducers({
  info: infoReducer,
  error: errorReducer
});

export default () => {
  // const { accessToken } = getTokens();
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  // if (accessToken) {
  //   setAuthToken(accessToken);
  // }

  return store;
};
