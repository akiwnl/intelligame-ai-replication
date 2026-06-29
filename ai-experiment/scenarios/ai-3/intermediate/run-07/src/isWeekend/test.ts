import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true if the date is a Saturday", () => {
    const date = new Date(2014, 9, 4);
    expect(isWeekend(date)).toBe(true);
  });

  it("should return true if the date is a Sunday", () => {
    const date = new Date(2014, 9, 5);
    expect(isWeekend(date)).toBe(true);
  });

  it("should return false if the date is a weekday", () => {
    const date = new Date(2014, 9, 3);
    expect(isWeekend(date)).toBe(false);
  });
});
