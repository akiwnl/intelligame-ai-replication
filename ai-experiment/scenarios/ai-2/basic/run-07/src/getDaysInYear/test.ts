import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 366 for leap years", () => {
    expect(getDaysInYear(new Date(2020, 0, 1))).toBe(366);
  });

  it("returns 365 for common years", () => {
    expect(getDaysInYear(new Date(2021, 0, 1))).toBe(365);
  });
});
