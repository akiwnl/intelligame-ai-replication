import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("should return the number of days in a year of the given date", () => {
    const date = new Date(2012, 0, 1);
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });
});
