import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("returns true for Saturday", () => {
    // 2021-08-21 is Saturday
    expect(isWeekend(new Date(2021, 7, 21))).toBe(true);
  });

  it("returns true for Sunday", () => {
    // 2021-08-22 is Sunday
    expect(isWeekend(new Date(2021, 7, 22))).toBe(true);
  });

  it("returns false for a weekday", () => {
    // 2021-08-18 is Wednesday
    expect(isWeekend(new Date(2021, 7, 18))).toBe(false);
  });

  it("handles timestamp", () => {
    const ts = new Date(2020, 1, 29).getTime(); // Saturday
    expect(isWeekend(ts)).toBe(true);
  });

  it("returns false for invalid date", () => {
    expect(isWeekend("invalid")).toBe(false);
  });
});
