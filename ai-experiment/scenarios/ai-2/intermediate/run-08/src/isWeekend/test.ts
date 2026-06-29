import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("detects Saturday", () => {
    // 5 Oct 2014 was a Sunday
    expect(isWeekend(new Date(2014, 9, 5))).toBe(true);
  });

  it("detects weekday", () => {
    // 6 Oct 2014 was Monday
    expect(isWeekend(new Date(2014, 9, 6))).toBe(false);
  });
});
