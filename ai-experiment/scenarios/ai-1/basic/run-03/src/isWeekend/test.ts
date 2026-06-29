import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true if the given date is a Sunday", () => {
    expect(isWeekend(new Date(2014, 9, 5))).toBe(true); // Oct 5, 2014 was a Sunday
  });

  it("should return true if the given date is a Saturday", () => {
    expect(isWeekend(new Date(2023, 10, 18))).toBe(true); // Nov 18, 2023 is a Saturday
  });

  it("should return false if the given date is a weekday (Monday)", () => {
    expect(isWeekend(new Date(2023, 10, 20))).toBe(false); // Nov 20, 2023 is a Monday
  });

  it("should return false if the given date is a weekday (Wednesday)", () => {
    expect(isWeekend(new Date(2012, 1, 29))).toBe(false); // Feb 29, 2012 was a Wednesday
  });

  it("should return false if the given date is invalid", () => {
    const invalidDate = new Date(NaN);
    expect(isWeekend(invalidDate)).toBe(false);
  });

  it("should accept a timestamp as date argument", () => {
    const sundayTimestamp = new Date(2023, 10, 19).getTime(); // Nov 19, 2023 is a Sunday
    expect(isWeekend(sundayTimestamp)).toBe(true);

    const mondayTimestamp = new Date(2023, 10, 20).getTime(); // Nov 20, 2023 is a Monday
    expect(isWeekend(mondayTimestamp)).toBe(false);
  });

  it("should accept a date string as date argument", () => {
    const saturdayString = "2023-11-25"; // Nov 25, 2023 is a Saturday
    expect(isWeekend(saturdayString)).toBe(true);

    const fridayString = "2023-11-24"; // Nov 24, 2023 is a Friday
    expect(isWeekend(fridayString)).toBe(false);
  });
});
