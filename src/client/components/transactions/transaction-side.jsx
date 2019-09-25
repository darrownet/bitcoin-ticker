import React from "react";
import PropTypes from "prop-types";
import Transaction from "./transaction";

const TransactionSide = ({data, type}) => {
  const tx = (type === 'input' ? data.prev_out : data);
  return (
    <li className="transaction-side">
      <div><span className="emphasize">address:</span> {tx.addr}</div>
      <div><span className="emphasize">value:</span> {tx.value}</div>
    </li>
  );
};

TransactionSide.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default TransactionSide;
  