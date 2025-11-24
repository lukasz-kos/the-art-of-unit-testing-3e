// Listing 4.8 Testing a curried function with dependency injection
const { verifyPassword3 } = require("../password-verifier-logger03-currying");

describe("password verifier", () => {
  describe("given logger and passing scenario", () => {
    it("calls the logger with PASS", () => {
      // state to check if mock was called
      let logged = "";
      // mock
      const mockLog = { info: (text) => (logged = text) };
      const injectedVerify = verifyPassword3([], mockLog);
      // this partially applied function can be passed around
      // to other places in the code
      // without needing to inject the logger
      injectedVerify("anything");
      expect(logged).toMatch(/PASSED/);
    });
  });
});
