import React from "react";
import PropTypes from "prop-types";
import timeConverter from "../../core/services/time.service";
import TransactionSide from "./transaction-side";

const Transaction = ({data}) => {
  return(
    <li>
      <h2>hash: {data.hash}</h2>
      <div>Time: {timeConverter(data.time * 1000)}</div>
      <div className="inputs-outputs">
        <div className="inputs">
          <h3>Inputs</h3>
          <ul>
            {data.inputs.map((input, idx) => {
              return(<TransactionSide key={idx} data={input} type="input" />);
            })}
          </ul>
        </div>
        <div className="outputs">
          <h3>Outputs</h3>
          <ul>
            {data.out.map((output, idx) => {
              return(<TransactionSide data={output} key={idx} type="output" />);
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};

Transaction.propTypes = {
  data: PropTypes.object.isRequired
};

export default Transaction;
  