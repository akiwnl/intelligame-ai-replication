import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  test("regular month", () => {
    expect(getDaysInMonth(new Date(2021, 0, 1))).toBe(31); // Jan
  });

  test("leap year February", () => {
    expect(getDaysInMonth(new Date(2000, 1, 1))).toBe(29);
  });

  test("non‑leap year February", () => {
    expect(getDaysInMonth(new Date(1900, 1, 1))).toBe(28);
  });
});
