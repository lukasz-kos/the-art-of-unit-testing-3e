// Listing 5.9 Stubbing a value from a fake function with jest.fn()
test("fake same return values", () => {
  // mockReturnValue
  const stubFunc = jest.fn().mockReturnValue("abc");
  // that stub will always return set value
  expect(stubFunc()).toBe("abc");
  expect(stubFunc()).toBe("abc");
  expect(stubFunc()).toBe("abc");
});

test("fake multiple return values", () => {
  // you could chain values using mockReturnValueOnce
  const stubFunc = jest
    .fn()
    .mockReturnValueOnce("a")
    .mockReturnValueOnce("b")
    .mockReturnValueOnce("c");
  // each call has different value, set in the stub
  expect(stubFunc()).toBe("a");
  expect(stubFunc()).toBe("b");
  expect(stubFunc()).toBe("c");
  // undefined, because 4rd call vs. 3 mockReturnValueOnce
  expect(stubFunc()).toBe(undefined);
});

test("fake throw error", () => {
  // throws an error
  const stubFunc = jest.fn().mockImplementation(() => {
    throw new Error();
  });

  expect(() => stubFunc()).toThrow();
});

test("fake throw error 2", () => {
  // jest.fn(implementation) is a shorthand
  // for jest.fn().mockImplementation(implementation).
  const stubFunc = jest.fn(() => {
    throw new Error();
  });

  expect(() => stubFunc()).toThrow();
});
