import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should check if the given date falls on a weekend", () => {
    const date = new Date(2014, 9, 5);
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should handle non-date inputs", () => {
    const date = "2014-10-05";
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should return false if date does not fall on a weekend", () => {
    const date = new Date(2014, 9, 6);
    const result = isWeekend(date);
    expect(result).toBe(false);
  });
});
