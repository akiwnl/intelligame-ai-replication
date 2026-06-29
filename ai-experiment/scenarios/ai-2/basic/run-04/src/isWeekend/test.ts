import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("returns true for Saturday", () => {
    // 5 Oct 2014 was a Sunday, also weekend
    expect(isWeekend(new Date(2014, 9, 5))).toBe(true);
  });

  it("returns true for Sunday", () => {
    expect(isWeekend(new Date(2021, 7, 1))).toBe(true); // 1 Aug 2021 is Sunday
  });

  it("returns false for a weekday", () => {
    expect(isWeekend(new Date(2021, 7, 2))).toBe(false); // Monday
  });
});
