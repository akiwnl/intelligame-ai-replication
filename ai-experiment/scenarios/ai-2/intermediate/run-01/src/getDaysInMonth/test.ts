import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  test("regular month", () => {
    expect(getDaysInMonth(new Date(2021, 0, 1))).toBe(31); // Jan
  });

  test("February non‑leap year", () => {
    expect(getDaysInMonth(new Date(2019, 1, 1))).toBe(28);
  });

  test("February leap year", () => {
    expect(getDaysInMonth(new Date(2020, 1, 1))).toBe(29);
  });
});
