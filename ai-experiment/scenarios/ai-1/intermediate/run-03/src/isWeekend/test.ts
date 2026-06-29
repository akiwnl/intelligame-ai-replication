import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true for a Sunday", () => {
    const sunday = new Date(2014, 9, 5); // October 5, 2014 was a Sunday
    expect(isWeekend(sunday)).toBe(true);
  });

  it("should return true for a Saturday", () => {
    const saturday = new Date(2014, 9, 4); // October 4, 2014 was a Saturday
    expect(isWeekend(saturday)).toBe(true);
  });

  it("should return false for a Monday", () => {
    const monday = new Date(2014, 9, 6); // October 6, 2014 was a Monday
    expect(isWeekend(monday)).toBe(false);
  });

  it("should return false for a Wednesday", () => {
    const wednesday = new Date(2014, 9, 8); // October 8, 2014 was a Wednesday
    expect(isWeekend(wednesday)).toBe(false);
  });

  it("should return false for a Friday", () => {
    const friday = new Date(2014, 9, 3); // October 3, 2014 was a Friday
    expect(isWeekend(friday)).toBe(false);
  });

  it("should work with a timestamp as input", () => {
    const saturdayTimestamp = new Date(2023, 10, 11).getTime(); // Nov 11, 2023 was a Saturday
    expect(isWeekend(saturdayTimestamp)).toBe(true);

    const tuesdayTimestamp = new Date(2023, 10, 7).getTime(); // Nov 7, 2023 was a Tuesday
    expect(isWeekend(tuesdayTimestamp)).toBe(false);
  });

  it("should work with a date string as input", () => {
    const sundayString = "2023-11-12T10:00:00Z"; // Nov 12, 2023 was a Sunday (UTC)
    expect(isWeekend(sundayString)).toBe(true);

    const thursdayString = "2023-11-09T10:00:00Z"; // Nov 9, 2023 was a Thursday (UTC)
    expect(isWeekend(thursdayString)).toBe(false);
  });

  it("should return false if the date is invalid", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });

  it("should return false if the input is an invalid string", () => {
    const result = isWeekend("invalid date string");
    expect(result).toBe(false);
  });
});
