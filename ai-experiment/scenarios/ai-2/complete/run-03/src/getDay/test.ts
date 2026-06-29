import { getDay } from "./index";

describe("getDay", () => {
  it("returns correct weekday index", () => {
    // 2012-02-29 was Wednesday => 3
    expect(getDay(new Date(2012, 1, 29))).toBe(3);
    // 2021-08-01 is Sunday => 0
    expect(getDay(new Date(2021, 7, 1))).toBe(0);
  });

  it("handles month boundaries", () => {
    // 2021-01-31 is Sunday
    expect(getDay(new Date(2021, 0, 31))).toBe(0);
  });

  it("returns NaN for invalid date", () => {
    const result = getDay("invalid" as any);
    expect(isNaN(result)).toBe(true);
  });
});
