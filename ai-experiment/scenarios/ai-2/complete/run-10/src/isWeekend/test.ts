import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("detects Saturday", () => {
    // 2021-08-07 is Saturday
    expect(isWeekend(new Date(2021, 7, 7))).toBe(true);
  });

  it("detects Sunday", () => {
    // 2021-08-08 is Sunday
    expect(isWeekend(new Date(2021, 7, 8))).toBe(true);
  });

  it("detects weekday", () => {
    // 2021-08-09 is Monday
    expect(isWeekend(new Date(2021, 7, 9))).toBe(false);
  });

  it("handles timestamps and strings", () => {
    const sat = Date.UTC(2021, 7, 7); // Saturday
    expect(isWeekend(sat)).toBe(true);
    expect(isWeekend("2021-08-08T00:00:00Z")).toBe(true);
  });

  it("invalid date returns false", () => {
    expect(isWeekend(new Date("invalid"))).toBe(false);
  });
});
