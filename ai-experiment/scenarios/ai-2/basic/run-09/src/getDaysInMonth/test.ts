import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("handles February in leap year", () => {
    expect(getDaysInMonth(new Date(2000, 1))).toBe(29);
  });

  it("handles February in non‑leap year", () => {
    expect(getDaysInMonth(new Date(2001, 1))).toBe(28);
  });

  it("handles months with 31 days", () => {
    expect(getDaysInMonth(new Date(2021, 0))).toBe(31); // Jan
  });
});
