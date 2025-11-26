// Listing 5.4 Using jest.fn() for simple function mocks
const { makeVerifier } = require("../password-verifier-logger03-hof");
const { stringMatching } = expect;

test("given logger and passing scenario", () => {
  // create mock using jest.fn()
  const mockLog = { info: jest.fn() };
  const verify = makeVerifier([], mockLog);
  verify("any input");
  expect(mockLog.info).toHaveBeenCalledWith(stringMatching(/PASS/));
});
