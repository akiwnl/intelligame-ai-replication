import { getDay } from "./index";

describe("getDay", () => {
  it("returns correct weekday for known date", () => {
    // 2021-08-18 is Wednesday => 3
    expect(getDay(new Date(2021, 7, 18))).toBe(3);
  });

  it("handles Sunday", () => {
    expect(getDay(new Date(2021, 7, 22))).toBe(0);
  });

  it("handles Saturday", () => {
    expect(getDay(new Date(2021, 7, 21))).toBe(6);
  });

  it("accepts timestamp", () => {
    const ts = new Date(2020, 1, 29).getTime(); // Saturday
    expect(getDay(ts)).toBe(6);
  });

  it("returns NaN for invalid date", () => {
    expect(getDay("invalid")).toBeNaN();
  });
});
