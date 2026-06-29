import { addDays } from "./index";

describe("addDays", () => {
  // Test Case 1: Add a positive amount of days
  it("should add a positive number of days to a date", () => {
    const initialDate = new Date(2014, 8, 1); // September 1, 2014
    const result = addDays(initialDate, 10);
    const expectedDate = new Date(2014, 8, 11); // September 11, 2014
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Test Case 2: Add a negative amount of days
  it("should subtract a positive number of days from a date (add a negative amount)", () => {
    const initialDate = new Date(2014, 8, 11); // September 11, 2014
    const result = addDays(initialDate, -10);
    const expectedDate = new Date(2014, 8, 1); // September 1, 2014
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Test Case 3: Add zero days
  it("should return the same date when adding zero days", () => {
    const initialDate = new Date(2023, 10, 15, 10, 30, 0, 0); // Nov 15, 2023 10:30:00
    const result = addDays(initialDate, 0);
    expect(result.getTime()).toBe(initialDate.getTime());
  });

  // Test Case 4: Crossing month boundary (forward)
  it("should correctly handle crossing a month boundary forward", () => {
    const initialDate = new Date(2023, 0, 25); // Jan 25, 2023
    const result = addDays(initialDate, 10);
    const expectedDate = new Date(2023, 1, 4); // Feb 4, 2023
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Test Case 5: Crossing month boundary (backward)
  it("should correctly handle crossing a month boundary backward", () => {
    const initialDate = new Date(2023, 1, 5); // Feb 5, 2023
    const result = addDays(initialDate, -10);
    const expectedDate = new Date(2023, 0, 26); // Jan 26, 2023
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Test Case 6: Crossing year boundary (forward)
  it("should correctly handle crossing a year boundary forward", () => {
    const initialDate = new Date(2023, 11, 25); // Dec 25, 2023
    const result = addDays(initialDate, 10);
    const expectedDate = new Date(2024, 0, 4); // Jan 4, 2024
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Test Case 7: Crossing year boundary (backward)
  it("should correctly handle crossing a year boundary backward", () => {
    const initialDate = new Date(2024, 0, 5); // Jan 5, 2024
    const result = addDays(initialDate, -10);
    const expectedDate = new Date(2023, 11, 26); // Dec 26, 2023
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Test Case 8: Leap year (forward)
  it("should correctly handle dates around a leap year February 29 (forward)", () => {
    const initialDate = new Date(2024, 1, 28); // Feb 28, 2024 (leap year)
    const result = addDays(initialDate, 2);
    const expectedDate = new Date(2024, 2, 1); // Mar 1, 2024
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Test Case 9: Leap year (backward)
  it("should correctly handle dates around a leap year February 29 (backward)", () => {
    const initialDate = new Date(2024, 2, 1); // Mar 1, 2024 (leap year)
    const result = addDays(initialDate, -2);
    const expectedDate = new Date(2024, 1, 28); // Feb 28, 2024
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Test Case 10: Non-leap year (forward, crossing Feb)
  it("should correctly handle dates around a non-leap year February (forward)", () => {
    const initialDate = new Date(2023, 1, 28); // Feb 28, 2023 (non-leap year)
    const result = addDays(initialDate, 1);
    const expectedDate = new Date(2023, 2, 1); // Mar 1, 2023
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Test Case 11: Invalid date input
  it("should return an Invalid Date if the input date is invalid", () => {
    const result = addDays(new Date("invalid date"), 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Test Case 12: Invalid amount input (NaN)
  it("should return an Invalid Date if the amount is NaN", () => {
    const initialDate = new Date(2023, 10, 15);
    const result = addDays(initialDate, NaN);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Test Case 13: Invalid amount input (Infinity)
  it("should return an Invalid Date if the amount is Infinity", () => {
    const initialDate = new Date(2023, 10, 15);
    const result = addDays(initialDate, Infinity);
    expect(isNaN(result.getTime())).toBe(true); // Date.setDate(Infinity) results in Invalid Date
  });

  // Test Case 14: Input as timestamp
  it("should correctly add days when date is provided as a timestamp", () => {
    const initialTimestamp = new Date(2020, 0, 1).getTime(); // Jan 1, 2020
    const result = addDays(initialTimestamp, 30);
    const expectedDate = new Date(2020, 0, 31); // Jan 31, 2020
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Test Case 15: Input as string
  it("should correctly add days when date is provided as a string", () => {
    const initialDateString = "2020-01-01T00:00:00.000Z"; // Jan 1, 2020 UTC
    const result = addDays(initialDateString, 30);
    // Note: toDate converts to local time, so comparison should also be in local time
    const expectedDate = new Date("2020-01-31T00:00:00.000Z");
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Test Case 16: Preservation of time
  it("should preserve the time component of the date", () => {
    const initialDate = new Date(2023, 10, 15, 14, 30, 45, 123); // Nov 15, 2023 14:30:45.123
    const result = addDays(initialDate, 5);
    const expectedDate = new Date(2023, 10, 20, 14, 30, 45, 123); // Nov 20, 2023 14:30:45.123
    expect(result.getTime()).toBe(expectedDate.getTime());
  });
});
