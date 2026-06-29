import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 366 for leap years", () => {
    expect(getDaysInYear(new Date(2020, 0, 1))).toBe(366);
    expect(getDaysInYear(new Date(2000, 5, 15))).toBe(366);
  });

  it("returns 365 for common years", () => {
    expect(getDaysInYear(new Date(2021, 0, 1))).toBe(365);
    expect(getDaysInYear(new Date(1900, 0, 1))).toBe(365);
  });

  it("handles dates anywhere inside the year", () => {
    expect(getDaysInYear(new Date(2020, 11, 31))).toBe(366);
    expect(getDaysInYear(new Date(2021, 6, 4))).toBe(365);
  });

  it("returns NaN for invalid date", () => {
    const result = getDaysInYear("nope" as any);
    expect(isNaN(result)).toBe(true);
  });
});
