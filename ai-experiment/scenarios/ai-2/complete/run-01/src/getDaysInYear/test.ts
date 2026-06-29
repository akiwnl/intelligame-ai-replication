import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 365 for a common year", () => {
    expect(getDaysInYear(new Date(2019, 0, 1))).toBe(365);
  });

  it("returns 366 for a leap year", () => {
    expect(getDaysInYear(new Date(2020, 0, 1))).toBe(366);
  });

  it("accepts timestamp", () => {
    const ts = Date.UTC(2000, 0, 1);
    expect(getDaysInYear(ts)).toBe(366);
  });

  it("invalid input yields NaN", () => {
    expect(getDaysInYear("not-a-date")).toBeNaN();
  });
});
