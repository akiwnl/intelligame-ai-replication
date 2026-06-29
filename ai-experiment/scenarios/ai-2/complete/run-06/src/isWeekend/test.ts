import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("detects Saturday", () => {
    // 2021-08-21 is Saturday
    expect(isWeekend(new Date(2021, 7, 21))).toBe(true);
  });

  it("detects Sunday", () => {
    // 2021-08-22 is Sunday
    expect(isWeekend(new Date(2021, 7, 22))).toBe(true);
  });

  it("detects weekday", () => {
    // 2021-08-23 is Monday
    expect(isWeekend(new Date(2021, 7, 23))).toBe(false);
  });

  it("handles timestamp", () => {
    const ts = Date.UTC(2022, 0, 1); // Saturday
    expect(isWeekend(ts)).toBe(true);
  });

  it("returns false for Invalid Date", () => {
    expect(isWeekend(new Date(NaN))).toBe(false);
  });
});
