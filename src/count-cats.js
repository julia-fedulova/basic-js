const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;

  matrix.forEach((matrixItem) => {
    matrixItem.forEach((item) => {
      if(item === '^^') {
        count++;
      }
    });
  });
  
  return count;
};
