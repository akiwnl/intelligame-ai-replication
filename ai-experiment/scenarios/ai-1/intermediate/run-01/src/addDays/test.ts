import { addDays } from "./index";

describe("addDays", () => {
  it("should add a positive number of days to a date", () => {
    const date = new Date(2014, 8, 1); // September 1, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(11); // 1 + 10 = 11
  });

  it("should add a negative number of days to a date", () => {
    const date = new Date(2014, 8, 11); // September 11, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1); // 11 - 10 = 1
  });

  it("should handle adding days that cross month boundaries", () => {
    const date = new Date(2014, 0, 25); // January 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(4); // Jan 25 + 10 days = Feb 4
  });

  it("should handle adding days that cross year boundaries", () => {
    const date = new Date(2014, 11, 25); // December 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2015);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4); // Dec 25 + 10 days = Jan 4
  });

  it("should return the same date if amount is 0", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 0);
    expect(result.getTime()).toBe(date.getTime());
  });

  it("should work with a timestamp as input", () => {
    const date = new Date(2014, 8, 1).getTime();
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(6);
  });

  it("should work with a string as input", () => {
    const date = "2014-09-01T00:00:00.000Z";
    const result = addDays(date, 5);
    expect(result.getUTCFullYear()).toBe(2014);
    expect(result.getUTCMonth()).toBe(8);
    expect(result.getUTCDate()).toBe(6);
  });

  it("should handle invalid dates", () => {
    const date = new Date(NaN);
    const result = addDays(date, 10);
    expect(result.toString()).toBe("Invalid Date");
  });
});
