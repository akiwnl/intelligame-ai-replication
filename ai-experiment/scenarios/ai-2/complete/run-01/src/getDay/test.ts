import { getDay } from "./index";

describe("getDay", () => {
  it("returns correct weekday", () => {
    // 2021-08-18 is Wednesday (3)
    expect(getDay(new Date(2021, 7, 18))).toBe(3);
  });

  it("handles Sunday as 0", () => {
    // 2021-08-22 is Sunday
    expect(getDay(new Date(2021, 7, 22))).toBe(0);
  });

  it("accepts string", () => {
    expect(getDay("2022-01-01")).toBe(6); // Saturday
  });

  it("invalid date returns NaN", () => {
    expect(getDay("invalid")).toBeNaN();
  });
});
