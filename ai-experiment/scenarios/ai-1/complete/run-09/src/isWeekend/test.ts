import { isWeekend } from "./index";

describe("isWeekend", () => {
  // Test case 1: Sunday (is weekend)
  it("should return true for a Sunday", () => {
    const sunday = new Date(2023, 9, 1); // October 1, 2023 was a Sunday
    expect(isWeekend(sunday)).toBe(true);
  });

  // Test case 2: Saturday (is weekend)
  it("should return true for a Saturday", () => {
    const saturday = new Date(2023, 9, 7); // October 7, 2023 was a Saturday
    expect(isWeekend(saturday)).toBe(true);
  });

  // Test case 3: Monday (not weekend)
  it("should return false for a Monday", () => {
    const monday = new Date(2023, 9, 2); // October 2, 2023 was a Monday
    expect(isWeekend(monday)).toBe(false);
  });

  // Test case 4: Tuesday (not weekend)
  it("should return false for a Tuesday", () => {
    const tuesday = new Date(2023, 9, 3); // October 3, 2023 was a Tuesday
    expect(isWeekend(tuesday)).toBe(false);
  });

  // Test case 5: Wednesday (not weekend)
  it("should return false for a Wednesday", () => {
    const wednesday = new Date(2023, 9, 4); // October 4, 2023 was a Wednesday
    expect(isWeekend(wednesday)).toBe(false);
  });

  // Test case 6: Thursday (not weekend)
  it("should return false for a Thursday", () => {
    const thursday = new Date(2023, 9, 5); // October 5, 2023 was a Thursday
    expect(isWeekend(thursday)).toBe(false);
  });

  // Test case 7: Friday (not weekend)
  it("should return false for a Friday", () => {
    const friday = new Date(2023, 9, 6); // October 6, 2023 was a Friday
    expect(isWeekend(friday)).toBe(false);
  });

  // Test case 8: Invalid date input
  it("should return false for an invalid date input", () => {
    const invalidDate = new Date("not a date");
    expect(isWeekend(invalidDate)).toBe(false);
  });

  // Test case 9: Timestamp input (weekend)
  it("should work with timestamp input for a weekend date", () => {
    const saturdayTimestamp = new Date(2023, 9, 7).getTime(); // Saturday
    expect(isWeekend(saturdayTimestamp)).toBe(true);
  });

  // Test case 10: Timestamp input (weekday)
  it("should work with timestamp input for a weekday date", () => {
    const mondayTimestamp = new Date(2023, 9, 9).getTime(); // Monday
    expect(isWeekend(mondayTimestamp)).toBe(false);
  });

  // Test case 11: String input (weekend)
  it("should work with string input for a weekend date", () => {
    const sundayString = "2023-10-08T12:00:00"; // Oct 8, 2023 (Sunday, local time string)
    expect(isWeekend(sundayString)).toBe(true);
  });

  // Test case 12: String input (weekday)
  it("should work with string input for a weekday date", () => {
    const tuesdayString = "2023-10-10T12:00:00"; // Oct 10, 2023 (Tuesday, local time string)
    expect(isWeekend(tuesdayString)).toBe(false);
  });

  // Test case 13: Boundary check - beginning of Saturday
  it("should return true for the very beginning of Saturday", () => {
    const saturdayStart = new Date(2023, 9, 7, 0, 0, 0, 0);
    expect(isWeekend(saturdayStart)).toBe(true);
  });

  // Test case 14: Boundary check - end of Sunday
  it("should return true for the very end of Sunday", () => {
    const sundayEnd = new Date(2023, 9, 8, 23, 59, 59, 999);
    expect(isWeekend(sundayEnd)).toBe(true);
  });

  // Test case 15: Boundary check - end of Friday (not weekend)
  it("should return false for the very end of Friday", () => {
    const fridayEnd = new Date(2023, 9, 6, 23, 59, 59, 999);
    expect(isWeekend(fridayEnd)).toBe(false);
  });

  // Test case 16: Boundary check - beginning of Monday (not weekend)
  it("should return false for the very beginning of Monday", () => {
    const mondayStart = new Date(2023, 9, 9, 0, 0, 0, 0);
    expect(isWeekend(mondayStart)).toBe(false);
  });
});
