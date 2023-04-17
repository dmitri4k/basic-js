const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
  aabcc aaacd
  aacc  aaac
*/
function getCommonCharacterCount(s1, s2) {
  const result = {}
  const reference = [...s1]
  let str = s2

  for (const letter of reference) {
    if (str.includes(letter)) {
      if (!result[letter]) { result[letter] = 0; }
      result[letter]++
      str = str.replace(letter, "")
    }
  }

  let output = []
  output.push(`Strings have ${Object.values(result).reduce( (sum, val) => sum + val, 0)} common characters -`)
  let first = true
  
  for (const prop in result) {
    if (first) {first = false} 
    else {output.push(` and`)}
    output.push(` ${result[prop]} "${prop}"${(result[prop] > 1) ? 's' : ''}`)
  }
  output.push(`.`)
  console.log(output.join``)

  return Object.values(result).reduce( (sum, val) => sum + val, 0)
}

// Simple variant without text output;)
/*
function getCommonCharacterCount(s1, s2) {
  const result = []
  const reference = [...s1]
  let str = s2

  for (const letter of reference) {
    if (str.includes(letter)) {
      result.push(letter)
      str = str.replace(letter, "")
    }
  }
  return result.length
} */

module.exports = {
  getCommonCharacterCount
};
