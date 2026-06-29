import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("should get the number of days in a year", () => {
    const date = new Date(2012, 0, 1);
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("should handle invalid dates", () => {
    const date = new Date(NaN);
    const result = getDaysInYear(date);
    expect(result).toBe(NaN);
  });
});
