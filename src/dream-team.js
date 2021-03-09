const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members === "undefined" || (!Array.isArray(members)) || members.length === 0) {
    return false;
  }

  let teamName = [];

  members.forEach((item) => {
    if(typeof(item) === "string") {
      str = item.trim();
      teamName.push(str[0].toUpperCase());
    }
  });

  return teamName.sort().join("");
};
