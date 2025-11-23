// Listing 3.1 verifyPassword using time
const moment = require("moment");

const SUNDAY = 0,
  SATURDAY = 6;

const verifyPassword = (input, rules) => {
  const dayOfWeek = moment().day();
  if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
    throw Error("It's the weekend!");
  }
  //more code goes here...
  //return list of errors found..
  return [];
};

// Listing 3.3 verifyPassword with a currentDay parameter
const verifyPassword2 = (input, rules, currentDay) => {
  if ([SATURDAY, SUNDAY].includes(currentDay)) {
    throw Error("It's the weekend!");
  }
  //more code goes here...
  //return list of errors found..
  return [];
};

// Listing 3.4 Dependency injection with a function
const verifyPassword3 = (input, rules, getDayFn) => {
  const dayOfWeek = getDayFn();
  if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
    throw Error("It's the weekend!");
  }
  //more code goes here...
  //return list of errors found..
  return [];
};

// Listing 3.6 Using a higher-order factory function
const makeVerifier = (rules, dayOfWeekFn) => {
  return function (input) {
    // this factory returns a function
    if ([SATURDAY, SUNDAY].includes(dayOfWeekFn())) {
      throw new Error("It's the weekend!");
    }
    //more code goes here..
  };
};

module.exports = {
  verifyPassword,
  verifyPassword2,
  verifyPassword3,
  makeVerifier,
  SATURDAY,
  SUNDAY,
};
