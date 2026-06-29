import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should check if the given date falls on a weekend", () => {
    const date = new Date(2014, 9, 5);
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should handle weekdays", () => {
    const date = new Date(2014, 9, 3);
    const result = isWeekend(date);
    expect(result).toBe(false);
  });
});
