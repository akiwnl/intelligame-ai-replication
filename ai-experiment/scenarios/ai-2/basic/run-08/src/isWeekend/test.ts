import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("recognizes Saturday as weekend", () => {
    // 2021-07-31 is Saturday
    expect(isWeekend(new Date(2021, 6, 31))).toBe(true);
  });

  it("recognizes Sunday as weekend", () => {
    // 2021-08-01 is Sunday
    expect(isWeekend(new Date(2021, 7, 1))).toBe(true);
  });

  it("recognizes weekday as non‑weekend", () => {
    // 2021-08-02 is Monday
    expect(isWeekend(new Date(2021, 7, 2))).toBe(false);
  });
});
