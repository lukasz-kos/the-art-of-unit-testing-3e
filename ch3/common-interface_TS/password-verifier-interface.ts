import * as moment from "moment";
import { SUNDAY, SATURDAY } from "../password-verifier-time00";

// common interface
export interface TimeProviderInterface {
  getDay(): number;
}

// wrapper to abstract moment API
// (if API will change, you only need to adapt in one place)
class RealTimeProvider implements TimeProviderInterface {
  getDay(): number {
    return moment().day();
  }
}

// Listing 3.14 Extracting a common interface in production code
export class PasswordVerifier {
  private _timeProvider: TimeProviderInterface;

  // common interface as parameter
  constructor(rules: any[], timeProvider: TimeProviderInterface) {
    this._timeProvider = timeProvider;
  }
  verify(input: string): string[] {
    const isWeekened =
      [SUNDAY, SATURDAY].filter((x) => x === this._timeProvider.getDay())
        .length > 0;
    if (isWeekened) {
      throw new Error("It's the weekend!");
    }
    // more logic goes here
    return [];
  }
}
