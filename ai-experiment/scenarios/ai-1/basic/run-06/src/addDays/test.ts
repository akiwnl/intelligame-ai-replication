import { addDays } from "./index";

describe("addDays", () => {
  it("should add the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1); // Sep 1, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September (0-indexed)
    expect(result.getDate()).toBe(11); // 1 + 10 = 11
  });

  it("should handle negative amounts to subtract days", () => {
    const date = new Date(2014, 8, 11); // Sep 11, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1); // 11 - 10 = 1
  });

  it("should correctly handle month transitions when adding days", () => {
    const date = new Date(2014, 8, 25); // Sep 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(9); // October
    expect(result.getDate()).toBe(5); // Sep 25 + 10 days = Oct 5
  });

  it("should correctly handle year transitions when adding days", () => {
    const date = new Date(2014, 11, 25); // Dec 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2015);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4); // Dec 25 + 10 days = Jan 4
  });

  it("should accept a timestamp as input", () => {
    const date = new Date(2014, 8, 1).getTime(); // Sep 1, 2014 timestamp
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(11);
  });

  it("should accept a date string as input", () => {
    // For consistency with example: new Date(year, month, day) creates local time.
    // When parsing strings, Date objects are often in UTC depending on format.
    // Let's create a date string from a known local date for reliable testing.
    const dateObj = new Date(2014, 8, 1, 12, 0, 0); // Sep 1, 2014 12:00:00 local
    const dateString = dateObj.toISOString();
    const result = addDays(dateString, 10);

    const expectedDate = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate() + 10, dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds(), dateObj.getMilliseconds());
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  it("should return an Invalid Date if the input date is invalid", () => {
    const result = addDays(new Date(NaN), 10);
    expect(result.toString()).toBe("Invalid Date");
  });

  it("should return an Invalid Date if the amount is NaN", () => {
    const result = addDays(new Date(2014, 8, 1), NaN);
    expect(result.toString()).toBe("Invalid Date");
  });
});
