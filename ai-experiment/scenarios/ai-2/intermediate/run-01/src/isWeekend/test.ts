import { isWeekend } from "./index";

describe("isWeekend", () => {
  test("Saturday returns true", () => {
    // 5 Oct 2014 was Sunday, but we test Saturday 4 Oct 2014
    expect(isWeekend(new Date(2014, 9, 4))).toBe(true);
  });

  test("Sunday returns true", () => {
    expect(isWeekend(new Date(2014, 9, 5))).toBe(true);
  });

  test("Weekday returns false", () => {
    expect(isWeekend(new Date(2014, 9, 6))).toBe(false); // Monday
  });
});
