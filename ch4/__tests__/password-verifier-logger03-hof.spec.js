// Listing 4.10 Testing using a factory function
const { makeVerifier } = require("../password-verifier-logger03-hof");

describe("higher order factory functions", () => {
  describe("password verifier", () => {
    test("given logger and passing scenario", () => {
      // state to check if mock was called
      let logged = "";
      // mock
      const mockLog = { info: (text) => (logged = text) };
      // calling factory function (setup context)
      const passVerify = makeVerifier([], mockLog);

      // calling resulting function (actual input to check)
      passVerify("any input");

      expect(logged).toMatch(/PASSED/);
    });
  });
});
