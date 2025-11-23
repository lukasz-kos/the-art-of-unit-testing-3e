const {
  SATURDAY,
  inject,
  verifyPassword,
} = require("../password-verifier-modular");

// Listing 3.8 Injecting a fake module with inject()
// helper function
const injectDate = (newDay) => {
  return inject({
    moment: function () {
      return {
        day: () => newDay,
      };
    },
  });
};

describe("verifyPassword", () => {
  describe("when its the weekend", () => {
    it("throws an error", () => {
      const reset = injectDate(SATURDAY);

      expect(() => verifyPassword("any input")).toThrow("It's the weekend!");

      reset();
    });
  });
});
