import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should get the number of days in a month", () => {
    const date = new Date(2000, 1);
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("should handle dates with times", () => {
    const date = new Date(2000, 1, 1, 12, 30, 0);
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });
});
