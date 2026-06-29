import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("gets the number of days in a year of the given date", () => {
    const date = new Date(2012, 0, 1);
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("handles edge cases", () => {
    const date = new Date(2014, 0, 1);
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });
});
