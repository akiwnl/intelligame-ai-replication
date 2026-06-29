import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns the number of days in February of a leap year", () => {
    const date = new Date(2000, 1); // February 2000 (leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("returns the number of days in February of a common year", () => {
    const date = new Date(2001, 1); // February 2001 (common year)
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  it("returns the number of days in a 31-day month", () => {
    const date = new Date(2023, 0); // January 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("returns the number of days in a 30-day month", () => {
    const date = new Date(2023, 3); // April 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("accepts a timestamp as a date argument", () => {
    const timestamp = new Date(2023, 10, 15).getTime(); // November 2023
    const result = getDaysInMonth(timestamp);
    expect(result).toBe(30);
  });

  it("accepts a string as a date argument", () => {
    const dateString = "2023-05-10T00:00:00Z"; // May 2023
    const result = getDaysInMonth(dateString);
    expect(result).toBe(31);
  });

  it("returns NaN if the date is invalid", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the input is an invalid string", () => {
    const result = getDaysInMonth("invalid date input");
    expect(isNaN(result)).toBe(true);
  });
});
