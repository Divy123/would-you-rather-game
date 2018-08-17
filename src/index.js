import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import getUsers from "./reducers/getUsers";
import saveLoggedUser from "./reducers/saveLoggedUser";
import getQuestions from "./reducers/getQuestions";
import saveAnswerState from './reducers/saveAnswerState';
import addRoute from './reducers/addRoute';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    getUsers,
    saveLoggedUser,
    getQuestions,
    saveAnswerState,
    addRoute
  }),
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
