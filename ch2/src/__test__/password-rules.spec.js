const { oneUpperCaseRule } = require("../rules");

// Listing 2.20 Testing a rule with variations
describe("one uppercase rule", () => {
  test("given no uppercase, it fails", () => {
    const result = oneUpperCaseRule("abc");
    expect(result.passed).toEqual(false);
  });
  test("given one uppercase, it passes", () => {
    const result = oneUpperCaseRule("Abc");
    expect(result.passed).toEqual(true);
  });
  test("given a different uppercase, it passes", () => {
    const result = oneUpperCaseRule("aBc");
    expect(result.passed).toEqual(true);
  });
});

// Listing 2.21 Using test.each
describe("one uppercase rule", () => {
  test("given no uppercase, it fails", () => {
    const result = oneUpperCaseRule("abc");
    expect(result.passed).toEqual(false);
  });

  test.each(["Abc", "aBc"])("given one uppercase, it passes", (input) => {
    const result = oneUpperCaseRule(input);
    expect(result.passed).toEqual(true);
  });
});

// Listing 2.22 Refactoring test.each (two params)
describe("one uppercase rule", () => {
  test.each([
    ["Abc", true],
    ["aBc", true],
    ["abc", false],
  ])("given %s %s", (input, expected) => {
    const result = oneUpperCaseRule(input);
    expect(result.passed).toEqual(expected);
  });
});
