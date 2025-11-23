// Listing 3.10 Class constructor injection (function as parameter)
const { SATURDAY, SUNDAY } = require("./password-verifier-time00");

class PasswordVerifier {
  constructor(rules, dayOfWeekFn) {
    this.rules = rules;
    this.dayOfWeek = dayOfWeekFn;
  }
  verify(input) {
    if ([SATURDAY, SUNDAY].includes(this.dayOfWeek())) {
      throw new Error("It's the weekend!");
    }
    const errors = [];
    //more code goes here..
    return errors;
  }
}

module.exports = {
  PasswordVerifier,
};
