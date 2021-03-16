const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        count = Math.max(count, this.calculateDepth(arr[i]));
      }
      return count + 1;
    }
    else return 0;
  }
};
