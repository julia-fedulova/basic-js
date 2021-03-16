const CustomError = require("../extensions/custom-error");

let chain = [];

const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {
    chain.push("( " + value + " )");
    return chainMaker;
  },
  removeLink(position) {
    if(position < 0 || position > chainMaker.getLength() - 1)
    {
      chain = [];
      throw CustomError('Incorrect position');
    }
    chain.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let finalChain = chain.join('~~');
    chain = [];
    return finalChain;
  }
};

module.exports = chainMaker;
