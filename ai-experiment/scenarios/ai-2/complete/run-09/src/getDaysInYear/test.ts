import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("detects leap year", () => {
    expect(getDaysInYear(new Date(2020, 0, 1))).toBe(366);
  });

  it("detects common year", () => {
    expect(getDaysInYear(new Date(2021, 0, 1))).toBe(365);
  });

  it("handles century non‑leap year", () => {
    expect(getDaysInYear(new Date(1900, 0, 1))).toBe(365);
  });

  it("handles century leap year", () => {
    expect(getDaysInYear(new Date(2000, 0, 1))).toBe(366);
  });

  it("accepts timestamp and string", () => {
    const ts = new Date(2024, 0, 1).getTime();
    expect(getDaysInYear(ts)).toBe(366);
    expect(getDaysInYear(ts.toString())).toBe(366);
  });

  it("returns NaN for invalid date", () => {
    const result = getDaysInYear("bad");
    expect(isNaN(result)).toBe(true);
  });
});
