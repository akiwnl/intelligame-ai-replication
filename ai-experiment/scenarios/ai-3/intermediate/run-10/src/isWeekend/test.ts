import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("checks if a date is a weekend", () => {
    const date = new Date(2014, 9, 5);
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("handles edge cases", () => {
    const date = new Date(2014, 9, 4);
    const result = isWeekend(date);
    expect(result).toBe(false);
  });
});
