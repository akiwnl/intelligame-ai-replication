import { addDays } from "./index";

describe("addDays", () => {
  it("should add a positive amount of days to a date", () => {
    const date = new Date(2014, 8, 1); // Sep 1, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(11); // 1 + 10 = 11
  });

  it("should subtract a negative amount of days from a date", () => {
    const date = new Date(2014, 8, 11); // Sep 11, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1); // 11 - 10 = 1
  });

  it("should handle crossing month boundaries", () => {
    const date = new Date(2014, 0, 25); // Jan 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(4); // Jan 25 + 10 days = Feb 4
  });

  it("should handle crossing year boundaries", () => {
    const date = new Date(2014, 11, 25); // Dec 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2015);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4); // Dec 25 + 10 days = Jan 4
  });

  it("should return the same date if amount is zero", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 0);
    expect(result.getTime()).toBe(date.getTime());
  });

  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2023, 0, 1).getTime(); // Jan 1, 2023
    const result = addDays(timestamp, 30);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(31);
  });

  it("should return Invalid Date for an invalid date input", () => {
    const result = addDays(new Date(NaN), 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("should return Invalid Date for an invalid string input", () => {
    const result = addDays("invalid date string", 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("should handle leap years correctly", () => {
    const date = new Date(2020, 1, 28); // Feb 28, 2020 (leap year)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(29);

    const date2 = new Date(2020, 1, 29); // Feb 29, 2020 (leap year)
    const result2 = addDays(date2, 1);
    expect(result2.getFullYear()).toBe(2020);
    expect(result2.getMonth()).toBe(2); // March
    expect(result2.getDate()).toBe(1);
  });

  it("should not modify the original date object", () => {
    const originalDate = new Date(2014, 8, 1);
    const dateCopy = new Date(originalDate.getTime());
    addDays(originalDate, 10);
    expect(originalDate.getTime()).toBe(dateCopy.getTime());
  });
});
