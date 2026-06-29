import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  // Test Case 1: Example from JSDoc - February in a leap year
  it("should return 29 for February 2000 (leap year)", () => {
    const date = new Date(2000, 1); // Feb 2000
    expect(getDaysInMonth(date)).toBe(29);
  });

  // Test Case 2: February in a common year
  it("should return 28 for February 2023 (common year)", () => {
    const date = new Date(2023, 1); // Feb 2023
    expect(getDaysInMonth(date)).toBe(28);
  });

  // Test Case 3: Month with 31 days (January)
  it("should return 31 for January", () => {
    const date = new Date(2023, 0); // Jan 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test Case 4: Month with 31 days (March)
  it("should return 31 for March", () => {
    const date = new Date(2023, 2); // Mar 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test Case 5: Month with 31 days (May)
  it("should return 31 for May", () => {
    const date = new Date(2023, 4); // May 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test Case 6: Month with 31 days (July)
  it("should return 31 for July", () => {
    const date = new Date(2023, 6); // Jul 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test Case 7: Month with 31 days (August)
  it("should return 31 for August", () => {
    const date = new Date(2023, 7); // Aug 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test Case 8: Month with 31 days (October)
  it("should return 31 for October", () => {
    const date = new Date(2023, 9); // Oct 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test Case 9: Month with 31 days (December)
  it("should return 31 for December", () => {
    const date = new Date(2023, 11); // Dec 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test Case 10: Month with 30 days (April)
  it("should return 30 for April", () => {
    const date = new Date(2023, 3); // Apr 2023
    expect(getDaysInMonth(date)).toBe(30);
  });

  // Test Case 11: Month with 30 days (June)
  it("should return 30 for June", () => {
    const date = new Date(2023, 5); // Jun 2023
    expect(getDaysInMonth(date)).toBe(30);
  });

  // Test Case 12: Month with 30 days (September)
  it("should return 30 for September", () => {
    const date = new Date(2023, 8); // Sep 2023
    expect(getDaysInMonth(date)).toBe(30);
  });

  // Test Case 13: Month with 30 days (November)
  it("should return 30 for November", () => {
    const date = new Date(2023, 10); // Nov 2023
    expect(getDaysInMonth(date)).toBe(30);
  });

  // Test Case 14: Invalid date input
  it("should return NaN for an invalid date", () => {
    const result = getDaysInMonth(new Date("invalid date"));
    expect(isNaN(result)).toBe(true);
  });

  // Test Case 15: Input as timestamp
  it("should return the correct number of days when date is provided as a timestamp", () => {
    const timestamp = new Date(2024, 1, 15).getTime(); // Feb 15, 2024 (leap year)
    expect(getDaysInMonth(timestamp)).toBe(29);
  });

  // Test Case 16: Input as string
  it("should return the correct number of days when date is provided as a string", () => {
    const dateString = "2023-04-10T00:00:00.000Z"; // Apr 10, 2023 UTC
    const result = getDaysInMonth(dateString);
    expect(result).toBe(30);
  });

  // Test Case 17: Date with time component
  it("should ignore the time component and return only the days in the month", () => {
    const date = new Date(2023, 10, 15, 14, 30, 45, 123); // Nov 15, 2023 14:30:45.123
    expect(getDaysInMonth(date)).toBe(30);
  });

  // Test Case 18: Year 1900 (not a leap year)
  it("should return 28 for February 1900 (not a leap year)", () => {
    const date = new Date(1900, 1); // Feb 1900
    expect(getDaysInMonth(date)).toBe(28);
  });

  // Test Case 19: Year 2100 (not a leap year)
  it("should return 28 for February 2100 (not a leap year)", () => {
    const date = new Date(2100, 1); // Feb 2100
    expect(getDaysInMonth(date)).toBe(28);
  });
});
