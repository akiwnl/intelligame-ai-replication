import { getDay } from "./index";

describe("getDay", () => {
  it("returns correct weekday index", () => {
    // 29 Feb 2012 was Wednesday => 3 (Sun=0)
    expect(getDay(new Date(2012, 1, 29))).toBe(3);
    // 1 Jan 2022 was Saturday => 6
    expect(getDay(new Date(2022, 0, 1))).toBe(6);
  });
});
