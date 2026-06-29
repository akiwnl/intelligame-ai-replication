import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 365 for a common year", () => {
    expect(getDaysInYear(new Date(2019, 0, 1))).toBe(365);
  });

  it("returns 366 for a leap year", () => {
    expect(getDaysInYear(new Date(2020, 0, 1))).toBe(366);
  });

  it("accepts timestamp", () => {
    const ts = new Date(2000, 5, 10).getTime();
    expect(getDaysInYear(ts)).toBe(366);
  });

  it("returns NaN for invalid date", () => {
    expect(getDaysInYear("invalid")).toBeNaN();
  });
});
