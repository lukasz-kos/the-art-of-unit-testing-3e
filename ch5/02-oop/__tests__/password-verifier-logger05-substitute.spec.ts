// Listing 5.8 Using substitute.js to fake a full interface
import { IComplicatedLogger } from "../iLoggerInterface";
import { PasswordVerifier2 } from "../password-verifier-logger05-complicated";
import { Substitute, Arg } from "@fluffy-spoon/substitute";

describe("working with long interfaces", () => {
  describe("password verifier", () => {
    test("verify, w logger & passing, calls logger w PASS", () => {
      const mockLog = Substitute.for<IComplicatedLogger>();
      const verifier = new PasswordVerifier2([], mockLog);

      verifier.verify("anything");

      mockLog.received().info(
        Arg.is((x) => x.includes("PASSED")),
        "verify"
      );
    });
  });
});
