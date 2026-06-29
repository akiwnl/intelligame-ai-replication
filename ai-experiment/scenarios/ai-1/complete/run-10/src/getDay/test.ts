import { getDay } from "./index";

describe("getDay", () => {
  // Test case 1: Sunday (0)
  it("should return 0 for Sunday", () => {
    const date = new Date(2024, 0, 7); // Jan 7, 2024 was a Sunday
    expect(getDay(date)).toBe(0);
  });

  // Test case 2: Monday (1)
  it("should return 1 for Monday", () => {
    const date = new Date(2024, 0, 8); // Jan 8, 2024 was a Monday
    expect(getDay(date)).toBe(1);
  });

  // Test case 3: Tuesday (2)
  it("should return 2 for Tuesday", () => {
    const date = new Date(2024, 0, 9); // Jan 9, 2024 was a Tuesday
    expect(getDay(date)).toBe(2);
  });

  // Test case 4: Wednesday (3)
  it("should return 3 for Wednesday", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012 was a Wednesday
    expect(getDay(date)).toBe(3);
  });

  // Test case 5: Thursday (4)
  it("should return 4 for Thursday", () => {
    const date = new Date(2024, 0, 4); // Jan 4, 2024 was a Thursday
    expect(getDay(date)).toBe(4);
  });

  // Test case 6: Friday (5)
  it("should return 5 for Friday", () => {
    const date = new Date(2024, 0, 5); // Jan 5, 2024 was a Friday
    expect(getDay(date)).toBe(5);
  });

  // Test case 7: Saturday (6)
  it("should return 6 for Saturday", () => {
    const date = new Date(2024, 0, 6); // Jan 6, 2024 was a Saturday
    expect(getDay(date)).toBe(6);
  });

  // Test case 8: Invalid date input
  it("should return NaN for an invalid date", () => {
    const result = getDay(new Date("invalid date"));
    expect(isNaN(result)).toBe(true);
  });

  // Test case 9: Input as timestamp
  it("should work with a timestamp as input", () => {
    const date = new Date(2024, 0, 1).getTime(); // Jan 1, 2024 was a Monday
    expect(getDay(date)).toBe(1);
  });

  // Test case 10: Input as date string
  it("should work with a date string as input", () => {
    const dateString = "2024-01-02"; // Jan 2, 2024 was a Tuesday
    const result = getDay(dateString);
    expect(result).toBe(2);
  });

  // Test case 11: Date at year start
  it("should correctly identify day of week at year start", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023 was a Sunday
    expect(getDay(date)).toBe(0);
  });

  // Test case 12: Date at year end
  it("should correctly identify day of week at year end", () => {
    const date = new Date(2023, 11, 31); // Dec 31, 2023 was a Sunday
    expect(getDay(date)).toBe(0);
  });
});
