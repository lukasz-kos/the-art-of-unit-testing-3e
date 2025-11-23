// Listing 3.2 Initial unit tests for verifyPassword.
// Non deterministic test. This is bad
const moment = require("moment");
const {
  verifyPassword,
  verifyPassword2,
  verifyPassword3,
  makeVerifier,
  SUNDAY,
  SATURDAY,
} = require("../password-verifier-time00");

describe("verifier", () => {
  const TODAY = moment().day();
  //test is always executed, but might not do anything
  test("on weekends, throws exceptions", () => {
    if ([SATURDAY, SUNDAY].includes(TODAY)) {
      expect(() => verifyPassword("anything", [])).toThrow("It's the weekend!");
    }
  });
  //test is not even executed on week days
  if ([SATURDAY, SUNDAY].includes(TODAY)) {
    test("on a weekend, throws an error", () => {
      expect(() => verifyPassword("anything", [])).toThrow("It's the weekend!");
    });
  }
});

// Listing 3.3 verifyPassword with a currentDay parameter (parameter injection, a dummy)
describe("verifier2 - dummy object", () => {
  test("on weekends, throws exceptions", () => {
    expect(() => verifyPassword2("anything", [], SUNDAY)).toThrow(
      "It's the weekend!"
    );
  });
});

// Listing 3.5 Testing with function injection
describe("verifier3 - dummy function", () => {
  test("on weekends, throws exceptions", () => {
    const alwaysSunday = () => SUNDAY; // function as parameter
    expect(() => verifyPassword3("anything", [], alwaysSunday)).toThrow(
      "It's the weekend!"
    );
  });
});

// Listing 3.6 Using a higher-order factory function
describe("verifier", () => {
  test("factory method: on weekends, throws exceptions", () => {
    const alwaysSunday = () => SUNDAY; // function as parameter
    const verifyPassword = makeVerifier([], alwaysSunday); // factory function (HOF) with function injection
    expect(() => verifyPassword("anything")).toThrow("It's the weekend!");
  });
});
