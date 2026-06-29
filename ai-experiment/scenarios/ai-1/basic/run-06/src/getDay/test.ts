import { getDay } from "./index";

describe("getDay", () => {
  it("should return the day of the week for the given date (0 for Sunday)", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012 is a Wednesday
    const result = getDay(date);
    expect(result).toBe(3); // Wednesday
  });

  it("should return 0 for Sunday", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023 is a Sunday
    const result = getDay(date);
    expect(result).toBe(0);
  });

  it("should return 6 for Saturday", () => {
    const date = new Date(2023, 0, 7); // Jan 7, 2023 is a Saturday
    const result = getDay(date);
    expect(result).toBe(6);
  });

  it("should return correct day for a weekday (Monday)", () => {
    const date = new Date(2023, 0, 2); // Jan 2, 2023 is a Monday
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("should accept a timestamp as input", () => {
    const timestamp = new Date(2023, 10, 20).getTime(); // Nov 20, 2023 is a Monday
    const result = getDay(timestamp);
    expect(result).toBe(1);
  });

  it("should accept a date string as input", () => {
    const dateString = "2023-03-05T10:00:00.000Z"; // Mar 5, 2023 is a Sunday (UTC)
    // Note: getDay returns the weekday according to local time zone
    const localDate = new Date(dateString);
    const result = getDay(dateString);
    expect(result).toBe(localDate.getDay());
  });

  it("should return NaN if the input date is invalid", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
