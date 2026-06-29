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
    // Wednesday
    expect(isWeekend(new Date(2021, 6, 7))).toBe(false);
  });

  it("works with timestamps and strings", () => {
    const sat = Date.UTC(2022, 0, 1); // 2022-01-01 is Saturday
    expect(isWeekend(sat)).toBe(true);
    expect(isWeekend("2022-01-01T00:00:00Z")).toBe(true);
  });
});
