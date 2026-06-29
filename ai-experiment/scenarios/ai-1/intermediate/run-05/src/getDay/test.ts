import { getDay } from "./index";

describe("getDay", () => {
  it("should return the day of the week for a given date (Sunday is 0)", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012. This was a Wednesday.
    const result = getDay(date);
    expect(result).toBe(3); // Wednesday
  });

  it("should return 0 for Sunday", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023 was a Sunday
    const result = getDay(date);
    expect(result).toBe(0);
  });

  it("should return 6 for Saturday", () => {
    const date = new Date(2023, 0, 7); // Jan 7, 2023 was a Saturday
    const result = getDay(date);
    expect(result).toBe(6);
  });

  it("should return 1 for Monday", () => {
    const date = new Date(2023, 0, 2); // Jan 2, 2023 was a Monday
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("should handle date as a timestamp", () => {
    const timestamp = new Date(2023, 5, 15, 10, 30, 0).getTime(); // Jun 15, 2023 was a Thursday
    const result = getDay(timestamp);
    expect(result).toBe(4);
  });

  it("should handle date as a string", () => {
    const dateString = "2023-07-20"; // Jul 20, 2023 was a Thursday
    const result = getDay(dateString);
    expect(result).toBe(4);
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
