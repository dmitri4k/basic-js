const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let b = str.split('')
  let acc = 1
  let res = b.map(function(letter, index, array) {
      if (array[index] == array[index+1]) {
        acc++
      } else if (acc != 1){
        let a = acc
        acc = 1
        return a + letter
      } else {
        return letter
      }
    }).join('')
  return res
}

module.exports = {
  encodeLine
};
