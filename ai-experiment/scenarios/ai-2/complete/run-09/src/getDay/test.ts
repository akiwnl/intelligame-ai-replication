import { getDay } from "./index";

describe("getDay", () => {
  it("returns correct weekday index", () => {
    // 2021-08-18 is Wednesday -> 3
    expect(getDay(new Date(2021, 7, 18))).toBe(3);
  });

  it("handles Sunday as 0", () => {
    // 2021-08-22 is Sunday
    expect(getDay(new Date(2021, 7, 22))).toBe(0);
  });

  it("accepts timestamp and string", () => {
    const ts = new Date(2022, 2, 1).getTime(); // Tuesday
    expect(getDay(ts)).toBe(2);
    expect(getDay(ts.toString())).toBe(2);
  });

  it("returns NaN for invalid date", () => {
    const result = getDay("bad");
    expect(isNaN(result)).toBe(true);
  });
});
