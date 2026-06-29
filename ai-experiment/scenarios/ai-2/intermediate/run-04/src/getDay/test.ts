import { getDay } from "./index";

describe("getDay", () => {
  test("returns correct weekday index", () => {
    // 29 Feb 2012 was Wednesday => 3
    expect(getDay(new Date(2012, 1, 29))).toBe(3);
    // 1 Jan 2022 was Saturday => 6
    expect(getDay(new Date(2022, 0, 1))).toBe(6);
  });

  test("accepts string", () => {
    expect(getDay("2022-03-14")).toBe(1); // Monday
  });
});
