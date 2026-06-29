import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("returns true if the given date is a Sunday", () => {
    const date = new Date(2014, 9, 5); // Oct 5, 2014 is a Sunday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("returns true if the given date is a Saturday", () => {
    const date = new Date(2014, 9, 4); // Oct 4, 2014 is a Saturday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("returns false if the given date is a weekday (Monday)", () => {
    const date = new Date(2014, 9, 6); // Oct 6, 2014 is a Monday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("returns false if the given date is a weekday (Wednesday)", () => {
    const date = new Date(2014, 9, 8); // Oct 8, 2014 is a Wednesday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("accepts a timestamp as a date", () => {
    const timestamp = new Date(2023, 0, 1).getTime(); // Jan 1, 2023 is a Sunday
    const result = isWeekend(timestamp);
    expect(result).toBe(true);
  });

  it("accepts a string as a date", () => {
    const dateString = "2023-01-07T12:00:00.000Z"; // Jan 7, 2023 is a Saturday (UTC)
    const result = isWeekend(new Date(dateString));
    expect(result).toBe(true);
  });

  it("returns false for an invalid date input", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });
});
