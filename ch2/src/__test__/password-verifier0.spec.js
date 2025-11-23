const { verifyPassword } = require("../verifyPassword");

// listing 2.3 The first test against verifyPassword()
test("badly named test", () => {
  const fakeRule = (input) => ({ passed: false, reason: "fake reason" });

  const errors = verifyPassword("any value", [fakeRule]);

  expect(errors[0]).toMatch("fake reason");
});

// listing 2.5 Naming a test with USE
test("verifyPassword, given a failing rule, returns errors", () => {
  const fakeRule = (input) => ({ passed: false, reason: "fake reason" });

  const errors = verifyPassword("any value", [fakeRule]);

  expect(errors[0]).toContain("fake reason");
});

// listing 2.6 Adding a describe() block
describe("verifyPassword", () => {
  test("given a failing rule, returns errors", () => {
    const fakeRule = (input) => ({ passed: false, reason: "fake reason" });

    const errors = verifyPassword("any value", [fakeRule]);

    expect(errors[0]).toContain("fake reason");
  });
});

// listing 2.7 Nested describes for extra context
describe("verifyPassword", () => {
  describe("with a failing rule", () => {
    test("returns errors", () => {
      const fakeRule = (input) => ({ passed: false, reason: "fake reason" });

      const errors = verifyPassword("any value", [fakeRule]);

      expect(errors[0]).toContain("fake reason");
    });
  });
});

// listing 2.8 Nested describes with an extracted input
describe("verifyPassword", () => {
  describe("with a failing rule", () => {
    const fakeRule = (input) => ({ passed: false, reason: "fake reason" });
    test("returns errors", () => {
      const errors = verifyPassword("any value", [fakeRule]);

      expect(errors[0]).toContain("fake reason");
    });
  });
});
