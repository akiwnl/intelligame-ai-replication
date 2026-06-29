import { getDay } from "./index";

describe("getDay", () => {
  // Test case 1: Sunday (0)
  it("should return 0 for Sunday", () => {
    const date = new Date(2023, 9, 1); // Oct 1, 2023 was a Sunday
    expect(getDay(date)).toBe(0);
  });

  // Test case 2: Monday (1)
  it("should return 1 for Monday", () => {
    const date = new Date(2023, 9, 2); // Oct 2, 2023 was a Monday
    expect(getDay(date)).toBe(1);
  });

  // Test case 3: Tuesday (2)
  it("should return 2 for Tuesday", () => {
    const date = new Date(2023, 9, 3); // Oct 3, 2023 was a Tuesday
    expect(getDay(date)).toBe(2);
  });

  // Test case 4: Wednesday (3) - Example case
  it("should return 3 for Wednesday (example case)", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012 was a Wednesday
    expect(getDay(date)).toBe(3);
  });

  // Test case 5: Thursday (4)
  it("should return 4 for Thursday", () => {
    const date = new Date(2023, 9, 5); // Oct 5, 2023 was a Thursday
    expect(getDay(date)).toBe(4);
  });

  // Test case 6: Friday (5)
  it("should return 5 for Friday", () => {
    const date = new Date(2023, 9, 6); // Oct 6, 2023 was a Friday
    expect(getDay(date)).toBe(5);
  });

  // Test case 7: Saturday (6)
  it("should return 6 for Saturday", () => {
    const date = new Date(2023, 9, 7); // Oct 7, 2023 was a Saturday
    expect(getDay(date)).toBe(6);
  });

  // Test case 8: Input as a timestamp
  it("should work with a timestamp as input", () => {
    const date = new Date(2023, 9, 1).getTime(); // Oct 1, 2023 (Sunday)
    expect(getDay(date)).toBe(0);
  });

  // Test case 9: Input as a date string
  it("should work with a date string as input", () => {
    const dateString = "2023-10-02T10:00:00Z"; // Oct 2, 2023 (Monday)
    // toDate converts to local time, so ensure the weekday matches the local time interpretation.
    const localDate = new Date(dateString);
    expect(getDay(dateString)).toBe(localDate.getDay());
  });

  // Test case 10: Invalid date input
  it("should return NaN if the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    expect(isNaN(getDay(invalidDate))).toBe(true);
  });

  // Test case 11: Invalid date string input
  it("should return NaN if the date string is invalid", () => {
    expect(isNaN(getDay("invalid string"))).toBe(true);
  });

  // Test case 12: Date object with time components
  it("should return the day of the week regardless of time components", () => {
    const date = new Date(2023, 9, 1, 23, 59, 59, 999); // Oct 1, 2023 23:59:59.999 (Sunday)
    expect(getDay(date)).toBe(0);
  });
});
