import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("recognizes Saturday", () => {
    // 2021-08-21 is Saturday
    expect(isWeekend(new Date(Date.UTC(2021, 7, 21)))).toBe(true);
  });

  it("recognizes Sunday", () => {
    // 2021-08-22 is Sunday
    expect(isWeekend(new Date(Date.UTC(2021, 7, 22)))).toBe(true);
  });

  it("recognizes weekday as false", () => {
    // 2021-08-23 is Monday
    expect(isWeekend(new Date(Date.UTC(2021, 7, 23)))).toBe(false);
  });

  it("handles timestamp", () => {
    const sat = Date.UTC(2022, 0, 1); // Saturday
    expect(isWeekend(sat)).toBe(true);
  });

  it("invalid date returns false", () => {
    expect(isWeekend(new Date("invalid"))).toBe(false);
  });
});
