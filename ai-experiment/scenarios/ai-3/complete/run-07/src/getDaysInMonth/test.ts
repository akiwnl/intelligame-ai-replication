import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should get the number of days in a month", () => {
    const date = new Date(2000, 1);
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("should handle months with different numbers of days", () => {
    const date = new Date(2014, 8);
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });
});
