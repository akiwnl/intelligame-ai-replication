import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("gets the number of days in a year", () => {
    const date = new Date(2012, 0, 1);
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("handles non-date input", () => {
    const result = getDaysInYear("2012-01-01");
    expect(result).toBe(366);
  });
});
