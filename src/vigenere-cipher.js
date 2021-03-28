const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  encrypt(message, key) {
    let msg = message.toString().toUpperCase().split('');
    let keys = key.toUpperCase().split('');
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let i = 0;
    let arr;

    if (!this.direction) {
      msg = msg.reverse();
      keys = keys.reverse();
    }

    arr = msg.map((item) => {
      if (/^[\W\d]/.test(item)) {
        return item;
      }
      let result = alphabet[(item.charCodeAt(0) + keys[i].charCodeAt(0)) % 26];
      i++;
      if (i === key.length) i = 0;
      return result;
    });

    return arr.join('');
  }

  decrypt(message, key) {
    let msg = message.toString().toUpperCase().split('');
    let keys = key.toUpperCase().split('');
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let i = 0;
    let arr;

    if (!this.direction) {
      msg = msg.reverse();
      keys = keys.reverse();
    }

    arr = msg.map((item) => {
      if (/^[\W\d]/.test(item)) {
        return item;
      }
      let result = alphabet[(item.charCodeAt(0) + 26 - keys[i].charCodeAt(0)) % 26];
      i++;
      if (i === key.length) i = 0;
      return result;
    });

    return arr.join('');
  }
}

module.exports = VigenereCipheringMachine;
