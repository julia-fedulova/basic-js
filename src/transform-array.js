const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error();

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' && i === arr.length - 1) {
      continue;
    } else if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--discard-prev' && (i === 0 || arr[i - 2] === '--discard-next')) {
      continue;
    } else if (arr[i] === '--discard-prev') {
      newArr.pop();
    } else if (arr[i] === '--double-next' && i === arr.length - 1) {
      continue;
    } else if (arr[i] === '--double-next') {
      newArr.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev' && (i === 0 || arr[i - 2] === '--discard-next')) {
      continue;
    } else if (arr[i] === '--double-prev') {
      newArr.push(arr[i - 1]);
    } else {
      newArr.push(arr[i]);
    }
  };
  return newArr;
};
