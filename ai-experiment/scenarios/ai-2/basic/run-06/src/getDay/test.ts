import { getDay } from "./index";

describe("getDay", () => {
  it("returns the weekday index", () => {
    // 29 Feb 2012 was Wednesday => 3 (Sun=0)
    expect(getDay(new Date(2012, 1, 29))).toBe(3);
    // 1 Jan 2021 was Friday => 5
    expect(getDay(new Date(2021, 0, 1))).toBe(5);
  });
});
