// Listing 4.6 Testing with modular injection
const {
  verifyPassword,
  injectDependencies,
  resetDependencies,
} = require("../password-verifier-logger02-modular-injection");

describe("password verifier", () => {
  // reset dependencies after each test
  afterEach(resetDependencies);

  describe("given logger and passing scenario", () => {
    it("calls the logger with PASS", () => {
      // state to check if mock was called
      let logged = "";
      // mock
      const mockLog = { info: (text) => (logged = text) };
      // module injection
      injectDependencies({ log: mockLog });
      // NOTE: notice, that injection was not done
      // through function or constructor, but
      // through method/API from module
      verifyPassword("anything", []);

      expect(logged).toMatch(/PASSED/);
    });
  });
});
