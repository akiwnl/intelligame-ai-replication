import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("detects Saturday", () => {
    // 2021-07-03 is Saturday
    expect(isWeekend(new Date(2021, 6, 3))).toBe(true);
  });

  it("detects Sunday", () => {
    // 2021-07-04 is Sunday
    expect(isWeekend(new Date(2021, 6, 4))).toBe(true);
  });

  it("detects weekdays as false", () => {
    // Monday
    expect(isWeekend(new Date(2021, 6, 5))).toBe(false);
  });

  it("handles timestamps and strings", () => {
    const ts = Date.UTC(2022, 0, 1); // 2022-01-01 was Saturday
    expect(isWeekend(ts)).toBe(true);
  });

  it("returns false for invalid date", () => {
    expect(isWeekend("invalid" as any)).toBe(false);
  });
});
