import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  test("31‑day month", () => {
    expect(getDaysInMonth(new Date(2021, 0, 1))).toBe(31);
  });

  test("30‑day month", () => {
    expect(getDaysInMonth(new Date(2021, 3, 1))).toBe(30);
  });

  test("February non‑leap year", () => {
    expect(getDaysInMonth(new Date(2021, 1, 1))).toBe(28);
  });

  test("February leap year", () => {
    expect(getDaysInMonth(new Date(2020, 1, 1))).toBe(29);
  });

  test("invalid date returns NaN", () => {
    const invalid = new Date("invalid");
    expect(getDaysInMonth(invalid)).toBeNaN();
  });
});
