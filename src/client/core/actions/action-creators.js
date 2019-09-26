import * as types from "./action-types.js";

const actions = {

  transactionReceived: function (value) {
    return {
      type: types.TRANSACTION_RECEIVED,
      value
    }
  },

  toggleStream: function () {
    return {
      type: types.TOGGLE_STREAM
    }
  }

};

export default actions;
