import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("handles regular months", () => {
    expect(getDaysInMonth(new Date(2021, 0, 1))).toBe(31); // January
    expect(getDaysInMonth(new Date(2021, 3, 1))).toBe(30); // April
  });

  it("handles February in leap and non‑leap years", () => {
    expect(getDaysInMonth(new Date(2000, 1, 1))).toBe(29); // leap
    expect(getDaysInMonth(new Date(2019, 1, 1))).toBe(28); // non‑leap
  });
});
