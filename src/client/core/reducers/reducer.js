import * as types from "../actions/action-types";

let initialState = {
  streamActive: false,
  transactions: []
};

export function reducer(state = initialState, action){

  switch(action.type){

    case types.TRANSACTION_RECEIVED:
      return {
        ...state,
        transactions: [...state.transactions, action.value].reverse()
      };

    case types.TOGGLE_STREAM:
      return {
        ...state,
        streamActive: !state.streamActive
      };

    default:
      return state;
  }

}
