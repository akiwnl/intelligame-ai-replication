import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("identifies Saturday as weekend", () => {
    // 2022-01-01 was Saturday
    expect(isWeekend(new Date(2022, 0, 1))).toBe(true);
  });

  it("identifies Sunday as weekend", () => {
    // 2022-01-02 was Sunday
    expect(isWeekend(new Date(2022, 0, 2))).toBe(true);
  });

  it("identifies weekday as not weekend", () => {
    // 2022-01-03 was Monday
    expect(isWeekend(new Date(2022, 0, 3))).toBe(false);
  });
});
