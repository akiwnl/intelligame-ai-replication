import { addDays } from "./index";

describe("addDays", () => {
  it("should add the specified number of days to the given date", () => {
    const initialDate = new Date(2014, 8, 1); // September 1, 2014
    const result = addDays(initialDate, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(11); // 1 + 10 days = 11
  });

  it("should handle negative amounts, effectively subtracting days", () => {
    const initialDate = new Date(2014, 8, 11); // September 11, 2014
    const result = addDays(initialDate, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1); // 11 - 10 days = 1
  });

  it("should handle crossing month boundaries", () => {
    const initialDate = new Date(2014, 0, 25); // January 25, 2014
    const result = addDays(initialDate, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(4); // Jan 25 + 10 days = Feb 4
  });

  it("should handle crossing year boundaries", () => {
    const initialDate = new Date(2014, 11, 25); // December 25, 2014
    const result = addDays(initialDate, 10);
    expect(result.getFullYear()).toBe(2015);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4); // Dec 25 + 10 days = Jan 4
  });

  it("should return the same date if amount is zero", () => {
    const initialDate = new Date(2014, 8, 1);
    const result = addDays(initialDate, 0);
    expect(result.getTime()).toBe(initialDate.getTime());
  });

  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2014, 8, 1).getTime();
    const result = addDays(timestamp, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(11);
  });

  it("should work with a date string as input", () => {
    const dateString = "2014-09-01T00:00:00.000Z"; // September 1, 2014 UTC
    const result = addDays(dateString, 10);
    // Note: toDate converts to local time, so the date might differ depending on timezone
    // We'll check the day of month in local time.
    expect(result.getUTCDate()).toBe(11); // If input is UTC, output should be consistent
  });

  it("should handle invalid dates gracefully", () => {
    const invalidDate = new Date(NaN);
    const result = addDays(invalidDate, 10);
    expect(result.toString()).toBe("Invalid Date");
  });
});
