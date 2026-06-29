import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 366 for leap years", () => {
    expect(getDaysInYear(new Date(2020, 0, 1))).toBe(366);
    expect(getDaysInYear(new Date(2000, 5, 15))).toBe(366);
  });

  it("returns 365 for common years", () => {
    expect(getDaysInYear(new Date(2019, 0, 1))).toBe(365);
    expect(getDaysInYear(new Date(1900, 0, 1))).toBe(365); // 1900 not leap
  });

  it("accepts timestamp and string", () => {
    const ts = Date.UTC(2024, 0, 1);
    expect(getDaysInYear(ts)).toBe(366);
    expect(getDaysInYear("2023-01-01T00:00:00Z")).toBe(365);
  });

  it("returns NaN for invalid date", () => {
    expect(getDaysInYear(new Date("invalid"))).toBeNaN();
  });
});
