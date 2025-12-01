const samples = require("../IsWebsiteAlive");

// Listing 6.2 An initial integration test
// notice argument "done" in test. That's callback for waiting
test("NETWORK REQUIRED (callback): correct content, true", (done) => {
  samples.isWebsiteAliveWithCallback((result) => {
    expect(result.success).toBe(true);
    expect(result.status).toBe("ok");
    // test have to wait until we explicitly call done()
    done();
    // if done() not called, test will fail after 5s
    // time could be changed using ex. jest.setTimeout(10000);
  });
});

// Listing 6.3 Integration test with callbacks (done) and .then()
// notice argument "done" in test
test("NETWORK REQUIRED (await): correct content, true", (done) => {
  // done callback could be used even in async functions
  samples.isWebsiteAliveWithAsyncAwait().then((result) => {
    expect(result.success).toBe(true);
    expect(result.status).toBe("ok");
    // test have to wait until we explicitly call done()
    done();
    // if done() not called, test will fail after 5s
    // time could be changed using ex. jest.setTimeout(10000);
  });
});

// Listing 6.4 Integration test with async/await
test("NETWORK REQUIRED2 (await): correct content, true", async () => {
  const result = await samples.isWebsiteAliveWithAsyncAwait();
  expect(result.success).toBe(true);
  expect(result.status).toBe("ok");
});
