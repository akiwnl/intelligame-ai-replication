import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("identifies Saturdays and Sundays", () => {
    // 2021-08-07 is Saturday
    expect(isWeekend(new Date(2021, 7, 7))).toBe(true);
    // 2021-08-08 is Sunday
    expect(isWeekend(new Date(2021, 7, 8))).toBe(true);
  });

  it("identifies weekdays as not weekend", () => {
    // 2021-08-09 Monday
    expect(isWeekend(new Date(2021, 7, 9))).toBe(false);
    // 2021-08-10 Tuesday
    expect(isWeekend(new Date(2021, 7, 10))).toBe(false);
  });

  it("handles timestamp and string inputs", () => {
    const satTs = Date.UTC(2022, 0, 1); // 2022-01-01 is Saturday
    expect(isWeekend(satTs)).toBe(true);
    expect(isWeekend("2022-01-02T00:00:00Z")).toBe(true); // Sunday
  });

  it("returns false for invalid date", () => {
    expect(isWeekend(new Date("invalid"))).toBe(false);
  });
});
