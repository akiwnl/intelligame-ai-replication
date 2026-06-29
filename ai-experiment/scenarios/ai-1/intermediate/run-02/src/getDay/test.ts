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

  it("should return 3 for Wednesday", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012 was a Wednesday
    const result = getDay(date);
    expect(result).toBe(3);
  });

  it("should return 6 for Saturday", () => {
    const date = new Date(2023, 0, 7); // January 7, 2023 was a Saturday
    const result = getDay(date);
    expect(result).toBe(6);
  });

  it("should return NaN if the input date is invalid", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should work with a timestamp input", () => {
    const timestamp = new Date(2023, 0, 3).getTime(); // January 3, 2023 was a Tuesday
    const result = getDay(timestamp);
    expect(result).toBe(2);
  });

  it("should work with a date string input", () => {
    const dateString = "2023-01-04T12:00:00Z"; // January 4, 2023 was a Wednesday (UTC, may vary by timezone)
    const result = getDay(dateString);
    // Note: getDay uses local time. If run in UTC, it would be 3.
    // For consistency, let's use a date object for comparison.
    expect(result).toBe(new Date("2023-01-04T12:00:00Z").getDay());
  });
});
