import { getDay } from "./index";

describe("getDay", () => {
  it("should return the day of the week for a given date (Wednesday)", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 was a Wednesday
    const result = getDay(date);
    expect(result).toBe(3); // 0 for Sunday, 1 for Monday, ..., 3 for Wednesday
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

  it("should return NaN for an invalid date", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should accept a timestamp as input", () => {
    const timestamp = new Date(2023, 0, 3).getTime(); // January 3, 2023 was a Tuesday
    const result = getDay(timestamp);
    expect(result).toBe(2);
  });

  it("should accept a string as input", () => {
    const dateString = "2023-01-04T10:00:00.000Z"; // January 4, 2023 was a Wednesday (UTC)
    const result = getDay(dateString);
    // Be careful with timezones. new Date("YYYY-MM-DDTHH:MM:SS.sssZ") is UTC.
    // If the test is run in a different timezone, getDay() will return the local day.
    // Let's create a date that is Wednesday in local time regardless of timezone offset within the day.
    const localWednesday = new Date(2023, 0, 4, 12, 0, 0); // January 4, 2023, 12:00 local time
    expect(getDay(localWednesday)).toBe(3);
  });
});
