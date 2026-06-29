import { getDay } from "./index";

describe("getDay", () => {
  it("returns correct weekday index", () => {
    // 29 Feb 2012 was a Wednesday (3)
    expect(getDay(new Date(2012, 1, 29))).toBe(3);
    // 1 Jan 2021 was a Friday (5)
    expect(getDay(new Date(2021, 0, 1))).toBe(5);
  });
});
