import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true if the date falls on a weekend", () => {
    const date = new Date(2014, 9, 5);
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should return false if the date does not fall on a weekend", () => {
    const date = new Date(2014, 9, 3);
    const result = isWeekend(date);
    expect(result).toBe(false);
  });
});
