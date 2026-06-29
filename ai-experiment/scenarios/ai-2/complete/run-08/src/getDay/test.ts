import { getDay } from "./index";

describe("getDay", () => {
  test("weekday", () => {
    // 2021-09-01 is Wednesday (3)
    expect(getDay(new Date(2021, 8, 1))).toBe(3);
  });

  test("Sunday is 0", () => {
    expect(getDay(new Date(2021, 7, 1))).toBe(0);
  });

  test("Saturday is 6", () => {
    expect(getDay(new Date(2021, 7, 7))).toBe(6);
  });

  test("leap day", () => {
    // 2020-02-29 is Saturday
    expect(getDay(new Date(2020, 1, 29))).toBe(6);
  });

  test("invalid date returns NaN", () => {
    const invalid = new Date("invalid");
    expect(getDay(invalid)).toBeNaN();
  });
});
