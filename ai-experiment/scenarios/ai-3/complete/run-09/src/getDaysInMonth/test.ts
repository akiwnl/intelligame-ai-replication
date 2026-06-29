import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("gets the number of days in a month of the given date", () => {
    const date = new Date(2000, 1);
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("handles dates with different months", () => {
    const date = new Date(2014, 8);
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("handles dates with different years", () => {
    const date = new Date(2015, 8);
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });
});
