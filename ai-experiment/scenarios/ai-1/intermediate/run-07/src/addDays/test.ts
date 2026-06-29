import { addDays } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("addDays", () => {
  it("adds the given number of days to the date", () => {
    const date = new Date(2014, 8, 1); // 1 September 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(11); // 1 + 10 = 11
  });

  it("handles negative amount to subtract days", () => {
    const date = new Date(2014, 8, 11); // 11 September 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1); // 11 - 10 = 1
  });

  it("handles zero amount", () => {
    const date = new Date(2014, 8, 1); // 1 September 2014
    const result = addDays(date, 0);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1);
    expect(result.getTime()).toBe(date.getTime()); // Should be the same moment
  });

  it("rolls over to the next month/year correctly", () => {
    const date = new Date(2014, 0, 30); // 30 January 2014
    const result = addDays(date, 3); // Should become 2 February 2014
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(2);
  });

  it("rolls back to the previous month/year correctly", () => {
    const date = new Date(2014, 0, 2); // 2 January 2014
    const result = addDays(date, -3); // Should become 30 December 2013
    expect(result.getFullYear()).toBe(2013);
    expect(result.getMonth()).toBe(11); // December
    expect(result.getDate()).toBe(30);
  });

  it("accepts a timestamp as a date argument", () => {
    const date = new Date(2014, 8, 1).getTime(); // Timestamp for 1 September 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(11);
  });

  it("accepts a string as a date argument", () => {
    const dateString = "2014-09-01T00:00:00.000Z"; // 1 September 2014 UTC
    const result = addDays(dateString, 10);
    expect(result.getUTCDate()).toBe(11); // Check UTC date for string input
    expect(result.getUTCMonth()).toBe(8);
  });

  it("returns an Invalid Date for invalid date input", () => {
    const result = addDays(new Date(NaN), 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("returns an Invalid Date when amount is not a number", () => {
    const date = new Date(2014, 8, 1);
    // @ts-ignore - testing invalid input type
    const result = addDays(date, "abc");
    expect(isNaN(result.getTime())).toBe(true);
  });
});
