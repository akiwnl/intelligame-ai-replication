import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  test("handles leap year February", () => {
    expect(getDaysInMonth(new Date(2000, 1))).toBe(29);
  });

  test("handles non‑leap year February", () => {
    expect(getDaysInMonth(new Date(2019, 1))).toBe(28);
  });

  test("handles months with 30 days", () => {
    expect(getDaysInMonth(new Date(2021, 3))).toBe(30); // April
  });

  test("handles months with 31 days", () => {
    expect(getDaysInMonth(new Date(2021, 0))).toBe(31); // January
  });
});
