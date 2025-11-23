// Listing 4.3 Handwritten mock object
const {
  verifyPassword2,
} = require("../password-verifier-logger01-parameter-injection");

describe("password verifier with logger", () => {
  describe("when all rules pass", () => {
    it("calls the logger with PASSED", () => {
      // state to check if mock was called
      let written = "";
      // mock
      const mockLog = {
        info: (text) => {
          written = text;
        },
      };

      // parameter injection
      verifyPassword2("anything", [], mockLog);

      expect(written).toMatch(/PASSED/);
    });
  });
});
