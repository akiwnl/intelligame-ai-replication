import { addDays } from "./index";

describe("addDays", () => {
  it("should add the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1); // September 1, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(11); // 1 + 10 = 11
  });

  it("should handle adding negative days", () => {
    const date = new Date(2014, 8, 11); // September 11, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1); // 11 - 10 = 1
  });

  it("should handle crossing month boundaries forward", () => {
    const date = new Date(2014, 0, 30); // January 30, 2014
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(4); // Jan 30 + 5 days = Feb 4
  });

  it("should handle crossing month boundaries backward", () => {
    const date = new Date(2014, 1, 5); // February 5, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(26); // Feb 5 - 10 days = Jan 26
  });

  it("should handle crossing year boundaries forward", () => {
    const date = new Date(2014, 11, 25); // December 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2015);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4); // Dec 25 + 10 days = Jan 4, 2015
  });

  it("should handle crossing year boundaries backward", () => {
    const date = new Date(2015, 0, 5); // January 5, 2015
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(11); // December
    expect(result.getDate()).toBe(26); // Jan 5 - 10 days = Dec 26, 2014
  });

  it("should return Invalid Date if the input date is invalid", () => {
    const result = addDays(new Date(NaN), 10);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("should return Invalid Date if the input date string is invalid", () => {
    const result = addDays("invalid date string", 10);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("should not modify the original date object", () => {
    const originalDate = new Date(2023, 0, 15);
    const dateCopy = new Date(originalDate.getTime());
    addDays(originalDate, 5);
    expect(originalDate.getTime()).toEqual(dateCopy.getTime());
  });
});
