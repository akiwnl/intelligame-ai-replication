import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 366 for leap year", () => {
    expect(getDaysInYear(new Date(2020, 0, 1))).toBe(366);
  });

  it("returns 365 for common year", () => {
    expect(getDaysInYear(new Date(2019, 0, 1))).toBe(365);
  });
});
