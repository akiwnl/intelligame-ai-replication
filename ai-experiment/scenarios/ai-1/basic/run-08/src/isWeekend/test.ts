import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true if the given date is a Sunday", () => {
    expect(isWeekend(new Date(2014, 9, 5))).toBe(true); // Oct 5, 2014 was a Sunday
    expect(isWeekend(new Date(2023, 0, 1))).toBe(true); // Jan 1, 2023 was a Sunday
  });

  it("should return true if the given date is a Saturday", () => {
    expect(isWeekend(new Date(2023, 0, 7))).toBe(true); // Jan 7, 2023 was a Saturday
    expect(isWeekend(new Date(2023, 10, 18))).toBe(true); // Nov 18, 2023 is a Saturday
  });

  it("should return false if the given date is a weekday (Monday)", () => {
    expect(isWeekend(new Date(2014, 9, 6))).toBe(false); // Oct 6, 2014 was a Monday
    expect(isWeekend(new Date(2023, 0, 2))).toBe(false); // Jan 2, 2023 was a Monday
  });

  it("should return false if the given date is a weekday (Wednesday)", () => {
    expect(isWeekend(new Date(2023, 10, 15))).toBe(false); // Nov 15, 2023 is a Wednesday
  });

  it("should return false for an invalid date", () => {
    expect(isWeekend(new Date(NaN))).toBe(false);
  });

  it("should accept a timestamp as an argument", () => {
    const sundayTimestamp = new Date(2023, 10, 19).getTime(); // Nov 19, 2023 is a Sunday
    expect(isWeekend(sundayTimestamp)).toBe(true);
    const mondayTimestamp = new Date(2023, 10, 20).getTime(); // Nov 20, 2023 is a Monday
    expect(isWeekend(mondayTimestamp)).toBe(false);
  });

  it("should accept a string as an argument", () => {
    // Assuming local timezone for new Date(string) for consistency with other tests
    // Or use UTC specific strings and compare with UTC dates for robustness
    // For `getDay`, local timezone is used.
    const saturdayString = "2023-11-25T12:00:00.000"; // Nov 25, 2023 (local time)
    expect(isWeekend(new Date(saturdayString))).toBe(true);
    const fridayString = "2023-11-24T12:00:00.000"; // Nov 24, 2023 (local time)
    expect(isWeekend(new Date(fridayString))).toBe(false);
  });
});
