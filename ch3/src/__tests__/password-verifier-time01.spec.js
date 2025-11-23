const { Verifier } = require("../password-verifier-time01");
const { SUNDAY } = require("../password-verifier-time00");

// Listing 3.9 Using a constructor function
test("constructor function: on weekends, throws exception", () => {
  const alwaysSunday = () => SUNDAY;
  const verifier = new Verifier([], alwaysSunday);
  expect(() => verifier.verify("anything")).toThrow("It's the weekend!");
});
