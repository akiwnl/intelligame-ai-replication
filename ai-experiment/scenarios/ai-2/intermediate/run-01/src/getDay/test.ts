import { getDay } from "./index";

describe("getDay", () => {
  test("returns correct weekday index", () => {
    // 29 Feb 2012 was Wednesday => 3
    expect(getDay(new Date(2012, 1, 29))).toBe(3);
    // 1 Jan 2021 was Friday => 5
    expect(getDay(new Date(2021, 0, 1))).toBe(5);
  });

  test("works with timestamp", () => {
    const ts = new Date(2022, 6, 4).getTime(); // Monday
    expect(getDay(ts)).toBe(1);
  });
});
