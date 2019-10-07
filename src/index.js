module.exports = function multiply(first, second) {
  let result = BigInt(first)*BigInt(second);
  result = result.toString(10);
  
  return result;
}
