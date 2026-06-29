import { getDay } from "./index";

describe("getDay", () => {
  it("returns correct weekday index", () => {
    // 2021-12-25 is Saturday => 6
    expect(getDay(new Date(2021, 11, 25))).toBe(6);
    // 2022-01-01 is Saturday => 6
    expect(getDay(new Date(2022, 0, 1))).toBe(6);
    // 2022-01-02 is Sunday => 0
    expect(getDay(new Date(2022, 0, 2))).toBe(0);
  });

  it("handles leap day", () => {
    // 2020-02-29 was Saturday
    expect(getDay(new Date(2020, 1, 29))).toBe(6);
  });

  it("works with timestamps and strings", () => {
    const ts = Date.UTC(2021, 6, 4); // July 4 2021, Sunday
    expect(getDay(ts)).toBe(0);
    expect(getDay("2021-07-04T00:00:00Z")).toBe(0);
  });
});
