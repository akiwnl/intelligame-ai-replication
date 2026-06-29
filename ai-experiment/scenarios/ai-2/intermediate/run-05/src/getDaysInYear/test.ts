import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  test("leap year", () => {
    expect(getDaysInYear(new Date(2012, 0, 1))).toBe(366);
  });

  test("common year", () => {
    expect(getDaysInYear(new Date(2019, 0, 1))).toBe(365);
  });
});
