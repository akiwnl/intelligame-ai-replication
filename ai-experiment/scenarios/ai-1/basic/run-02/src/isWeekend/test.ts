import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true for a Sunday", () => {
    const sunday = new Date(2014, 9, 5); // October 5, 2014 was a Sunday
    const result = isWeekend(sunday);
    expect(result).toBe(true);
  });

  it("should return true for a Saturday", () => {
    const saturday = new Date(2014, 9, 4); // October 4, 2014 was a Saturday
    const result = isWeekend(saturday);
    expect(result).toBe(true);
  });

  it("should return false for a Monday", () => {
    const monday = new Date(2014, 9, 6); // October 6, 2014 was a Monday
    const result = isWeekend(monday);
    expect(result).toBe(false);
  });

  it("should return false for a Wednesday", () => {
    const wednesday = new Date(2014, 9, 8); // October 8, 2014 was a Wednesday
    const result = isWeekend(wednesday);
    expect(result).toBe(false);
  });

  it("should work with a timestamp as input", () => {
    const saturdayTimestamp = new Date(2023, 10, 11).getTime(); // November 11, 2023 was a Saturday
    const result = isWeekend(saturdayTimestamp);
    expect(result).toBe(true);
  });

  it("should work with a date string as input", () => {
    const sundayString = "2023-10-29T12:00:00.000Z"; // October 29, 2023 UTC was a Sunday
    const result = isWeekend(sundayString);
    // Note: getDay() returns local day. If timezone shifts it, this test might be flaky.
    // Assuming local time doesn't shift the day for this specific UTC date.
    // October 29, 2023 was a Sunday.
    expect(result).toBe(true);
  });

  it("should handle invalid dates gracefully, returning false", () => {
    const invalidDate = new Date(NaN);
    const result = isWeekend(invalidDate);
    expect(result).toBe(false);
  });
});
