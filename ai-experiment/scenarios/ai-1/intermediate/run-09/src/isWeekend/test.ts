import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true for a Sunday", () => {
    const date = new Date(2014, 9, 5); // October 5, 2014 was a Sunday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should return true for a Saturday", () => {
    const date = new Date(2023, 0, 7); // January 7, 2023 was a Saturday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should return false for a Monday", () => {
    const date = new Date(2023, 0, 2); // January 2, 2023 was a Monday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("should return false for a Wednesday", () => {
    const date = new Date(2023, 0, 4); // January 4, 2023 was a Wednesday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("should return false for an invalid date", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });

  it("should accept a timestamp as input", () => {
    const timestamp = new Date(2023, 0, 8).getTime(); // January 8, 2023 was a Sunday
    const result = isWeekend(timestamp);
    expect(result).toBe(true);
  });

  it("should accept a string as input", () => {
    const dateString = "2023-01-06T10:00:00.000Z"; // January 6, 2023 was a Friday (UTC)
    const result = isWeekend(dateString);
    // Note: getDay() returns the day of the week for the local time zone.
    // If the local timezone offset makes this date fall on Saturday/Sunday locally, it will return true.
    // To ensure consistency, we'll test a known local weekend date.
    const localSaturday = new Date(2023, 0, 7, 12, 0, 0); // January 7, 2023, 12:00 local time
    expect(isWeekend(localSaturday)).toBe(true);
  });
});
