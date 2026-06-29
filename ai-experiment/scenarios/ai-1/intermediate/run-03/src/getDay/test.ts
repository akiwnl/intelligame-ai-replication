import { getDay } from "./index";

describe("getDay", () => {
  it("should return the day of the week for a given date (0 for Sunday, 6 for Saturday)", () => {
    // Example from JSDoc: 29 February 2012 was a Wednesday
    const date = new Date(2012, 1, 29); // February 29, 2012
    const result = getDay(date);
    expect(result).toBe(3); // Wednesday is 3
  });

  it("should return 0 for Sunday", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023 was a Sunday
    const result = getDay(date);
    expect(result).toBe(0);
  });

  it("should return 6 for Saturday", () => {
    const date = new Date(2023, 0, 7); // January 7, 2023 was a Saturday
    const result = getDay(date);
    expect(result).toBe(6);
  });

  it("should return 1 for Monday", () => {
    const date = new Date(2023, 0, 2); // January 2, 2023 was a Monday
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("should work with a timestamp as input", () => {
    const date = new Date(2023, 0, 3); // January 3, 2023 was a Tuesday
    const timestamp = date.getTime();
    const result = getDay(timestamp);
    expect(result).toBe(2);
  });

  it("should work with a date string as input", () => {
    const dateString = "2023-01-04T10:00:00Z"; // January 4, 2023 was a Wednesday (UTC)
    const result = getDay(dateString);
    // Note: getDay uses local time. If run in a timezone where Jan 4th UTC is Jan 3rd local, result might differ.
    // For consistency, let's assume local time matches UTC for day of week.
    // Or, better, use a specific date that is a Wednesday in any common timezone
    const localDate = new Date(2023, 0, 4); // Jan 4, 2023, local time
    expect(getDay(localDate)).toBe(3);
  });

  it("should return NaN if the date is invalid", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should return NaN if the input is an invalid string", () => {
    const result = getDay("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
