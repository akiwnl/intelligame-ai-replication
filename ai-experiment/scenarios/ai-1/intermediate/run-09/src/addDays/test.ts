import { addDays } from "./index";

describe("addDays", () => {
  it("should add the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1); // September 1, 2014
    const result = addDays(date, 10);
    expect(result).toEqual(new Date(2014, 8, 11)); // September 11, 2014
  });

  it("should handle negative amounts", () => {
    const date = new Date(2014, 8, 11);
    const result = addDays(date, -10);
    expect(result).toEqual(new Date(2014, 8, 1));
  });

  it("should handle zero amount", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 0);
    expect(result).toEqual(new Date(2014, 8, 1));
  });

  it("should correctly cross month boundaries", () => {
    const date = new Date(2014, 0, 30); // January 30, 2014
    const result = addDays(date, 5);
    expect(result).toEqual(new Date(2014, 1, 4)); // February 4, 2014
  });

  it("should correctly cross year boundaries", () => {
    const date = new Date(2014, 11, 25); // December 25, 2014
    const result = addDays(date, 10);
    expect(result).toEqual(new Date(2015, 0, 4)); // January 4, 2015
  });

  it("should handle leap years correctly", () => {
    const date = new Date(2020, 1, 28); // February 28, 2020 (leap year)
    const result = addDays(date, 1);
    expect(result).toEqual(new Date(2020, 1, 29)); // February 29, 2020
  });

  it("should return an Invalid Date if the input date is invalid", () => {
    const result = addDays(new Date(NaN), 5);
    expect(result.toString()).toBe("Invalid Date");
  });

  it("should accept a timestamp as input", () => {
    const date = new Date(2014, 8, 1).getTime();
    const result = addDays(date, 10);
    expect(result).toEqual(new Date(2014, 8, 11));
  });

  it("should accept a string as input", () => {
    const date = "2014-09-01T00:00:00.000Z";
    const result = addDays(date, 10);
    // Note: When parsing strings, Date objects might be UTC or local depending on format.
    // Ensure comparison is appropriate. Here, we'll assume it's parsed as local time.
    const expectedDate = new Date(date);
    expectedDate.setDate(expectedDate.getDate() + 10);
    expect(result.toISOString()).toEqual(expectedDate.toISOString());
  });
});
