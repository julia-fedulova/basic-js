const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let finalStr = str;

  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';

  if (options.addition !== undefined && options.additionRepeatTimes !== undefined) {
    finalStr += (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
  }
  if((options.repeatTimes === undefined || options.additionRepeatTimes === undefined) && options.addition !== undefined) {
    finalStr += options.addition;
  }
  if(options.repeatTimes !== undefined) {
    finalStr = (finalStr + options.separator).repeat(options.repeatTimes - 1) + finalStr;
  }

  return finalStr;
};
