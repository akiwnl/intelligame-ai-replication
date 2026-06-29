import { getDay } from "./index";

describe("getDay", () => {
  it("returns correct weekday index", () => {
    // 2021-08-01 is Sunday => 0
    expect(getDay(new Date(2021, 7, 1))).toBe(0);
    // 2021-08-02 is Monday => 1
    expect(getDay(new Date(2021, 7, 2))).toBe(1);
    // 2012-02-29 was Wednesday => 3
    expect(getDay(new Date(2012, 1, 29))).toBe(3);
  });

  it("handles timestamp input", () => {
    const ts = Date.UTC(2020, 0, 4); // Saturday
    expect(getDay(ts)).toBe(6);
  });

  it("returns NaN for invalid date", () => {
    expect(getDay(new Date("invalid"))).toBeNaN();
  });
});
