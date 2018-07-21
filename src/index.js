import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import listReducer from "./store/reducers/list";
import filterReducer from "./store/reducers/filter";
import notificationReducer from "./store/reducers/notification";

const rootReducer = combineReducers({
  list: listReducer,
  filter: filterReducer,
  notification: notificationReducer
});

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === undefined
      ? compose
      : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
