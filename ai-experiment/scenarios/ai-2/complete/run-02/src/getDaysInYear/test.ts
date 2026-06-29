import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 366 for leap years", () => {
    expect(getDaysInYear(new Date(2020, 0, 1))).toBe(366);
    expect(getDaysInYear(1584)).toBe(366); // 1584 is leap
  });

  it("returns 365 for common years", () => {
    expect(getDaysInYear(new Date(2021, 0, 1))).toBe(365);
    expect(getDaysInYear("2023-05-10")).toBe(365);
  });
});
