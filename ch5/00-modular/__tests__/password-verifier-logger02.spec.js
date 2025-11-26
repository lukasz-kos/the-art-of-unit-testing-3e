// Listing 5.2 Faking the module APIs directly with jest.mock()
// Faking modules
jest.mock("../configuration-service.js");
jest.mock("../complicated-logger.js");

const { stringMatching } = expect;
const { verifyPassword } = require("../password-verifier-logger02");
// Fake instances of the modules
const stubConfigModule = require("../configuration-service");
const mockLoggerModule = require("../complicated-logger");

describe("password verifier", () => {
  // reset module behavior between tests
  afterEach(jest.resetAllMocks);

  test("with info log level and no rules, it calls the logger with PASSED", () => {
    // configure a stub to return a fake info value
    stubConfigModule.getLogLevel.mockReturnValue("info");

    verifyPassword("anything", []);

    // asserting that the mock was called correctly
    expect(mockLoggerModule.info).toHaveBeenCalledWith(stringMatching(/PASS/));
  });

  test("with debug log level and no rules, it calls the logger with PASSED", () => {
    // changing the stub config
    stubConfigModule.getLogLevel.mockReturnValue("debug");
    verifyPassword("anything", []);
    // asserting on the mock logger as done previously
    expect(mockLoggerModule.debug).toHaveBeenCalledWith(stringMatching(/PASS/));
  });
});
