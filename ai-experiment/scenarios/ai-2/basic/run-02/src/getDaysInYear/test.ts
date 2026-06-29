import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("detects leap years", () => {
    expect(getDaysInYear(new Date(2020, 0, 1))).toBe(366);
    expect(getDaysInYear(new Date(2021, 0, 1))).toBe(365);
  });
});
