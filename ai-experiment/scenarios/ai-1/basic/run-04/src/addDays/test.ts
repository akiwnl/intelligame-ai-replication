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

  it("should handle crossing month boundaries forward", () => {
    const date = new Date(2014, 0, 25); // Jan 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(4); // Jan 25 + 10 days = Feb 4
  });

  it("should handle crossing month boundaries backward", () => {
    const date = new Date(2014, 1, 5); // Feb 5, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(26); // Feb 5 - 10 days = Jan 26
  });

  it("should handle crossing year boundaries forward", () => {
    const date = new Date(2014, 11, 25); // Dec 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2015);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4); // Dec 25 + 10 days = Jan 4, 2015
  });

  it("should handle crossing year boundaries backward", () => {
    const date = new Date(2015, 0, 5); // Jan 5, 2015
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(11); // December
    expect(result.getDate()).toBe(26); // Jan 5 - 10 days = Dec 26, 2014
  });

  it("should return the same date if amount is 0", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 0);
    expect(result.getTime()).toBe(date.getTime());
  });

  it("should work with a leap year date", () => {
    const date = new Date(2020, 1, 28); // Feb 28, 2020 (leap year)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(29);
  });

  it("should work with a non-leap year date", () => {
    const date = new Date(2019, 1, 28); // Feb 28, 2019 (non-leap year)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2019);
    expect(result.getMonth()).toBe(2); // March
    expect(result.getDate()).toBe(1);
  });

  it("should return Invalid Date for an invalid date input", () => {
    const result = addDays(new Date(NaN), 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("should return Invalid Date if amount is NaN", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, NaN);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it("should accept a timestamp as date argument", () => {
    const date = new Date(2014, 8, 1, 11, 30, 30);
    const result = addDays(date.getTime(), 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(11);
    expect(result.getHours()).toBe(11);
    expect(result.getMinutes()).toBe(30);
    expect(result.getSeconds()).toBe(30);
  });

  it("should accept a date string as date argument", () => {
    const result = addDays("2014-09-01T11:30:30.000Z", 10);
    // Note: This will be in local time, so adjust expectations for timezone difference if needed.
    // For simplicity, let's just check the date components
    expect(result.getUTCFullYear()).toBe(2014);
    expect(result.getUTCMonth()).toBe(8);
    expect(result.getUTCDate()).toBe(11);
  });
});
