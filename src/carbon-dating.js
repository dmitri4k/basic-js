const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string') return false
  let sample = parseFloat(sampleActivity)
  if (isNaN(sample)) {
    return false}
  else if ( 0 < sample && sample <= 15) {} 
  else {return false}

  let t = Math.log(MODERN_ACTIVITY / sample) * 
          HALF_LIFE_PERIOD / Math.LN2

  return Math.ceil(t)
}

module.exports = {
  dateSample
};
