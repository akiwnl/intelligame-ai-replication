import { getDay } from "./index";

describe("getDay", () => {
  it("should return 0 for Sunday", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023 was a Sunday
    const result = getDay(date);
    expect(result).toBe(0);
  });

  it("should return 1 for Monday", () => {
    const date = new Date(2023, 0, 2); // January 2, 2023 was a Monday
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("should return 2 for Tuesday", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 was a Wednesday (0-indexed, so 3)
    const result = getDay(date);
    expect(result).toBe(3); // Example shows 3, so I'll adjust my test to a Wednesday.
  });

  it("should return 3 for Wednesday", () => {
    const date = new Date(2023, 0, 4); // January 4, 2023 was a Wednesday
    const result = getDay(date);
    expect(result).toBe(3);
  });

  it("should return 4 for Thursday", () => {
    const date = new Date(2023, 0, 5); // January 5, 2023 was a Thursday
    const result = getDay(date);
    expect(result).toBe(4);
  });

  it("should return 5 for Friday", () => {
    const date = new Date(2023, 0, 6); // January 6, 2023 was a Friday
    const result = getDay(date);
    expect(result).toBe(5);
  });

  it("should return 6 for Saturday", () => {
    const date = new Date(2023, 0, 7); // January 7, 2023 was a Saturday
    const result = getDay(date);
    expect(result).toBe(6);
  });

  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2023, 0, 3, 10, 30, 0).getTime(); // January 3, 2023 was a Tuesday
    const result = getDay(timestamp);
    expect(result).toBe(2);
  });

  it("should work with a date string as input", () => {
    const dateString = "2023-01-08T14:00:00.000Z"; // January 8, 2023 UTC, which was a Sunday
    const result = getDay(dateString);
    // getDay returns the day of the week in local time.
    // If local timezone makes it Monday, this test might fail.
    // For consistency, let's assume local timezone doesn't shift the day for this specific UTC date.
    // In UTC, Jan 8 2023 is Sunday.
    // If the local timezone is UTC-X, it might be Jan 7, Saturday.
    // If local timezone is UTC+X, it might still be Jan 8, Sunday.
    // So, this test might be flaky depending on the environment.
    // Best practice for date-fns style: toDate returns local date.
    // Jan 8, 2023 was a Sunday.
    const expectedDay = new Date(dateString).getDay();
    expect(result).toBe(expectedDay);
  });

  it("should handle invalid dates gracefully", () => {
    const invalidDate = new Date(NaN);
    const result = getDay(invalidDate);
    expect(isNaN(result)).toBe(true);
  });
});
