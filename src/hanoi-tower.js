const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let turnsToSolve = Math.pow(2, disksNumber) -  1;
  let secondsToSolve = Math.floor(turnsToSolve / (turnsSpeed / 3600));

  return {
    turns: turnsToSolve,
    seconds: secondsToSolve,
  };
};
