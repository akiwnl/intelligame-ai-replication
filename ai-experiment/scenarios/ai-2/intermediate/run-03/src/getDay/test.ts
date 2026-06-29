import { getDay } from "./index";

describe("getDay", () => {
  it("returns correct weekday index", () => {
    // 29 Feb 2012 was Wednesday => 3
    expect(getDay(new Date(2012, 1, 29))).toBe(3);
    // 1 Jan 2020 was Wednesday => 3
    expect(getDay(new Date(2020, 0, 1))).toBe(3);
    // 5 Oct 2014 was Sunday => 0
    expect(getDay(new Date(2014, 9, 5))).toBe(0);
  });
});
