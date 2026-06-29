import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("returns true if the given date falls on a weekend (Sunday)", () => {
    const date = new Date(2014, 9, 5); // Oct 5, 2014 is a Sunday
    expect(isWeekend(date)).toBe(true);
  });

  it("returns true if the given date falls on a weekend (Saturday)", () => {
    const date = new Date(2023, 0, 7); // Jan 7, 2023 is a Saturday
    expect(isWeekend(date)).toBe(true);
  });

  it("returns false if the given date falls on a weekday (Monday)", () => {
    const date = new Date(2014, 9, 6); // Oct 6, 2014 is a Monday
    expect(isWeekend(date)).toBe(false);
  });

  it("returns false if the given date falls on a weekday (Friday)", () => {
    const date = new Date(2023, 0, 6); // Jan 6, 2023 is a Friday
    expect(isWeekend(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2023, 0, 8).getTime(); // Jan 8, 2023 is a Sunday
    expect(isWeekend(date)).toBe(true);
  });

  it("accepts a date string", () => {
    const date = "2023-01-09T10:00:00.000Z"; // Jan 9, 2023 is a Monday
    expect(isWeekend(date)).toBe(false);
  });

  it("returns false for an invalid date", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });
});
