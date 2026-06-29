import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("gets the number of days in a year", () => {
    const date = new Date(2012, 0, 1);
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("handles non-date input", () => {
    const date = "2012-01-01";
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("handles timestamp input", () => {
    const date = 1325376000000;
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });
});
