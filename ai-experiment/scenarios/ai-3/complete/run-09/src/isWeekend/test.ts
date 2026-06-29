import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("checks if the given date falls on a weekend", () => {
    const date = new Date(2014, 9, 5);
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("handles weekdays", () => {
    const date = new Date(2014, 9, 3);
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("handles different dates", () => {
    const date = new Date(2015, 0, 1);
    const result = isWeekend(date);
    expect(result).toBe(true);
  });
});
