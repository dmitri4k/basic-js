const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  let res = n
    .toString()
    .split('')
    .map(item => item = parseInt(item))
    
  let min = res.reduce((min, val) => min < val ? min : val)

  for (let i = 0; i < res.length; i++) {
    if (res[i] < res[i+1]) {
      res.splice(i, 1)
      return parseInt(res.join(''))
      // break
    } 
  }

  res.splice(res.lastIndexOf(min), 1)
  return parseInt(res.join(''))
}

module.exports = {
  deleteDigit
};
