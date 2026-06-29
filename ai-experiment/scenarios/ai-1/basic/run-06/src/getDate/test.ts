import { getDate } from "./index";

describe("getDate", () => {
  it("should return the day of the month for a given date", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("should return 1 for the first day of the month", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("should return the correct day for a date in the middle of the month", () => {
    const date = new Date(2023, 5, 15); // June 15, 2023
    const result = getDate(date);
    expect(result).toBe(15);
  });

  it("should accept a timestamp as input", () => {
    const timestamp = new Date(2023, 10, 20).getTime(); // November 20, 2023
    const result = getDate(timestamp);
    expect(result).toBe(20);
  });

  it("should accept a date string as input", () => {
    const dateString = "2023-03-05T10:00:00.000Z"; // March 5, 2023
    const result = getDate(dateString);
    expect(result).toBe(5);
  });

  it("should return NaN if the input date is invalid", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
