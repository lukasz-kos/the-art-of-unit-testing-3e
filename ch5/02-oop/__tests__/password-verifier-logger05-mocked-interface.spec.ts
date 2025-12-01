// Listing 5.7 Mocking individual interface functions with jest.fn()
import { IComplicatedLogger } from "../iLoggerInterface";
import { PasswordVerifier2 } from "../password-verifier-logger05-complicated";

describe("working with long interfaces", () => {
  describe("password verifier", () => {
    test("verify, w logger & passing, calls logger with PASS", () => {
      // mocked individual interface functions
      const mockLog: IComplicatedLogger = {
        info: jest.fn(),
        warn: jest.fn(),
        debug: jest.fn(),
        error: jest.fn(),
      };
      const verifier = new PasswordVerifier2([], mockLog);

      verifier.verify("anything");

      expect(mockLog.info).toHaveBeenCalledWith(
        expect.stringMatching(/PASS/),
        "verify"
      );
    });
  });
});
