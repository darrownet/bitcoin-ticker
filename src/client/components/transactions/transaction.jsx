import React from "react";
import PropTypes from "prop-types";
import calculateFee from "../../core/services/calculate-fee.service";
import timeConverter from "../../core/services/time.service";
import TransactionSide from "./transaction-side";

const Transaction = ({data}) => {
  console.log(data);
  return(
    <li className="transaction">
      <h2>hash: <span className="deemphasize">{data.hash}</span></h2>
      <div className="time"><span className="emphasize">time:</span> {timeConverter(data.time * 1000)}</div>
      <div className="inputs-outputs">
        <div className="inputs">
          <h3>Inputs</h3>
          <ul>
            {data.inputs.map((input, idx) => {
              if (input.prev_out.addr) {
                return(<TransactionSide key={idx} data={input} type="input" />);
              }
            })}
          </ul>
        </div>
        <div className="triangle"> </div>
        <div className="outputs">
          <h3>Outputs</h3>
          <ul>
            {data.out.map((output, idx) => {
              if (output.addr) {
                return (<TransactionSide data={output} key={idx} type="output"/>);
              }
            })}
          </ul>
        </div>
      </div>
      <div className="mining-fee">
        <span className="emphasize">mining fee:</span> {calculateFee(data)}
      </div>
    </li>
  );
};

Transaction.propTypes = {
  data: PropTypes.object.isRequired
};

export default Transaction;
  