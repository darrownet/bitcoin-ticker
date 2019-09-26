import actions from '../action-creators';
import * as types from '../action-types';


describe('actions', () => {

  it('should create an action to update the received transactions', () => {
    const value = {};
    const expectedAction = {
      type: types.TRANSACTION_RECEIVED,
      value
    };
    expect(actions.transactionReceived(value)).toEqual(expectedAction)
  });

  it('should create an action to toggle the stream activity', () => {
    const expectedAction = {
      type: types.TOGGLE_STREAM
    };
    expect(actions.toggleStream()).toEqual(expectedAction)
  });

});
