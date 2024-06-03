const snakeize = require('snakeize');

const getFormattedColumnNames = (object) => Object.keys(snakeize(object)).join(', ');

const getFormattedPlaceholders = (object) => Object.keys(object).map(() => '?').join(', ');

module.exports = {
  getFormattedColumnNames,
  getFormattedPlaceholders,
};
