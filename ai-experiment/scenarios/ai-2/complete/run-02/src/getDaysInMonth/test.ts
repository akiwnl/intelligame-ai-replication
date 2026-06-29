import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns 31 for months with 31 days", () => {
    expect(getDaysInMonth(new Date(2021, 0))).toBe(31); // Jan
    expect(getDaysInMonth(new Date(2021, 2))).toBe(31); // Mar
  });

  it("returns 30 for months with 30 days", () => {
    expect(getDaysInMonth(new Date(2021, 3))).toBe(30); // Apr
  });

  it("handles February in leap and non‑leap years", () => {
    expect(getDaysInMonth(new Date(2020, 1))).toBe(29); // leap
    expect(getDaysInMonth(new Date(2021, 1))).toBe(28); // non‑leap
  });

  it("works with timestamps and strings", () => {
    const ts = Date.UTC(2022, 1, 15); // Feb 2022
    expect(getDaysInMonth(ts)).toBe(28);
    expect(getDaysInMonth("2020-02-01")).toBe(29);
  });
});
