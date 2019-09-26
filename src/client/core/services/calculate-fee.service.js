export default function calculateFee(transaction) {
  const totInputs = transaction.inputs.reduce((coll, input) => {
    return coll + input.prev_out.value;
  }, 0);
  const totOutputs = transaction.out.reduce((coll, output) => {
    return coll + output.value;
  }, 0);
  return totInputs - totOutputs;
}