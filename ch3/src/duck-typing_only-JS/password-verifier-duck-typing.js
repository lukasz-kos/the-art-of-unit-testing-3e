// Listing 3.12 Injecting object as parameter (aka duck typing)
// “If it walks like a duck and talks like a duck, it’s a duck”
// that could be done only in permissive languages like JS, Python or Ruby
const moment = require("moment");
const { SATURDAY, SUNDAY } = require("../password-verifier-time00");

// wrapper to abstract moment API
// (if API will change, you only need to adapt in one place)
const RealTimeProvider = () => {
  this.getDay = () => moment().day();
};

class PasswordVerifier {
  // injecting object as parameter
  constructor(rules, timeProvider) {
    this.rules = rules;
    this.timeProvider = timeProvider;
  }
  verify(input) {
    if ([SATURDAY, SUNDAY].includes(this.timeProvider.getDay())) {
      throw new Error("It's the weekend!");
    }
    const errors = [];
    //more code goes here..
    return errors;
  }
}

// factory that uses real dependency
const passwordVerifierFactory = (rules) => {
  return new PasswordVerifier(rules, new RealTimeProvider());
};

module.exports = {
  PasswordVerifier,
  passwordVerifierFactory,
};
