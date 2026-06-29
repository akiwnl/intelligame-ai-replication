import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true for a Sunday", () => {
    const date = new Date(2014, 9, 5); // Oct 5, 2014 was a Sunday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should return true for a Saturday", () => {
    const date = new Date(2023, 0, 7); // Jan 7, 2023 was a Saturday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should return false for a Monday", () => {
    const date = new Date(2023, 0, 2); // Jan 2, 2023 was a Monday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("should return false for a Wednesday", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012 was a Wednesday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("should handle date as a timestamp", () => {
    const timestamp = new Date(2023, 5, 17).getTime(); // Jun 17, 2023 was a Saturday
    const result = isWeekend(timestamp);
    expect(result).toBe(true);
  });

  it("should handle date as a string", () => {
    const dateString = "2023-07-21"; // Jul 21, 2023 was a Friday
    const result = isWeekend(dateString);
    expect(result).toBe(false);
  });

  it("should return false for an invalid date input", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });
});
