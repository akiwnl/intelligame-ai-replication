import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("detects Saturday as weekend", () => {
    // 2022-01-01 is Saturday
    expect(isWeekend(new Date(2022, 0, 1))).toBe(true);
  });
  it("detects Sunday as weekend", () => {
    // 2022-01-02 is Sunday
    expect(isWeekend(new Date(2022, 0, 2))).toBe(true);
  });
  it("detects weekdays as not weekend", () => {
    // 2022-01-03 is Monday
    expect(isWeekend(new Date(2022, 0, 3))).toBe(false);
  });
});
