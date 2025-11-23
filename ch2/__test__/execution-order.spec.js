describe("unit under test", () => {
  beforeEach(() => {
    console.log("unit beforeEach");
  });
  console.log("unit variable");
  describe("first scenario", () => {
    beforeEach(() => {
      console.log("first scenario beforeEach");
    });
    console.log("first scenario variable");
    it("expectation 1", () => {
      console.log("first scenario expectation 1");
    });
    it("expectation 2", () => {
      console.log("first scenario expectation 2");
    });
  });
  describe("second scenario", () => {
    beforeEach(() => {
      console.log("second scenario beforeEach");
    });
    console.log("second scenario variable");
    it("expectation 1", () => {
      console.log("second scenario expectation 1");
    });
    it("expectation 2", () => {
      console.log("second scenario expectation 2");
    });
  });
});
