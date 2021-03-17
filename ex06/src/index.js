function comparasiontoEqual(a) {
  if (a < 5) {
    return "Less than 5";
  }
  if (a < 10) {
    return "Less than 10";
  }
  if (a > 20) {
    return "More than 20";
  }
  if (a >= 10) {
    return "10 or over";
  }
}
comparasiontoEqual(0);
comparasiontoEqual(5);
comparasiontoEqual(17);
comparasiontoEqual(21);

console.log(comparasiontoEqual(0));
console.log(comparasiontoEqual(5));
console.log(comparasiontoEqual(17));
console.log(comparasiontoEqual(21));
module.exports = comparasiontoEqual;
