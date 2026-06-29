import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("detects Saturday as weekend", () => {
    // 2021-01-02 is Saturday
    expect(isWeekend(new Date(2021, 0, 2))).toBe(true);
  });

  it("detects Sunday as weekend", () => {
    // 2021-01-03 is Sunday
    expect(isWeekend(new Date(2021, 0, 3))).toBe(true);
  });

  it("detects weekday as not weekend", () => {
    // 2021-01-04 is Monday
    expect(isWeekend(new Date(2021, 0, 4))).toBe(false);
  });
});
