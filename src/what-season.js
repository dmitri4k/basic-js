const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!'
  } 
  else if (Object.getOwnPropertySymbols(date).length != 0 ) {
    throw new Error('Invalid date!')
  }
  else if (typeof date.getMonth === 'function') {
  }
  else {
    throw new Error('Invalid date!')
  }

  let month = date.getMonth() + 1

  if ( Math.floor( month / 3 ) == 0) return 'winter'
  else if ( Math.floor( month / 3 ) == 4 ) return 'winter'
  else if ( Math.floor( month / 3 ) == 1 ) return 'spring'
  else if ( Math.floor( month / 3 ) == 2 ) return 'summer'
  else if ( Math.floor( month / 3 ) == 3 ) return 'autumn'
}

module.exports = {
  getSeason
};
