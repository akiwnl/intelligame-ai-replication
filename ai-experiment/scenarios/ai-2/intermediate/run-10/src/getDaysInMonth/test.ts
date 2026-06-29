import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("handles regular months", () => {
    expect(getDaysInMonth(new Date(2021, 0, 1))).toBe(31); // Jan
    expect(getDaysInMonth(new Date(2021, 3, 1))).toBe(30); // Apr
  });

  it("handles leap year February", () => {
    expect(getDaysInMonth(new Date(2000, 1, 1))).toBe(29);
  });

  it("handles non‑leap February", () => {
    expect(getDaysInMonth(new Date(2019, 1, 1))).toBe(28);
  });
});
