import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 366 for a leap year", () => {
    expect(getDaysInYear(new Date(2012, 0, 1))).toBe(366);
  });

  it("returns 365 for a common year", () => {
    expect(getDaysInYear(new Date(2019, 0, 1))).toBe(365);
  });
});
