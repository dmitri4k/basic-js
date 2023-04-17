const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = n
    .toString()
    .split('')
    .map(item => parseInt(item))

  let length = arr.length

  let sum = parseInt(arr.reduce((sum, digit) => sum + digit, 0))
  return (length == 1) ? sum : getSumOfDigits(sum)
}

module.exports = {
  getSumOfDigits
};
