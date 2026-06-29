import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns 31 for months with 31 days", () => {
    expect(getDaysInMonth(new Date(2021, 0))).toBe(31); // Jan
    expect(getDaysInMonth(new Date(2021, 2))).toBe(31); // Mar
  });

  it("returns 30 for months with 30 days", () => {
    expect(getDaysInMonth(new Date(2021, 3))).toBe(30); // Apr
  });

  it("handles February in leap years", () => {
    expect(getDaysInMonth(new Date(2020, 1))).toBe(29);
  });

  it("handles February in non‑leap years", () => {
    expect(getDaysInMonth(new Date(2021, 1))).toBe(28);
  });

  it("returns NaN for invalid date", () => {
    const result = getDaysInMonth("bad" as any);
    expect(isNaN(result)).toBe(true);
  });
});
