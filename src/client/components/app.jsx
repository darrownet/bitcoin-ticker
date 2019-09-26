import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import Transactions from "./transactions/transactions";
import StreamController from "./stream-controller/stream-controller";

let App;
App = ({store}) => {
  return (
    <Provider store={store}>
      <div className="bitcoin-ticker">
        <h1>BitCoin BlockChain Ticker</h1>
        <StreamController/>
        <Transactions/>
      </div>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
