import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true if the date falls on a weekend", () => {
    const date = new Date(2014, 9, 5);
    expect(isWeekend(date)).toBe(true);
  });

  it("should return false if the date falls on a weekday", () => {
    const date = new Date(2014, 9, 3);
    expect(isWeekend(date)).toBe(false);
  });
});
