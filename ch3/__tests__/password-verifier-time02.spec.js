const { PasswordVerifier } = require("../password-verifier-time02");
const { SUNDAY } = require("../password-verifier-time00");

const MONDAY = 1;
// Listing 3.10 Class constructor injection (function as parameter)
test("class constructor: on weekends, throws exception", () => {
  const alwaysSunday = () => SUNDAY;
  const verifier = new PasswordVerifier([], alwaysSunday);
  expect(() => verifier.verify("anything")).toThrow("It's the weekend!");
});

// Listing 3.11 Adding a helper factory function
describe("refactored with constructor", () => {
  // this factory make tests more maintainable
  // if constructor change => you change only one place in tests
  const makeVerifier = (rules, dayFn) => {
    // class constructor injection (function as parameter)
    return new PasswordVerifier(rules, dayFn);
  };
  test("class constructor: on weekends, throws exceptions", () => {
    const alwaysSunday = () => SUNDAY;
    const verifier = makeVerifier([], alwaysSunday);
    expect(() => verifier.verify("anything")).toThrow("It's the weekend!");
  });
  test("class constructor: on weekdays, with no rules, passes", () => {
    const alwaysMonday = () => MONDAY;
    const verifier = makeVerifier([], alwaysMonday);

    const result = verifier.verify("anything");

    expect(result.length).toBe(0);
  });
});
