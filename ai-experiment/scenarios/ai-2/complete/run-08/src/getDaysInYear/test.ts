import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  test("common year", () => {
    expect(getDaysInYear(new Date(2021, 0, 1))).toBe(365);
  });

  test("leap year", () => {
    expect(getDaysInYear(new Date(2020, 0, 1))).toBe(366);
  });

  test("date mid‑year still returns correct total", () => {
    expect(getDaysInYear(new Date(2020, 5, 15))).toBe(366);
  });

  test("invalid date returns NaN", () => {
    const invalid = new Date("invalid");
    expect(getDaysInYear(invalid)).toBeNaN();
  });
});
