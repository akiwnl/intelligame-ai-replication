import { addDays } from "./index";

describe("addDays", () => {
  it("should add a positive number of days to a date", () => {
    const date = new Date(2014, 8, 1); // Sep 1, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(11); // 1 + 10 = 11
  });

  it("should add a negative number of days to a date", () => {
    const date = new Date(2014, 8, 11); // Sep 11, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1); // 11 - 10 = 1
  });

  it("should handle adding days across month boundaries", () => {
    const date = new Date(2014, 0, 30); // Jan 30, 2014
    const result = addDays(date, 3);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(2); // Jan 30 + 3 days = Feb 2
  });

  it("should handle adding days across year boundaries", () => {
    const date = new Date(2014, 11, 25); // Dec 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2015);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4); // Dec 25 + 10 days = Jan 4
  });

  it("should handle zero days", () => {
    const date = new Date(2014, 8, 1); // Sep 1, 2014
    const result = addDays(date, 0);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(1);
    expect(result.getTime()).toBe(date.getTime()); // Should be the exact same time value
  });

  it("should return Invalid Date for an invalid date input", () => {
    const result = addDays(new Date(NaN), 10);
    expect(result.toString()).toBe("Invalid Date");
  });

  it("should handle date as a timestamp", () => {
    const timestamp = new Date(2014, 8, 1).getTime();
    const result = addDays(timestamp, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(11);
  });

  it("should handle date as a string", () => {
    const dateString = "2014-09-01T00:00:00.000Z";
    const result = addDays(dateString, 10);
    // Note: When parsing ISO strings, Date objects are usually UTC.
    // The example uses local time, so let's adjust expectations.
    // For simplicity, let's just check the date components in local time.
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(11);
  });
});
