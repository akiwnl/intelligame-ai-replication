import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("detects Saturday as weekend", () => {
    expect(isWeekend(new Date(2021, 5, 5))).toBe(true); // 5 June 2021 is Saturday
  });

  it("detects Sunday as weekend", () => {
    expect(isWeekend(new Date(2021, 5, 6))).toBe(true); // Sunday
  });

  it("detects weekdays as not weekend", () => {
    expect(isWeekend(new Date(2021, 5, 7))).toBe(false); // Monday
  });
});
