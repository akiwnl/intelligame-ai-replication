import { addDays } from "./index";

describe("addDays", () => {
  // Test case from JSDoc example
  test("should add 10 days to 1 September 2014", () => {
    const date = new Date(2014, 8, 1); // September is month 8 (0-indexed)
    const expected = new Date(2014, 8, 11);
    expect(addDays(date, 10)).toEqual(expected);
  });

  // Test adding zero days
  test("should return the same date when adding 0 days", () => {
    const date = new Date(2023, 0, 15, 10, 30, 0);
    const expected = new Date(2023, 0, 15, 10, 30, 0);
    expect(addDays(date, 0)).toEqual(expected);
  });

  // Test adding negative days
  test("should subtract days when amount is negative", () => {
    const date = new Date(2023, 0, 15);
    const expected = new Date(2023, 0, 5);
    expect(addDays(date, -10)).toEqual(expected);
  });

  // Test crossing month boundary forward
  test("should correctly cross month boundary forward", () => {
    const date = new Date(2023, 0, 30); // Jan 30
    const expected = new Date(2023, 1, 2); // Feb 2
    expect(addDays(date, 3)).toEqual(expected);
  });

  // Test crossing month boundary backward
  test("should correctly cross month boundary backward", () => {
    const date = new Date(2023, 1, 2); // Feb 2
    const expected = new Date(2023, 0, 30); // Jan 30
    expect(addDays(date, -3)).toEqual(expected);
  });

  // Test crossing year boundary forward
  test("should correctly cross year boundary forward", () => {
    const date = new Date(2023, 11, 30); // Dec 30
    const expected = new Date(2024, 0, 2); // Jan 2
    expect(addDays(date, 3)).toEqual(expected);
  });

  // Test crossing year boundary backward
  test("should correctly cross year boundary backward", () => {
    const date = new Date(2024, 0, 2); // Jan 2
    const expected = new Date(2023, 11, 30); // Dec 30
    expect(addDays(date, -3)).toEqual(expected);
  });

  // Test with leap year (Feb 29)
  test("should handle leap year correctly when adding days", () => {
    const date = new Date(2024, 1, 28); // Feb 28, 2024 (leap year)
    const expected = new Date(2024, 1, 29); // Feb 29
    expect(addDays(date, 1)).toEqual(expected);

    const date2 = new Date(2024, 1, 29); // Feb 29, 2024
    const expected2 = new Date(2024, 2, 1); // Mar 1
    expect(addDays(date2, 1)).toEqual(expected2);
  });

  // Test with non-leap year (Feb 28)
  test("should handle non-leap year correctly when adding days", () => {
    const date = new Date(2023, 1, 28); // Feb 28, 2023 (non-leap year)
    const expected = new Date(2023, 2, 1); // Mar 1
    expect(addDays(date, 1)).toEqual(expected);
  });

  // Test with large number of days
  test("should handle large amounts of days", () => {
    const date = new Date(2000, 0, 1);
    const expected = new Date(2001, 0, 1); // 366 days in 2000 (leap year)
    expect(addDays(date, 366)).toEqual(expected);

    const date2 = new Date(2001, 0, 1);
    const expected2 = new Date(2002, 0, 1); // 365 days in 2001 (non-leap year)
    expect(addDays(date2, 365)).toEqual(expected2);
  });

  // Test with different input types for date
  test("should work with a Date object", () => {
    const date = new Date(2023, 4, 15);
    const expected = new Date(2023, 4, 17);
    expect(addDays(date, 2)).toEqual(expected);
  });

  test("should work with a timestamp", () => {
    const timestamp = new Date(2023, 4, 15).getTime();
    const expected = new Date(2023, 4, 17);
    expect(addDays(timestamp, 2)).toEqual(expected);
  });

  test("should work with a date string", () => {
    const dateString = "2023-05-15T12:00:00.000Z"; // UTC string
    const expected = new Date("2023-05-17T12:00:00.000Z"); // Expect UTC result
    // Note: toDate converts to local time, so comparing UTC string with local Date might be tricky.
    // Let's ensure the output is consistent with the input type or local time parsing.
    // For `toDate` it's `new Date(argument)` which respects string format.
    const result = addDays(dateString, 2);
    expect(result.toISOString()).toBe(expected.toISOString()); // Compare ISO strings for exact match
  });

  // Test with invalid date input
  test("should return Invalid Date when the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    expect(addDays(invalidDate, 5).toString()).toBe("Invalid Date");
  });

  test("should return Invalid Date when the input timestamp is NaN", () => {
    expect(addDays(NaN, 5).toString()).toBe("Invalid Date");
  });

  test("should return Invalid Date when the input string is invalid", () => {
    expect(addDays("invalid date string", 5).toString()).toBe("Invalid Date");
  });

  // Test with non-finite amount
  test("should return Invalid Date when amount is NaN", () => {
    const date = new Date(2023, 0, 1);
    expect(addDays(date, NaN).toString()).toBe("Invalid Date");
  });

  test("should return Invalid Date when amount is Infinity", () => {
    const date = new Date(2023, 0, 1);
    expect(addDays(date, Infinity).toString()).toBe("Invalid Date");
  });

  test("should return Invalid Date when amount is -Infinity", () => {
    const date = new Date(2023, 0, 1);
    expect(addDays(date, -Infinity).toString()).toBe("Invalid Date");
  });
});
