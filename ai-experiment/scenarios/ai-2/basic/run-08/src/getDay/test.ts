import { getDay } from "./index";

describe("getDay", () => {
  it("returns correct weekday index", () => {
    // 2021-08-01 is a Sunday (0)
    expect(getDay(new Date(2021, 7, 1))).toBe(0);
  });

  it("works with timestamp", () => {
    const ts = new Date(2020, 0, 2).getTime(); // Thursday
    expect(getDay(ts)).toBe(4);
  });
});
