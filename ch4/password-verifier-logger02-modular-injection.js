// Listing 4.5 Refactoring to a modular injection pattern
// holding original dependencies
const originalDependencies = {
  log: require("./complicated-logger"),
  configs: require("./configuration-service"),
};

// layer of indirection
let dependencies = { ...originalDependencies };

// function that resets the dependencies
const resetDependencies = () => {
  dependencies = { ...originalDependencies };
};

// function that overrides the dependencies
const injectDependencies = (fakes) => {
  Object.assign(dependencies, fakes);
};

const log = (text) => {
  if (dependencies.configs.getLogLevel() === "info") {
    dependencies.log.info(text);
  }
  if (dependencies.configs.getLogLevel() === "debug") {
    dependencies.log.debug(text);
  }
};

const verifyPassword = (input, rules) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => result === false);

  if (failed.length === 0) {
    log("PASSED");
    return true;
  }
  log("FAIL");
  return false;
};

module.exports = {
  verifyPassword,
  injectDependencies,
  resetDependencies,
};
