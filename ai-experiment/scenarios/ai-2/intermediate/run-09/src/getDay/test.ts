import { getDay } from "./index";

describe("getDay", () => {
  it("returns correct weekday index", () => {
    // 29 Feb 2012 was Wednesday -> 3
    expect(getDay(new Date(2012, 1, 29))).toBe(3);
    // 1 Jan 2023 was Sunday -> 0
    expect(getDay("2023-01-01")).toBe(0);
  });
});
