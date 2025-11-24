// Listing 4.12 Injecting a mock logger as a constructor parameter
const {
  PasswordVerifier,
} = require("../password-verifier-logger04-OOP-duck-typing");

// Fake, because that could be used as stub or mock
class FakeLogger {
  logged = "";
  info(text) {
    this.logged = text;
  }
}

describe("duck typing with function constructor injection", () => {
  describe("password verifier", () => {
    // example with value object as mock
    test("logger&passing scenario,calls logger with PASSED", () => {
      // state to check if mock was called
      let logged = "";
      // mock
      const mockLog = { info: (text) => (logged = text) };
      const verifier = new PasswordVerifier([], mockLog);

      verifier.verify("any input");

      expect(logged).toMatch(/PASSED/);
    });

    // example with class object as mock
    test("logger + passing scenario, calls logger with PASSED", () => {
      // state to check if mock was called
      let logged = "";
      // mock
      const mockLog = new FakeLogger();
      const verifier = new PasswordVerifier([], mockLog);

      verifier.verify("any input");

      expect(mockLog.logged).toMatch(/PASSED/);
    });
  });
});
