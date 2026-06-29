import { isWeekend } from "./index";

describe("isWeekend", () => {
  test("Saturday returns true", () => {
    // 2021-08-07 is Saturday
    expect(isWeekend(new Date(2021, 7, 7))).toBe(true);
  });

  test("Sunday returns true", () => {
    // 2021-08-08 is Sunday
    expect(isWeekend(new Date(2021, 7, 8))).toBe(true);
  });

  test("Weekday returns false", () => {
    // 2021-08-09 is Monday
    expect(isWeekend(new Date(2021, 7, 9))).toBe(false);
  });

  test("invalid date returns false", () => {
    expect(isWeekend(new Date("invalid"))).toBe(false);
  });
});
