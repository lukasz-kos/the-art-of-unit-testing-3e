// Listing 4.18 An object-oriented partial mock example
import { RealLogger } from "../real-logger";
import { PasswordVerifier } from "../../interface-injection/password-verifier-logger05";

// use inheritance to override some methods
// TestableLogger and RealLogger still fullfills
// the ILogger interface contract
class TestableLogger extends RealLogger {
  // internal state to check if mock was called
  logged = "";
  // overriding real method
  info(text) {
    this.logged = text;
  }
  // the error() and debug() functions
  // are still "real"
}

describe("partial mock with inheritance", () => {
  test("verify with logger, calls logger", () => {
    //partial mock
    const mockLog: TestableLogger = new TestableLogger();
    const verifier = new PasswordVerifier([], mockLog);

    verifier.verify("any input");

    expect(mockLog.logged).toMatch(/PASSED/);
  });
});
