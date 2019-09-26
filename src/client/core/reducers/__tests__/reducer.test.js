import {reducer} from '../reducer';
import * as types from "../../actions/action-types";

import {
  initialState,
  toggleStream,
  transactionReceived
} from '../../../../../configs/fixtures/test-reducer-fixtues/index';

describe('reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_STREAM', () => {
    expect(
      reducer(initialState, {
        type: types.TOGGLE_STREAM
      })
    ).toEqual(toggleStream);
  });

  it('should handle TRANSACTION_RECEIVED', () => {
    const value = {};
    expect(
      reducer(initialState, {
        type: types.TRANSACTION_RECEIVED,
        value
      })
    ).toEqual(transactionReceived);
  });

});
