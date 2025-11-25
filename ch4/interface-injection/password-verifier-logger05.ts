// Listing 4.13 Production code gets an ILogger interface
export interface ILogger {
  info(text: string);
}

class SimpleLogger implements ILogger {
  info(text: string) {}
}

export class PasswordVerifier {
  private readonly _logger: ILogger;
  private readonly _rules: any[];

  constructor(rules: any[], logger: ILogger) {
    this._logger = logger;
    this._rules = rules;
  }

  verify(input: string): boolean {
    const failed = this._rules
      .map((rule) => rule(input))
      .filter((result) => result === false);

    if (failed.length === 0) {
      this._logger.info("PASSED");
      return true;
    }
    this._logger.info("FAIL");
    return false;
  }
}
