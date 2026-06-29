import { addDays } from "./index";

describe("addDays", () => {
  it("should add a positive number of days to a date", () => {
    const date = new Date(2014, 8, 1); // Sep 1, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(11); // 1 + 10 = 11
  });

  it("should subtract a negative number of days from a date", () => {
    const date = new Date(2014, 8, 11); // Sep 11, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1); // 11 - 10 = 1
  });

  it("should handle crossing month boundaries positively", () => {
    const date = new Date(2014, 8, 25); // Sep 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(9); // October
    expect(result.getDate()).toBe(5); // Sep 25 + 10 days = Oct 5
  });

  it("should handle crossing month boundaries negatively", () => {
    const date = new Date(2014, 8, 5); // Sep 5, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(7); // August
    expect(result.getDate()).toBe(26); // Sep 5 - 10 days = Aug 26
  });

  it("should handle crossing year boundaries positively", () => {
    const date = new Date(2014, 11, 25); // Dec 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2015);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4); // Dec 25 + 10 days = Jan 4, 2015
  });

  it("should handle crossing year boundaries negatively", () => {
    const date = new Date(2015, 0, 5); // Jan 5, 2015
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(11); // December
    expect(result.getDate()).toBe(26); // Jan 5 - 10 days = Dec 26, 2014
  });

  it("should not modify the original date object", () => {
    const date = new Date(2014, 8, 1);
    addDays(date, 10);
    expect(date.getDate()).toBe(1);
  });

  it("should return Invalid Date for an invalid date input", () => {
    const result = addDays(new Date(NaN), 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("should handle 0 days correctly", () => {
    const date = new Date(2023, 5, 15, 10, 30, 0);
    const result = addDays(date, 0);
    expect(result.getTime()).toBe(date.getTime());
  });

  it("should work with a timestamp as input", () => {
    const date = new Date(2014, 8, 1).getTime();
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(11);
  });

  it("should work with a date string as input", () => {
    const date = "2014-09-01T00:00:00.000Z";
    const result = addDays(date, 10);
    // Note: Date strings are often parsed as UTC, so local time might differ.
    // We'll check the UTC date to be precise, or adjust expectations.
    // For simplicity, let's assume `toDate` handles local time as per example.
    const expectedDate = new Date("2014-09-11T00:00:00.000Z");
    expect(result.toISOString().split('T')[0]).toBe(expectedDate.toISOString().split('T')[0]);
  });
});
