import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true for a Sunday", () => {
    const date = new Date(2014, 9, 5); // October 5, 2014 was a Sunday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should return true for a Saturday", () => {
    const date = new Date(2014, 9, 4); // October 4, 2014 was a Saturday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should return false for a Monday", () => {
    const date = new Date(2014, 9, 6); // October 6, 2014 was a Monday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("should return false for a Wednesday", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 was a Wednesday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("should work with a timestamp as input", () => {
    const date = new Date(2023, 0, 1).getTime(); // January 1, 2023 was a Sunday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should work with a string date as input", () => {
    const date = "2023-01-02T10:00:00.000Z"; // January 2, 2023 was a Monday (UTC)
    const result = isWeekend(date);
    // Note: getDay uses local time. Assuming local timezone doesn't shift the day.
    expect(result).toBe(false);
  });

  it("should handle invalid dates", () => {
    const date = new Date(NaN);
    const result = isWeekend(date);
    expect(result).toBe(false); // Invalid dates are not considered weekend
  });
});
