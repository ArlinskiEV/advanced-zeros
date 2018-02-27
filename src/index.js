module.exports = function getZerosCount(number, base) {
  // your implementation

  function findMainNumber(num) {
    let i = 2;
    let pow = [];
    while (i <= num) {
      while (num % i !== 0) {
        i += 1;
      }
      while (num % i === 0) {
        pow[i] = !!pow[i]
        ? pow[i] + 1
        : 1;
        num /= i;
      }
    }

    return pow
      .map((item, index) => ({
        value: Math.pow(index, item),
        base: index,
        count: item,
      }))
      .filter((item) => item.value === item.value)
      .sort((a, b) => a.value - b.value);
  }
  
  return findMainNumber(base)
    .map((item) => {
      let temp = 1;
      let count = 0;
      while (temp < number) {
        temp *= item.base;
        count += Math.trunc(number / temp);
      }
      return Math.trunc(count / item.count)
    })
    .sort((a, b) => a - b)
    .shift();
}