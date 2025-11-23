import {
  TimeProviderInterface,
  PasswordVerifier,
} from "../password-verifier-interface";
import { SUNDAY } from "../../password-verifier-time00";

// stub
class FakeTimeProvider implements TimeProviderInterface {
  fakeDay: number;
  getDay(): number {
    return this.fakeDay;
  }
}

describe("password verifier with interfaces", () => {
  test("on weekends, throws exceptions", () => {
    const stubTimeProvider = new FakeTimeProvider();
    stubTimeProvider.fakeDay = SUNDAY;
    // common interface as parameter
    const verifier = new PasswordVerifier([], stubTimeProvider);
    expect(() => verifier.verify("anything")).toThrow("It's the weekend!");
  });
});
