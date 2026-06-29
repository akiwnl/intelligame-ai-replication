import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true for a Sunday", () => {
    const sunday = new Date(2014, 9, 5); // Oct 5, 2014 was a Sunday
    const result = isWeekend(sunday);
    expect(result).toBe(true);
  });

  it("should return true for a Saturday", () => {
    const saturday = new Date(2014, 9, 4); // Oct 4, 2014 was a Saturday
    const result = isWeekend(saturday);
    expect(result).toBe(true);
  });

  it("should return false for a Monday", () => {
    const monday = new Date(2014, 9, 6); // Oct 6, 2014 was a Monday
    const result = isWeekend(monday);
    expect(result).toBe(false);
  });

  it("should return false for a Wednesday", () => {
    const wednesday = new Date(2014, 9, 8); // Oct 8, 2014 was a Wednesday
    const result = isWeekend(wednesday);
    expect(result).toBe(false);
  });

  it("should return false for a Friday", () => {
    const friday = new Date(2014, 9, 3); // Oct 3, 2014 was a Friday
    const result = isWeekend(friday);
    expect(result).toBe(false);
  });

  it("should return false for an invalid date input", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });

  it("should accept a timestamp as date argument", () => {
    const sundayTimestamp = new Date(2023, 9, 29, 10, 0, 0).getTime(); // Oct 29, 2023 is a Sunday
    const mondayTimestamp = new Date(2023, 9, 30, 10, 0, 0).getTime(); // Oct 30, 2023 is a Monday
    expect(isWeekend(sundayTimestamp)).toBe(true);
    expect(isWeekend(mondayTimestamp)).toBe(false);
  });

  it("should accept a date string as date argument", () => {
    const saturdayString = "2023-10-28T14:30:00.000Z"; // Oct 28, 2023 is a Saturday
    const tuesdayString = "2023-10-24T14:30:00.000Z"; // Oct 24, 2023 is a Tuesday
    expect(isWeekend(saturdayString)).toBe(true);
    expect(isWeekend(tuesdayString)).toBe(false);
  });
});
