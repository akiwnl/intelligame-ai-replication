import { addDays } from "./index";

describe("addDays", () => {
  it("adds the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1); // September 1st, 2014
    const result = addDays(date, 10);
    expect(result.getTime()).toBe(new Date(2014, 8, 11).getTime()); // September 11th, 2014
  });

  it("handles negative amount to subtract days", () => {
    const date = new Date(2014, 8, 11);
    const result = addDays(date, -10);
    expect(result.getTime()).toBe(new Date(2014, 8, 1).getTime());
  });

  it("returns the same date (cloned) if amount is 0", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 0);
    expect(result.getTime()).toBe(date.getTime());
    expect(result).not.toBe(date); // Should be a new instance
  });

  it("handles adding days across month boundaries", () => {
    const date = new Date(2014, 0, 25); // Jan 25th, 2014
    const result = addDays(date, 10);
    expect(result.getTime()).toBe(new Date(2014, 1, 4).getTime()); // Feb 4th, 2014
  });

  it("handles adding days across year boundaries", () => {
    const date = new Date(2014, 11, 25); // Dec 25th, 2014
    const result = addDays(date, 10);
    expect(result.getTime()).toBe(new Date(2015, 0, 4).getTime()); // Jan 4th, 2015
  });

  it("handles subtracting days across month boundaries", () => {
    const date = new Date(2014, 1, 5); // Feb 5th, 2014
    const result = addDays(date, -10);
    expect(result.getTime()).toBe(new Date(2014, 0, 26).getTime()); // Jan 26th, 2014
  });

  it("handles subtracting days across year boundaries", () => {
    const date = new Date(2015, 0, 5); // Jan 5th, 2015
    const result = addDays(date, -10);
    expect(result.getTime()).toBe(new Date(2014, 11, 26).getTime()); // Dec 26th, 2014
  });

  it("handles leap year February 29th when adding days", () => {
    const date = new Date(2020, 1, 28); // Feb 28th, 2020 (leap year)
    const result = addDays(date, 1);
    expect(result.getTime()).toBe(new Date(2020, 1, 29).getTime());
  });

  it("handles non-leap year February 28th when adding days", () => {
    const date = new Date(2021, 1, 28); // Feb 28th, 2021 (non-leap year)
    const result = addDays(date, 1);
    expect(result.getTime()).toBe(new Date(2021, 2, 1).getTime()); // March 1st, 2021
  });

  it("returns an Invalid Date if the input date is invalid", () => {
    const result = addDays(new Date(NaN), 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("accepts a timestamp as date argument", () => {
    const date = new Date(2014, 8, 1, 11, 30, 0);
    const timestamp = date.getTime();
    const result = addDays(timestamp, 10);
    expect(result.getTime()).toBe(new Date(2014, 8, 11, 11, 30, 0).getTime());
  });

  it("accepts a date string as date argument", () => {
    const dateString = "2014-09-01T00:00:00.000Z"; // UTC string
    const result = addDays(dateString, 10);
    // toDate converts to local time. So we expect a local date.
    // To make this robust, we create a date object from the string and add days to it.
    const expectedDate = new Date(dateString);
    expectedDate.setDate(expectedDate.getDate() + 10);
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  it("returns an Invalid Date if amount is NaN", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, NaN);
    expect(isNaN(result.getTime())).toBe(true);
  });
});
