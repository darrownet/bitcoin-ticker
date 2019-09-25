import React from "react";
import PropTypes from "prop-types";
import Transaction from "./transaction";

const TransactionSide = ({data, type}) => {
  const tx = (type === 'input' ? data.prev_out : data);
  return (
    <li>
      <div>address: {tx.addr}</div>
      <div>value: {tx.value}</div>
    </li>
  );
};

TransactionSide.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default TransactionSide;
  