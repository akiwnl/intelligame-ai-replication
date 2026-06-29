import { getDay } from "./index";

describe("getDay", () => {
  // Test case 1: Sunday
  it("should return 0 for Sunday", () => {
    const date = new Date(2024, 0, 7); // Jan 7, 2024 (Sunday)
    const result = getDay(date);
    expect(result).toBe(0);
  });

  // Test case 2: Monday
  it("should return 1 for Monday", () => {
    const date = new Date(2024, 0, 8); // Jan 8, 2024 (Monday)
    const result = getDay(date);
    expect(result).toBe(1);
  });

  // Test case 3: Tuesday (example from JSDoc)
  it("should return 3 for 29 February 2012 (Wednesday)", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012 (Wednesday)
    const result = getDay(date);
    expect(result).toBe(3);
  });

  // Test case 4: Wednesday
  it("should return 3 for Wednesday", () => {
    const date = new Date(2024, 0, 3); // Jan 3, 2024 (Wednesday)
    const result = getDay(date);
    expect(result).toBe(3);
  });

  // Test case 5: Thursday
  it("should return 4 for Thursday", () => {
    const date = new Date(2024, 0, 4); // Jan 4, 2024 (Thursday)
    const result = getDay(date);
    expect(result).toBe(4);
  });

  // Test case 6: Friday
  it("should return 5 for Friday", () => {
    const date = new Date(2024, 0, 5); // Jan 5, 2024 (Friday)
    const result = getDay(date);
    expect(result).toBe(5);
  });

  // Test case 7: Saturday
  it("should return 6 for Saturday", () => {
    const date = new Date(2024, 0, 6); // Jan 6, 2024 (Saturday)
    const result = getDay(date);
    expect(result).toBe(6);
  });

  // Test case 8: Invalid date input
  it("should return NaN if the input date is invalid", () => {
    const invalidDate = new Date("invalid date");
    const result = getDay(invalidDate);
    expect(isNaN(result)).toBe(true);
  });

  // Test case 9: Input as timestamp
  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2024, 0, 1).getTime(); // Jan 1, 2024 (Monday)
    const result = getDay(timestamp);
    expect(result).toBe(1);
  });

  // Test case 10: Input as date string
  it("should work with a date string as input", () => {
    const dateString = "2024-01-02T00:00:00.000Z"; // Jan 2, 2024 UTC (Tuesday)
    const result = getDay(dateString);
    // getDay returns local day, so it depends on timezone.
    // Let's create a local date from the UTC string to compare.
    const localDateFromUtc = new Date(dateString);
    expect(result).toBe(localDateFromUtc.getDay());
  });

  // Test case 11: Date with specific time
  it("should return the correct day of the week regardless of time", () => {
    const date = new Date(2024, 0, 7, 10, 30, 45, 123); // Jan 7, 2024 10:30:45.123 (Sunday)
    const result = getDay(date);
    expect(result).toBe(0);
  });
});
