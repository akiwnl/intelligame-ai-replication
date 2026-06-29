import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true if the given dates are equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });

  it("returns false if the given dates are not equal (different milliseconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("returns false if the given dates are not equal (different seconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 46, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("returns false if the given dates are not equal (different days)", () => {
    const date1 = new Date(2014, 6, 2);
    const date2 = new Date(2014, 6, 3);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("returns false if the given dates are not equal (different years)", () => {
    const date1 = new Date(2014, 6, 2);
    const date2 = new Date(2015, 6, 2);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("accepts timestamps as arguments", () => {
    const date1 = new Date(2014, 6, 2, 10, 0, 0).getTime();
    const date2 = new Date(2014, 6, 2, 10, 0, 0).getTime();
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });

  it("accepts date strings as arguments", () => {
    const result = isEqual("2014-07-02T10:00:00.000Z", "2014-07-02T10:00:00.000Z");
    expect(result).toBe(true);
  });

  it("returns false if one date is invalid", () => {
    const result = isEqual(new Date(NaN), new Date(2014, 6, 2));
    expect(result).toBe(false);
  });

  it("returns false if the other date is invalid", () => {
    const result = isEqual(new Date(2014, 6, 2), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if both dates are invalid", () => {
    const result = isEqual(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });

  it("handles different types of valid date inputs correctly", () => {
    const dateObj = new Date(2023, 0, 1, 12, 0, 0);
    const timestamp = dateObj.getTime();
    const isoString = dateObj.toISOString(); // This will be UTC, might need adjustment for local time comparison

    // Compare date object with timestamp
    expect(isEqual(dateObj, timestamp)).toBe(true);
    // Compare date object with string (assuming toDate handles local parsing)
    // For this specific test, we'll create a string that results in the same local date
    const localDateString = "2023-01-01T12:00:00"; // No Z, so local timezone
    expect(isEqual(dateObj, localDateString)).toBe(true);
  });
});
