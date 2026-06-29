import { getDate } from "./index";

describe("getDate", () => {
  it("should return the day of the month for a given date", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 (leap year)
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("should return the day of the month for a date in a 31-day month", () => {
    const date = new Date(2023, 0, 15); // January 15, 2023
    const result = getDate(date);
    expect(result).toBe(15);
  });

  it("should return the day of the month for a date in a 30-day month", () => {
    const date = new Date(2023, 3, 30); // April 30, 2023
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it("should return the day of the month for the first day of a month", () => {
    const date = new Date(2023, 5, 1); // June 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("should return the day of the month for the last day of a month", () => {
    const date = new Date(2023, 10, 30); // November 30, 2023
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should accept a timestamp as date argument", () => {
    const timestamp = new Date(2023, 7, 22, 10, 0, 0).getTime(); // Aug 22, 2023
    const result = getDate(timestamp);
    expect(result).toBe(22);
  });

  it("should accept a date string as date argument", () => {
    const result = getDate("2023-12-05T14:30:00.000Z"); // Dec 5, 2023
    expect(result).toBe(5);
  });
});
