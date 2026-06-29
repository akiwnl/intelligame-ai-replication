import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true if the given date is a Sunday", () => {
    const date = new Date(2014, 9, 5); // Oct 5, 2014 is a Sunday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should return true if the given date is a Saturday", () => {
    const date = new Date(2014, 9, 4); // Oct 4, 2014 is a Saturday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should return false if the given date is a weekday (Monday)", () => {
    const date = new Date(2014, 9, 6); // Oct 6, 2014 is a Monday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("should return false if the given date is a weekday (Friday)", () => {
    const date = new Date(2014, 9, 3); // Oct 3, 2014 is a Friday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("should accept a timestamp as input", () => {
    const timestamp = new Date(2023, 0, 7).getTime(); // Jan 7, 2023 is a Saturday
    const result = isWeekend(timestamp);
    expect(result).toBe(true);
  });

  it("should accept a date string as input", () => {
    const dateString = "2023-01-08T10:00:00.000Z"; // Jan 8, 2023 is a Sunday (UTC)
    // Note: getDay returns the weekday according to local time zone
    const localDate = new Date(dateString);
    const result = isWeekend(dateString);
    expect(result).toBe(localDate.getDay() === 0 || localDate.getDay() === 6);
  });

  it("should return false if the input date is invalid", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });
});
