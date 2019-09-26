import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import websocket from "../core/services/data.service"
import Transactions from "./transactions/transactions";
import StreamController from "./stream-controller/stream-controller";

let App;
App = ({store}) => {

  useEffect(() => {
    websocket.onopen = (evt) => {
      console.log('websocket connected...');
    };
    websocket.onclose = (evt) => {
      console.log('websocket close...');
    };
    websocket.onerror = (evt) => {
      console.log('websocket error...');
    };
  }, []);

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

App.propTypes = {};

export default App;
