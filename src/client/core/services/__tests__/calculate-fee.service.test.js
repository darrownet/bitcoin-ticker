import calculateFee from "../calculate-fee.service";

describe('calculate fee service', () => {

  it('should properly calculate the miner fee', () => {
    const transaction = {
      inputs: [{prev_out: {value: 11}}, {prev_out: {value: 11}}, {prev_out: {value: 11}}, {prev_out: {value: 10}}, {prev_out: {value: 10}}],
      out: [{value: 8}, {value: 8}, {value: 8}, {value: 9}, {value: 9}]
    };
    const fee = 11;
    expect(calculateFee(transaction)).toEqual(fee);
  });

});