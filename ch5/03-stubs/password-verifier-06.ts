// Listing 5.10 Password Verifier with a MaintenanceWindow dependency
import { IComplicatedLogger } from "../02-oop/iLoggerInterface";
import { MaintenanceWindow } from "./maintenance-window";

export class PasswordVerifier3 {
  private readonly _logger: IComplicatedLogger;
  private readonly _rules: any[];
  private readonly _maintenanceWindow: MaintenanceWindow;

  constructor(
    rules: any[],
    logger: IComplicatedLogger,
    maintenanceWindow: MaintenanceWindow
  ) {
    this._logger = logger;
    this._rules = rules;
    this._maintenanceWindow = maintenanceWindow;
  }

  verify(input: string): boolean {
    if (this._maintenanceWindow.isUnderMaintenance()) {
      this._logger.info("Under Maintenance", "verify");
      return false;
    }

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
