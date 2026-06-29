import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true for a Saturday", () => {
    const date = new Date(2014, 9, 4); // Oct 4, 2014 was a Saturday
    expect(isWeekend(date)).toBe(true);
  });

  it("should return true for a Sunday", () => {
    const date = new Date(2014, 9, 5); // Oct 5, 2014 was a Sunday
    expect(isWeekend(date)).toBe(true);
  });

  it("should return false for a Monday", () => {
    const date = new Date(2014, 9, 6); // Oct 6, 2014 was a Monday
    expect(isWeekend(date)).toBe(false);
  });

  it("should return false for a Tuesday", () => {
    const date = new Date(2023, 5, 13); // June 13, 2023 was a Tuesday
    expect(isWeekend(date)).toBe(false);
  });

  it("should return false for a Wednesday", () => {
    const date = new Date(2023, 5, 14); // June 14, 2023 was a Wednesday
    expect(isWeekend(date)).toBe(false);
  });

  it("should return false for a Thursday", () => {
    const date = new Date(2023, 5, 15); // June 15, 2023 was a Thursday
    expect(isWeekend(date)).toBe(false);
  });

  it("should return false for a Friday", () => {
    const date = new Date(2023, 5, 16); // June 16, 2023 was a Friday
    expect(isWeekend(date)).toBe(false);
  });

  it("should work with a timestamp as input for a weekend date", () => {
    const saturdayTimestamp = new Date(2023, 0, 7).getTime(); // Jan 7, 2023 (Saturday)
    expect(isWeekend(saturdayTimestamp)).toBe(true);
  });

  it("should work with a timestamp as input for a weekday date", () => {
    const mondayTimestamp = new Date(2023, 0, 9).getTime(); // Jan 9, 2023 (Monday)
    expect(isWeekend(mondayTimestamp)).toBe(false);
  });

  it("should return false for an invalid date input", () => {
    const invalidDate = new Date(NaN);
    expect(isWeekend(invalidDate)).toBe(false);
  });

  it("should return false for an invalid string input", () => {
    expect(isWeekend("invalid date string")).toBe(false);
  });
});
