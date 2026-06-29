import { isWeekend } from "./index";

describe("isWeekend", () => {
  test("Saturday is weekend", () => {
    expect(isWeekend(new Date(2021, 5, 5))).toBe(true); // 5 June 2021 is Saturday
  });

  test("Sunday is weekend", () => {
    expect(isWeekend(new Date(2021, 5, 6))).toBe(true);
  });

  test("Monday is not weekend", () => {
    expect(isWeekend(new Date(2021, 5, 7))).toBe(false);
  });
});
