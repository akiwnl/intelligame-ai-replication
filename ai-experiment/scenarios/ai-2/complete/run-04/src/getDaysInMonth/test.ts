import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns correct days for regular months", () => {
    expect(getDaysInMonth(new Date(2021, 0, 1))).toBe(31); // January
    expect(getDaysInMonth(new Date(2021, 3, 1))).toBe(30); // April
  });

  it("handles February in leap and non‑leap years", () => {
    expect(getDaysInMonth(new Date(2020, 1, 1))).toBe(29); // 2020 leap
    expect(getDaysInMonth(new Date(2019, 1, 1))).toBe(28); // 2019 non‑leap
  });

  it("accepts timestamp and string", () => {
    const ts = Date.UTC(2022, 6, 15); // July
    expect(getDaysInMonth(ts)).toBe(31);
    expect(getDaysInMonth("2022-02-01T00:00:00Z")).toBe(28);
  });

  it("returns NaN for invalid date", () => {
    expect(getDaysInMonth(new Date("invalid"))).toBeNaN();
  });
});
