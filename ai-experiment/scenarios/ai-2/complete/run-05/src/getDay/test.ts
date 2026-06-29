import { getDay } from "./index";

describe("getDay", () => {
  it("returns correct weekday (UTC)", () => {
    // 2021-08-18 is Wednesday (3)
    expect(getDay(new Date(Date.UTC(2021, 7, 18)))).toBe(3);
  });

  it("handles Sunday as 0", () => {
    // 2021-08-22 is Sunday
    expect(getDay(new Date(Date.UTC(2021, 7, 22)))).toBe(0);
  });

  it("handles leap day", () => {
    // 2020-02-29 is Saturday (6)
    expect(getDay(new Date(Date.UTC(2020, 1, 29)))).toBe(6);
  });

  it("accepts timestamp", () => {
    const ts = Date.UTC(2022, 0, 1); // Saturday
    expect(getDay(ts)).toBe(6);
  });

  it("returns NaN for invalid date", () => {
    expect(getDay(new Date("invalid"))).toBeNaN();
  });
});
