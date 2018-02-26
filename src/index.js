module.exports = function getZerosCount(number, base) {
  // your implementation

  function findMainNumber(num) {
    let i = 2;
    let res = 1;
    while (i <= num) {
      while (num % i !== 0) {
        i += 1;
      }
      res = i;
      while (num % i === 0) {
        num /= i;
      }
    }
    return res;
  }

  let temp = 1;
  let baseZero = 0;
  let baseMain = findMainNumber(base);
  while (temp < number) {
    temp *= baseMain;
    baseZero += Math.trunc(number / temp);
  }

  return baseZero;
}