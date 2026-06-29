import { addDays } from "./index";

describe("addDays", () => {
  it("adds the given number of days to the date", () => {
    const date = new Date(2014, 8, 1); // Sep 1, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September (0-indexed)
    expect(result.getDate()).toBe(11);
  });

  it("handles negative amounts", () => {
    const date = new Date(2014, 8, 11); // Sep 11, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1);
  });

  it("handles adding zero days", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 0);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(1);
  });

  it("handles month transition", () => {
    const date = new Date(2014, 0, 30); // Jan 30, 2014
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(4);
  });

  it("handles year transition", () => {
    const date = new Date(2014, 11, 25); // Dec 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2015);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8, 1, 10, 30, 0).getTime();
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(11);
    expect(result.getHours()).toBe(10); // Time component should be preserved
    expect(result.getMinutes()).toBe(30);
  });

  it("accepts a date string", () => {
    // Using UTC string to avoid timezone issues with `getUTCDate`
    const date = "2014-09-01T00:00:00.000Z";
    const result = addDays(date, 10);
    expect(result.getUTCFullYear()).toBe(2014);
    expect(result.getUTCMonth()).toBe(8); // September (0-indexed)
    expect(result.getUTCDate()).toBe(11);
  });

  it("returns Invalid Date for an invalid date", () => {
    const result = addDays(new Date(NaN), 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("returns Invalid Date when amount is NaN", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, NaN);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("returns Invalid Date when both date and amount are invalid", () => {
    const result = addDays(new Date(NaN), NaN);
    expect(isNaN(result.getTime())).toBe(true);
  });
});
