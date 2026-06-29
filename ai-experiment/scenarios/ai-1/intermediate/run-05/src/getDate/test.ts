import { getDate } from "./index";

describe("getDate", () => {
  it("should return the day of the month for a given date", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("should return the day of the month for the first day of the month", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("should return the day of the month for the last day of the month", () => {
    const date = new Date(2023, 10, 30); // Nov 30, 2023
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it("should handle date as a timestamp", () => {
    const timestamp = new Date(2023, 5, 15, 10, 30, 0).getTime(); // Jun 15, 2023
    const result = getDate(timestamp);
    expect(result).toBe(15);
  });

  it("should handle date as a string", () => {
    const dateString = "2023-07-20"; // Jul 20, 2023
    const result = getDate(dateString);
    expect(result).toBe(20);
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
