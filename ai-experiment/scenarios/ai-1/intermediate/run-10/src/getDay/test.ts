import { getDay } from "./index";

describe("getDay", () => {
  it("returns the day of the week for a given date (Sunday = 0)", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 (Wednesday)
    const result = getDay(date);
    expect(result).toBe(3); // Wednesday
  });

  it("returns 0 for Sunday", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023 (Sunday)
    const result = getDay(date);
    expect(result).toBe(0);
  });

  it("returns 1 for Monday", () => {
    const date = new Date(2023, 0, 2); // January 2, 2023 (Monday)
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("returns 6 for Saturday", () => {
    const date = new Date(2023, 0, 7); // January 7, 2023 (Saturday)
    const result = getDay(date);
    expect(result).toBe(6);
  });

  it("accepts a timestamp as a date argument", () => {
    const timestamp = new Date(2023, 0, 3).getTime(); // January 3, 2023 (Tuesday)
    const result = getDay(timestamp);
    expect(result).toBe(2);
  });

  it("accepts a string as a date argument", () => {
    const dateString = "2023-01-04T10:00:00Z"; // January 4, 2023 (Wednesday)
    const result = getDay(dateString);
    // Note: When parsing from string, Date might be in UTC.
    // We'll test for the local date values as per toDate's description.
    expect(result).toBe(3);
  });

  it("returns NaN if the date is invalid", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the input is an invalid string", () => {
    const result = getDay("not a date");
    expect(isNaN(result)).toBe(true);
  });
});
