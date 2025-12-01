// Listing 4.15 Working with a more complicated interface
import { IComplicatedLogger } from "./iLoggerInterface";

export class PasswordVerifier2 {
  private readonly _logger: IComplicatedLogger;
  private readonly _rules: any[];

  constructor(rules: any[], logger: IComplicatedLogger) {
    this._logger = logger;
    this._rules = rules;
  }

  verify(input: string): boolean {
    const failed = this._rules
      .map((rule) => rule(input))
      .filter((result) => result === false);

    if (failed.length === 0) {
      this._logger.info("PASSED", "verify");
      return true;
    }
    this._logger.info("FAIL", "verify");
    return false;
  }
}
