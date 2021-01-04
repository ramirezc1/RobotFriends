import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { searchRobotsReducer, requestRobotsReducer } from "./store/reducers";

import "./index.css";
import App from "./containers/App";
import "tachyons";
import * as serviceWorker from "./serviceWorker";


const middlewares = [];
const logger = createLogger();
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

middlewares.push(thunkMiddleware);
const rootReducer = combineReducers({
  searchRobots: searchRobotsReducer,
  requestRobots: requestRobotsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export type RootState = ReturnType<typeof rootReducer>;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);

serviceWorker.register();
