import { getDay } from "./index";

describe("getDay", () => {
  it("should return the day of the week for a given date (Wednesday)", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 was a Wednesday
    const result = getDay(date);
    expect(result).toBe(3); // 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday
  });

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

  it("should return 6 for Saturday", () => {
    const date = new Date(2023, 0, 7); // January 7, 2023 was a Saturday
    const result = getDay(date);
    expect(result).toBe(6);
  });

  it("should work with a timestamp as input", () => {
    const date = new Date(2023, 5, 15).getTime(); // June 15, 2023 was a Thursday
    const result = getDay(date);
    expect(result).toBe(4);
  });

  it("should work with a string as input", () => {
    const date = "2023-07-20T10:00:00.000Z"; // July 20, 2023 was a Thursday (UTC)
    const result = getDay(date);
    // Note: getDay uses local time, so this depends on the test runner's timezone.
    // Assuming UTC for consistency or a known timezone for the test environment.
    // For this example, let's assume the local timezone is also UTC or similar for this date.
    // If the local timezone is different, the day might shift.
    // For example, if local time is UTC-4, then 10:00 UTC July 20 is 06:00 local July 20 (Thursday).
    // If local time is UTC+2, then 10:00 UTC July 20 is 12:00 local July 20 (Thursday).
    // The example will pass if the local timezone doesn't shift the day.
    expect(result).toBe(4); // Thursday
  });

  it("should handle invalid dates", () => {
    const date = new Date(NaN);
    const result = getDay(date);
    expect(isNaN(result)).toBe(true);
  });
});
