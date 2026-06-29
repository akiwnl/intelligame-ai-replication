import { getDay } from "./index";

describe("getDay", () => {
  it("returns the day of the week of the given date (0 for Sunday)", () => {
    const result = getDay(new Date(2012, 1, 29)); // Feb 29, 2012 is a Wednesday
    expect(result).toBe(3); // Wednesday is 3 (Sun=0, Mon=1, Tue=2, Wed=3)
  });

  it("returns 0 for Sunday", () => {
    const result = getDay(new Date(2023, 0, 1)); // Jan 1, 2023 is a Sunday
    expect(result).toBe(0);
  });

  it("returns 1 for Monday", () => {
    const result = getDay(new Date(2023, 0, 2)); // Jan 2, 2023 is a Monday
    expect(result).toBe(1);
  });

  it("returns 6 for Saturday", () => {
    const result = getDay(new Date(2023, 0, 7)); // Jan 7, 2023 is a Saturday
    expect(result).toBe(6);
  });

  it("accepts a timestamp as a date", () => {
    const timestamp = new Date(2023, 7, 10).getTime(); // Aug 10, 2023 is a Thursday
    const result = getDay(timestamp);
    expect(result).toBe(4);
  });

  it("accepts a string as a date", () => {
    const dateString = "2023-03-06T10:00:00.000Z"; // March 6, 2023 is a Monday (UTC)
    const result = getDay(new Date(dateString)); // Convert to local Date object for consistency
    expect(result).toBe(1); // Monday
  });

  it("returns NaN for an invalid date input", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
