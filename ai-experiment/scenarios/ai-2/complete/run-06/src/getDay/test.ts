import { getDay } from "./index";

describe("getDay", () => {
  it("returns correct weekday index", () => {
    // 2021-08-18 is Wednesday => 3
    expect(getDay(new Date(2021, 7, 18))).toBe(3);
  });

  it("handles Sunday as 0", () => {
    expect(getDay(new Date(2021, 7, 22))).toBe(0);
  });

  it("handles Saturday as 6", () => {
    expect(getDay(new Date(2021, 7, 21))).toBe(6);
  });

  it("accepts timestamp", () => {
    const ts = Date.UTC(2022, 0, 2); // Sunday
    expect(getDay(ts)).toBe(0);
  });

  it("returns NaN for Invalid Date", () => {
    expect(getDay(new Date(NaN))).toBeNaN();
  });
});
