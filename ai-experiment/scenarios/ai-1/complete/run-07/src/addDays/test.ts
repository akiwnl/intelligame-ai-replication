import { addDays } from "./index";

describe("addDays", () => {
  it("adds the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1); // September 1, 2014
    const result = addDays(date, 10);
    expect(result.toString()).toEqual(new Date(2014, 8, 11).toString()); // September 11, 2014
  });

  it("handles negative amounts to subtract days", () => {
    const date = new Date(2014, 8, 11); // September 11, 2014
    const result = addDays(date, -10);
    expect(result.toString()).toEqual(new Date(2014, 8, 1).toString()); // September 1, 2014
  });

  it("handles adding zero days", () => {
    const date = new Date(2024, 0, 15); // January 15, 2024
    const result = addDays(date, 0);
    expect(result.toString()).toEqual(new Date(2024, 0, 15).toString());
  });

  it("handles crossing month boundaries", () => {
    const date = new Date(2024, 0, 30); // January 30, 2024
    const result = addDays(date, 5);
    expect(result.toString()).toEqual(new Date(2024, 1, 4).toString()); // February 4, 2024
  });

  it("handles crossing year boundaries", () => {
    const date = new Date(2023, 11, 25); // December 25, 2023
    const result = addDays(date, 10);
    expect(result.toString()).toEqual(new Date(2024, 0, 4).toString()); // January 4, 2024
  });

  it("handles leap years correctly when adding days", () => {
    // Before leap day
    const date1 = new Date(2024, 1, 28); // February 28, 2024 (leap year)
    const result1 = addDays(date1, 1);
    expect(result1.toString()).toEqual(new Date(2024, 1, 29).toString()); // February 29, 2024

    // On leap day
    const date2 = new Date(2024, 1, 29); // February 29, 2024
    const result2 = addDays(date2, 1);
    expect(result2.toString()).toEqual(new Date(2024, 2, 1).toString()); // March 1, 2024
  });

  it("handles non-leap years correctly when adding days", () => {
    const date = new Date(2023, 1, 28); // February 28, 2023 (non-leap year)
    const result = addDays(date, 1);
    expect(result.toString()).toEqual(new Date(2023, 2, 1).toString()); // March 1, 2023
  });

  it("accepts a timestamp as the first argument", () => {
    const date = new Date(2014, 8, 1).getTime(); // September 1, 2014 as timestamp
    const result = addDays(date, 10);
    expect(result.toString()).toEqual(new Date(2014, 8, 11).toString());
  });

  it("accepts a date string as the first argument", () => {
    const date = "2014-09-01T00:00:00.000Z";
    const result = addDays(date, 10);
    // Note: Date parsing from string can be timezone dependent. For robust test,
    // ensure the comparison date is constructed in the same way or compare UTC.
    // For simplicity, using local time for comparison as per example.
    const expectedDate = new Date(2014, 8, 11);
    expect(result.getFullYear()).toEqual(expectedDate.getFullYear());
    expect(result.getMonth()).toEqual(expectedDate.getMonth());
    expect(result.getDate()).toEqual(expectedDate.getDate());
  });

  it("returns an Invalid Date if the given date is invalid", () => {
    const result = addDays(new Date(NaN), 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("returns an Invalid Date if the date string is invalid", () => {
    const result = addDays("invalid date string", 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("handles very large amounts", () => {
    const date = new Date(2000, 0, 1);
    const result = addDays(date, 365 * 100); // Add 100 years
    // 2000 + 100 years = 2100. 2100 is not a leap year.
    expect(result.getFullYear()).toBe(2100);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(1); // 1st
  });

  it("handles very small amounts (large negative)", () => {
    const date = new Date(2000, 0, 1);
    const result = addDays(date, -(365 * 100)); // Subtract 100 years
    // 2000 - 100 years = 1900. 1900 is not a leap year.
    expect(result.getFullYear()).toBe(1900);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(1); // 1st
  });
});
