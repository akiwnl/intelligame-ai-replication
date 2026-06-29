import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("identifies Saturdays as weekend", () => {
    // 2021-10-02 is a Saturday
    expect(isWeekend(new Date(2021, 9, 2))).toBe(true);
  });

  it("identifies Sundays as weekend", () => {
    // 2021-10-03 is a Sunday
    expect(isWeekend(new Date(2021, 9, 3))).toBe(true);
  });

  it("identifies weekdays as non‑weekend", () => {
    // 2021-10-04 is a Monday
    expect(isWeekend(new Date(2021, 9, 4))).toBe(false);
  });
});
