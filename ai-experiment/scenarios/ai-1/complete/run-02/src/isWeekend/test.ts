import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("returns true if the given date is a Sunday (0)", () => {
    const date = new Date(2014, 9, 5); // Oct 5th, 2014 is a Sunday (JSDoc example)
    expect(isWeekend(date)).toBe(true);
  });

  it("returns true if the given date is a Saturday (6)", () => {
    const date = new Date(2024, 0, 6); // Jan 6th, 2024 is a Saturday
    expect(isWeekend(date)).toBe(true);
  });

  it("returns false if the given date is a Monday (1)", () => {
    const date = new Date(2024, 0, 8); // Jan 8th, 2024 is a Monday
    expect(isWeekend(date)).toBe(false);
  });

  it("returns false if the given date is a Tuesday (2)", () => {
    const date = new Date(2024, 0, 9); // Jan 9th, 2024 is a Tuesday
    expect(isWeekend(date)).toBe(false);
  });

  it("returns false if the given date is a Wednesday (3)", () => {
    const date = new Date(2024, 0, 10); // Jan 10th, 2024 is a Wednesday
    expect(isWeekend(date)).toBe(false);
  });

  it("returns false if the given date is a Thursday (4)", () => {
    const date = new Date(2024, 0, 11); // Jan 11th, 2024 is a Thursday
    expect(isWeekend(date)).toBe(false);
  });

  it("returns false if the given date is a Friday (5)", () => {
    const date = new Date(2024, 0, 12); // Jan 12th, 2024 is a Friday
    expect(isWeekend(date)).toBe(false);
  });

  it("returns false for an invalid date", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });

  it("accepts a timestamp as date argument", () => {
    const saturdayTimestamp = new Date(2024, 0, 6, 10, 0, 0).getTime();
    expect(isWeekend(saturdayTimestamp)).toBe(true);

    const mondayTimestamp = new Date(2024, 0, 8, 10, 0, 0).getTime();
    expect(isWeekend(mondayTimestamp)).toBe(false);
  });

  it("accepts a date string as date argument", () => {
    const sundayString = "2024-01-07T10:00:00.000Z"; // Sunday UTC
    expect(isWeekend(sundayString)).toBe(true);

    const tuesdayString = "2024-01-09T10:00:00.000Z"; // Tuesday UTC
    expect(isWeekend(tuesdayString)).toBe(false);
  });

  // Boundary value test: check dates around month/year boundaries that fall on weekend/weekday
  it("handles dates at month boundary that are weekend", () => {
    const endOfMonthSaturday = new Date(2024, 0, 27); // Jan 27, 2024 is Saturday
    expect(isWeekend(endOfMonthSaturday)).toBe(true);
  });

  it("handles dates at month boundary that are weekday", () => {
    const startOfMonthMonday = new Date(2024, 1, 1); // Feb 1, 2024 is Thursday
    expect(isWeekend(startOfMonthMonday)).toBe(false);
  });
});
