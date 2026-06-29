import { getDay } from "./index";

describe("getDay", () => {
  it("should return the day of the week of the given date", () => {
    // Sunday - Saturday : 0 - 6
    expect(getDay(new Date(2012, 1, 29))).toBe(3); // Feb 29, 2012 was a Wednesday
    expect(getDay(new Date(2023, 9, 1))).toBe(0); // Oct 1, 2023 was a Sunday
    expect(getDay(new Date(2023, 9, 7))).toBe(6); // Oct 7, 2023 was a Saturday
    expect(getDay(new Date(2023, 9, 2))).toBe(1); // Oct 2, 2023 was a Monday
  });

  it("should return NaN if the input date is invalid", () => {
    const invalidDate = new Date(NaN);
    expect(getDay(invalidDate)).toBeNaN();
  });

  it("should accept a timestamp as date argument", () => {
    const timestamp = new Date(2023, 4, 16, 10, 30, 0).getTime(); // May 16, 2023, a Tuesday
    expect(getDay(timestamp)).toBe(2);
  });

  it("should accept a date string as date argument", () => {
    const dateString = "2023-11-20"; // Nov 20, 2023, a Monday
    expect(getDay(dateString)).toBe(1);
  });
});
