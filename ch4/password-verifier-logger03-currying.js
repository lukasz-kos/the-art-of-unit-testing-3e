const _ = require("lodash");

// Listing 4.7 Applying currying to our function
const verifyPassword3 = _.curry((rules, logger, input) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => result === false);
  if (failed.length === 0) {
    logger.info("PASSED");
    return true;
  }
  logger.info("FAIL");
  return false;
});

module.exports = {
  verifyPassword3,
};
