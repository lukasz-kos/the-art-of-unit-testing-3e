// Listing 4.1 Depending directly on a complicated logger
// impossible to fake with traditional injection techniques
const log = require("./complicated-logger");

const verifyPassword = (input, rules) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => result === false);

  if (failed.count === 0) {
    // NOTE: impossible to test with traditional injection techniques
    // log doesn't provide API for checking if it was called or not
    log.info("PASSED"); // first exit point => calling a dependency
    // to test with traditional injection techniques
    return true; // second exit point => return value
  }
  log.info("FAIL");
  return false;
};

const info = (text) => {
  console.log(`INFO: ${text}`);
};

const debug = (text) => {
  console.log(`DEBUG: ${text}`);
};

module.exports = {
  verifyPassword,
  info,
  debug,
};
