// Listing 4.16 Test code with a complicated logger interface
import {
  IComplicatedLogger,
  PasswordVerifier2,
} from "../password-verifier-logger05-complicated";

describe("working with long interfaces", () => {
  describe("password verifier", () => {
    // fake class (look how much boilerplate code you need!)
    class FakeComplicatedLogger implements IComplicatedLogger {
      infoWritten = "";
      debugWritten = "";
      errorWritten = "";
      warnWritten = "";
      debug(text: string, obj: any) {
        this.debugWritten = text;
      }
      error(text: string, location: string, stacktrace: string) {
        this.errorWritten = text;
      }
      info(text: string) {
        this.infoWritten = text;
      }
      warn(text: string) {
        this.warnWritten = text;
      }
    }

    test("verify passing, with logger, calls logger with PASS", () => {
      const mockLog = new FakeComplicatedLogger();
      const verifier = new PasswordVerifier2([], mockLog);

      verifier.verify("anything");

      expect(mockLog.infoWritten).toMatch(/PASSED/);
    });

    test("A more JS oriented variation on this test", () => {
      const mockLog = {} as IComplicatedLogger;
      let logged = "";
      mockLog.info = (text) => (logged = text);
      const verifier = new PasswordVerifier2([], mockLog);

      verifier.verify("anything");

      expect(logged).toMatch(/PASSED/);
    });
  });
});
