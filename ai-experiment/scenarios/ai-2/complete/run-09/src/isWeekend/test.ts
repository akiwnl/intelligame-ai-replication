import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("detects Saturday as weekend", () => {
    // 2021-08-21 is Saturday
    expect(isWeekend(new Date(2021, 7, 21))).toBe(true);
  });

  it("detects Sunday as weekend", () => {
    // 2021-08-22 is Sunday
    expect(isWeekend(new Date(2021, 7, 22))).toBe(true);
  });

  it("detects weekday as not weekend", () => {
    // 2021-08-23 is Monday
    expect(isWeekend(new Date(2021, 7, 23))).toBe(false);
  });

  it("accepts timestamp and string", () => {
    const sat = new Date(2022, 2, 5).getTime(); // Saturday
    expect(isWeekend(sat)).toBe(true);
    expect(isWeekend(sat.toString())).toBe(true);
  });

  it("handles Invalid Date as false", () => {
    expect(isWeekend("invalid")).toBe(false);
  });
});
