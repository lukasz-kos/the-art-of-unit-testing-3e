// Listing 3.7 Abstracting the required dependencies
// wrapper for moment
const originalDependencies = {
  moment: require("moment"),
};

// var containing original or fake
let dependencies = { ...originalDependencies };

// function for injecting fakes
const inject = (fakes) => {
  Object.assign(dependencies, fakes);
  // this resets dependency back to original
  return function reset() {
    dependencies = { ...originalDependencies };
  };
};

const SUNDAY = 0,
  SATURDAY = 6;

const verifyPassword = (input, rules) => {
  const dayOfWeek = dependencies.moment().day();
  if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
    throw Error("It's the weekend!");
  }
  // more code goes here...
  // return list of errors found..
  return [];
};

module.exports = { verifyPassword, SATURDAY, inject };
