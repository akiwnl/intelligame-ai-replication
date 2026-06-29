import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("returns true for Saturday", () => {
    // 2021-01-02 is Saturday
    expect(isWeekend(new Date(2021, 0, 2))).toBe(true);
  });

  it("returns true for Sunday", () => {
    // 2021-01-03 is Sunday
    expect(isWeekend(new Date(2021, 0, 3))).toBe(true);
  });

  it("returns false for weekday", () => {
    // 2021-01-04 is Monday
    expect(isWeekend(new Date(2021, 0, 4))).toBe(false);
  });
});
