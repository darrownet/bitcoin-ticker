import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import actions from "../../core/actions/action-creators";
import websocket from "../../core/services/data.service";
import Transaction from "./transaction";

const Transactions = ({transactions, transactionReceived}) => {

  useEffect(() => {
    websocket.onmessage = (evt) => {
      console.log('websocket message...');
      console.log(JSON.parse(evt.data));
      transactionReceived(JSON.parse(evt.data));
    };
  });

  return(
    <ul className="transactions">
      {transactions.map((tx, idx) => {
        return(
          <Transaction data={tx.x} key={idx} />
        );
      })}
    </ul>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
  transactionReceived: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    transactionReceived: (value) => {dispatch(actions.transactionReceived(value))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
  