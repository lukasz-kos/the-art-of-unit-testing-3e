// Listing 5.6 Handwritten stubs creating lots of boilerplate code
import { IComplicatedLogger } from "../iLoggerInterface";
import { PasswordVerifier2 } from "../password-verifier-logger05-complicated";

describe("working with long interfaces", () => {
  describe("password verifier", () => {
    class FakeLogger implements IComplicatedLogger {
      debugText = "";
      debugMethod = "";
      errorText = "";
      errorMethod = "";
      infoText = "";
      infoMethod = "";
      warnText = "";
      warnMethod = "";

      debug(text: string, method: string) {
        this.debugText = text;
        this.debugMethod = method;
      }

      error(text: string, method: string) {
        this.errorText = text;
        this.errorMethod = method;
      }

      info(text: string, method: string) {
        this.infoText = text;
        this.infoMethod = method;
      }

      warn(text: string, method: string) {
        this.warnText = text;
        this.warnMethod = method;
      }
    }

    test("verify, w logger & passing, calls logger with PASS", () => {
      const mockLog = new FakeLogger();
      const verifier = new PasswordVerifier2([], mockLog);
      verifier.verify("anything");
      expect(mockLog.infoText).toMatch(/PASSED/);
    });
  });
});
