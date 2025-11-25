// Listing 4.17 A partial mock example
import { PasswordVerifier } from "../../interface-injection/password-verifier-logger05";
import { RealLogger } from "../real-logger";

describe("password verifier with interfaces", () => {
  test("verify, with logger, calls logger", () => {
    // notice that RealLogger doesn't explicitly
    // implement ILogger interface used in PasswordVerifier
    // but it uses info method with the same types
    const testableLog: RealLogger = new RealLogger();
    let logged = "";
    // mocking RealLogger info method
    testableLog.info = (text) => (logged = text);
    const verifier = new PasswordVerifier([], testableLog);

    verifier.verify("any input");

    expect(logged).toMatch(/PASSED/);
  });
});
