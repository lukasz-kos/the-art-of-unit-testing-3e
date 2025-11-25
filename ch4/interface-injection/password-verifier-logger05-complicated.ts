// Listing 4.15 Working with a more complicated interface
export interface IComplicatedLogger {
  info(text: string);
  debug(text: string, obj: any);
  warn(text: string);
  error(text: string, location: string, stacktrace: string);
}

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
      this._logger.info("PASSED");
      return true;
    }
    this._logger.info("FAIL");
    return false;
  }
}
