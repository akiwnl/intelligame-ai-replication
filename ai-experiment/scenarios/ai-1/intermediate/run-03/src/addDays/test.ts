import { addDays } from "./index";

describe("addDays", () => {
  it("should add the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1); // September 1, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(11); // 1 + 10 = 11
  });

  it("should handle negative amounts, effectively subtracting days", () => {
    const date = new Date(2014, 8, 11); // September 11, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1); // 11 - 10 = 1
  });

  it("should handle adding days across month boundaries", () => {
    const date = new Date(2014, 0, 25); // January 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(4); // Jan 25 + 10 days = Feb 4
  });

  it("should handle adding days across year boundaries", () => {
    const date = new Date(2014, 11, 25); // December 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2015);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4); // Dec 25 + 10 days = Jan 4
  });

  it("should return an Invalid Date if the initial date is invalid", () => {
    const result = addDays(new Date(NaN), 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("should return an Invalid Date if the input is an invalid string", () => {
    const result = addDays("invalid date string", 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("should work with a timestamp as input", () => {
    const date = new Date(2014, 8, 1, 0, 0, 0, 0);
    const timestamp = date.getTime();
    const result = addDays(timestamp, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(11);
  });

  it("should preserve time information", () => {
    const date = new Date(2014, 8, 1, 10, 30, 45, 123);
    const result = addDays(date, 1);
    expect(result.getHours()).toBe(10);
    expect(result.getMinutes()).toBe(30);
    expect(result.getSeconds()).toBe(45);
    expect(result.getMilliseconds()).toBe(123);
  });
});
