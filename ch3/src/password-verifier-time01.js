// Listing 3.9 Using a constructor function
const { SATURDAY, SUNDAY } = require("./password-verifier-time00");

const Verifier = function (rules, dayOfWeekFn) {
  this.verify = function (input) {
    if ([SATURDAY, SUNDAY].includes(dayOfWeekFn())) {
      throw new Error("It's the weekend!");
    }
    //more code goes here..
  };
};

module.exports = {
  Verifier,
};
