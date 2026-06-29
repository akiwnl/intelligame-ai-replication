import { getDay } from "./index";

describe("getDay", () => {
  it("returns the day of the week for the given date (0 for Sunday)", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 was a Wednesday
    const result = getDay(date);
    expect(result).toBe(3); // Wednesday
  });

  it("returns 0 for Sunday", () => {
    const date = new Date(2024, 2, 3); // March 3, 2024 (Sunday)
    const result = getDay(date);
    expect(result).toBe(0);
  });

  it("returns 1 for Monday", () => {
    const date = new Date(2024, 2, 4); // March 4, 2024 (Monday)
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("returns 6 for Saturday", () => {
    const date = new Date(2024, 2, 2); // March 2, 2024 (Saturday)
    const result = getDay(date);
    expect(result).toBe(6);
  });

  it("returns the correct day for other weekdays", () => {
    expect(getDay(new Date(2024, 2, 5))).toBe(2); // Tuesday
    expect(getDay(new Date(2024, 2, 6))).toBe(3); // Wednesday
    expect(getDay(new Date(2024, 2, 7))).toBe(4); // Thursday
    expect(getDay(new Date(2024, 2, 8))).toBe(5); // Friday
  });

  it("accepts a timestamp as the first argument", () => {
    const date = new Date(2024, 2, 10).getTime(); // March 10, 2024 (Sunday) as timestamp
    const result = getDay(date);
    expect(result).toBe(0);
  });

  it("accepts a date string as the first argument", () => {
    const date = "2024-03-11T00:00:00.000Z"; // March 11, 2024 (Monday)
    const result = getDay(date);
    // Note: Date parsing from string can be timezone dependent.
    // For getDay, it should still return the day of week correctly based on the local time of the parsed date.
    // To ensure robustness, we can create a date in local timezone for comparison
    const expectedDay = new Date(2024, 2, 11).getDay(); // March 11, 2024, local Monday
    expect(result).toBe(expectedDay);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the date string is invalid", () => {
    const result = getDay("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
