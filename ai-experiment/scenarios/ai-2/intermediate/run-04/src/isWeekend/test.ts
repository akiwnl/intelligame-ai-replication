import { isWeekend } from "./index";

describe("isWeekend", () => {
  test("Saturday returns true", () => {
    // 5 Oct 2014 was Sunday, 4 Oct 2014 was Saturday
    expect(isWeekend(new Date(2014, 9, 4))).toBe(true);
    expect(isWeekend(new Date(2014, 9, 5))).toBe(true);
  });

  test("Weekday returns false", () => {
    // 6 Oct 2014 was Monday
    expect(isWeekend(new Date(2014, 9, 6))).toBe(false);
  });
});
