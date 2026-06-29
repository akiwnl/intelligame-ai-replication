import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  test("leap year has 366 days", () => {
    expect(getDaysInYear(new Date(2012, 0, 1))).toBe(366);
  });

  test("common year has 365 days", () => {
    expect(getDaysInYear(new Date(2019, 0, 1))).toBe(365);
  });
});
