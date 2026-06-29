import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("detects Saturday as weekend", () => {
    // 7 Sep 2024 is Saturday
    expect(isWeekend(new Date(2024, 8, 7))).toBe(true);
  });

  it("detects Sunday as weekend", () => {
    // 8 Sep 2024 is Sunday
    expect(isWeekend(new Date(2024, 8, 8))).toBe(true);
  });

  it("detects weekday as non‑weekend", () => {
    // 9 Sep 2024 is Monday
    expect(isWeekend(new Date(2024, 8, 9))).toBe(false);
  });
});
