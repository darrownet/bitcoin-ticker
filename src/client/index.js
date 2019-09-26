import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { reducer } from "./core/reducers/reducer";
import {AppContainer} from "react-hot-loader";
import App from "./components/app.jsx";

const monkeyPatch = true;
const rootEl = document.getElementById('root');

const generateStore = () => {
  return createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

ReactDOM.render(
  <AppContainer>
    <App store={generateStore()}/>
  </AppContainer>, rootEl
);

if (!monkeyPatch && module.hot) {
  module.hot.accept('./components/app.jsx', () => {
    ReactDOM.render(
      <AppContainer>
        <App store={generateStore()}/>
      </AppContainer>, rootEl
    );
  });
}
