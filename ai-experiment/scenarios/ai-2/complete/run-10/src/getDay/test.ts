import { getDay } from "./index";

describe("getDay", () => {
  it("returns correct weekday index", () => {
    // 2021-08-01 is Sunday => 0
    expect(getDay(new Date(2021, 7, 1))).toBe(0);
    // 2021-08-02 is Monday => 1
    expect(getDay(new Date(2021, 7, 2))).toBe(1);
  });

  it("handles leap day", () => {
    // 2020-02-29 was Saturday => 6
    expect(getDay(new Date(2020, 1, 29))).toBe(6);
  });

  it("accepts timestamp and string", () => {
    const ts = Date.UTC(2021, 0, 4); // Monday
    expect(getDay(ts)).toBe(1);
    expect(getDay("2021-01-05T00:00:00Z")).toBe(2);
  });

  it("returns NaN for invalid date", () => {
    expect(getDay(new Date("invalid"))).toBeNaN();
  });
});
