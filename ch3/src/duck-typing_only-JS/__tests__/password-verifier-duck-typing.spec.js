// Listing 3.13 Creating a handwritten stub object
const { SUNDAY } = require("../../password-verifier-time00");
const { PasswordVerifier } = require("../password-verifier-duck-typing");

function FakeTimeProvider(fakeDay) {
  this.getDay = function () {
    return fakeDay;
  };
}

describe("verifier", () => {
  test("on weekends, throws exception", () => {
    // duck typing => object as parameter
    // in TS it will not work
    const verifier = new PasswordVerifier([], new FakeTimeProvider(SUNDAY));
    expect(() => verifier.verify("anything")).toThrow("It's the weekend!");
  });
});
