import { addDays } from "./index";

describe("addDays", () => {
  it("adds the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1); // September 1, 2014
    const result = addDays(date, 10);
    expect(result.getDate()).toBe(11);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getFullYear()).toBe(2014);
  });

  it("adds zero days to the given date", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 0);
    expect(result.getDate()).toBe(1);
    expect(result.getMonth()).toBe(8);
    expect(result.getFullYear()).toBe(2014);
  });

  it("subtracts days when the amount is negative", () => {
    const date = new Date(2014, 8, 11); // September 11, 2014
    const result = addDays(date, -10);
    expect(result.getDate()).toBe(1);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getFullYear()).toBe(2014);
  });

  it("handles month transitions correctly", () => {
    const date = new Date(2014, 0, 30); // January 30, 2014
    const result = addDays(date, 5); // Should be February 4, 2014
    expect(result.getDate()).toBe(4);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getFullYear()).toBe(2014);
  });

  it("handles year transitions correctly", () => {
    const date = new Date(2014, 11, 25); // December 25, 2014
    const result = addDays(date, 10); // Should be January 4, 2015
    expect(result.getDate()).toBe(4);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getFullYear()).toBe(2015);
  });

  it("handles leap year transitions correctly", () => {
    const date = new Date(2012, 1, 28); // February 28, 2012 (leap year)
    const result = addDays(date, 1); // Should be February 29, 2012
    expect(result.getDate()).toBe(29);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getFullYear()).toBe(2012);

    const result2 = addDays(date, 2); // Should be March 1, 2012
    expect(result2.getDate()).toBe(1);
    expect(result2.getMonth()).toBe(2); // March
    expect(result2.getFullYear()).toBe(2012);
  });

  it("accepts a timestamp as a date argument", () => {
    const date = new Date(2014, 8, 1).getTime(); // Timestamp for September 1, 2014
    const result = addDays(date, 10);
    expect(result.getDate()).toBe(11);
    expect(result.getMonth()).toBe(8);
    expect(result.getFullYear()).toBe(2014);
  });

  it("accepts a string as a date argument", () => {
    const date = "2014-09-01T00:00:00.000Z";
    const result = addDays(date, 10);
    // Note: When parsing from string, Date might be in UTC.
    // We'll test for the local date values as per toDate's description.
    expect(result.getUTCDate()).toBe(11);
    expect(result.getUTCMonth()).toBe(8);
    expect(result.getUTCFullYear()).toBe(2014);
  });

  it("returns an Invalid Date if the date is invalid", () => {
    const result = addDays(new Date(NaN), 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("returns an Invalid Date if the amount is not a number", () => {
    const date = new Date(2014, 8, 1);
    // @ts-expect-error - Testing invalid input
    const result = addDays(date, "abc");
    expect(isNaN(result.getTime())).toBe(true);
  });
});
