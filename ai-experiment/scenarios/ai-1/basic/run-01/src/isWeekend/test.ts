import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true for a Sunday", () => {
    const date = new Date(2014, 9, 5); // October 5, 2014 was a Sunday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should return true for a Saturday", () => {
    const date = new Date(2023, 5, 17); // June 17, 2023 is a Saturday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should return false for a Monday", () => {
    const date = new Date(2023, 5, 12); // June 12, 2023 is a Monday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("should return false for a Tuesday", () => {
    const date = new Date(2023, 5, 13); // June 13, 2023 is a Tuesday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("should return false for a Wednesday", () => {
    const date = new Date(2023, 5, 14); // June 14, 2023 is a Wednesday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("should return false for a Thursday", () => {
    const date = new Date(2023, 5, 15); // June 15, 2023 is a Thursday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("should return false for a Friday", () => {
    const date = new Date(2023, 5, 16); // June 16, 2023 is a Friday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("should return false for an invalid date input", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });

  it("should work with a timestamp as input", () => {
    const sundayTimestamp = new Date(2023, 0, 1).getTime(); // Jan 1, 2023 was a Sunday
    const result = isWeekend(sundayTimestamp);
    expect(result).toBe(true);
  });

  it("should work with a date string as input", () => {
    const mondayDateString = "2023-01-02T10:00:00Z"; // Jan 2, 2023 was a Monday
    const result = isWeekend(mondayDateString);
    expect(result).toBe(false);
  });
});
