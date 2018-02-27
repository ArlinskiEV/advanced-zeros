module.exports = function getZerosCount(number, base) {
  // your implementation

  // function line(count = 257, base = 16) {
  //   for (i = 0; i <= count; i++) {
  //     console.log(`${i}:${i.toString(base)}`);
  //   }
  // }

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
    console.log(pow.join(':'));// ----------------------------------------------------------------
    console.log("-----");// ----------------------------------------------------------------
    console.log(// ----------------------------------------------------------------
      pow
      // .map((item, index) => Math.pow(index, item))
      .map((item, index) => index)
      .filter((item) => !!item)
      .sort((a, b) => a - b)
    );
    return [
      pow
        // .map((item, index) => Math.pow(index, item))
        .map((item, index) => index)
        .filter((item) => !!item)
        .sort((a, b) => a - b)
        .pop(),
      0//note
    ];
  }

  let temp = 1;
  let baseZero = 0;
  let [baseMain, note] = findMainNumber(base);
  console.log(`baseMain = ${baseMain}`);// ----------------------------------------------------------------
  while (temp < number) {
    temp *= baseMain;
    baseZero += Math.trunc(number / temp);
  }

  return baseZero;
}