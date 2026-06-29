import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should return the number of days in February of a leap year", () => {
    expect(getDaysInMonth(new Date(2000, 1))).toBe(29); // Feb 2000 (leap)
    expect(getDaysInMonth(new Date(2012, 1))).toBe(29); // Feb 2012 (leap)
    expect(getDaysInMonth(new Date(2024, 1))).toBe(29); // Feb 2024 (leap)
  });

  it("should return the number of days in February of a common year", () => {
    expect(getDaysInMonth(new Date(2001, 1))).toBe(28); // Feb 2001 (common)
    expect(getDaysInMonth(new Date(2014, 1))).toBe(28); // Feb 2014 (common)
    expect(getDaysInMonth(new Date(2023, 1))).toBe(28); // Feb 2023 (common)
  });

  it("should return the number of days in a 31-day month", () => {
    expect(getDaysInMonth(new Date(2023, 0))).toBe(31); // Jan
    expect(getDaysInMonth(new Date(2023, 2))).toBe(31); // Mar
    expect(getDaysInMonth(new Date(2023, 4))).toBe(31); // May
    expect(getDaysInMonth(new Date(2023, 6))).toBe(31); // Jul
    expect(getDaysInMonth(new Date(2023, 7))).toBe(31); // Aug
    expect(getDaysInMonth(new Date(2023, 9))).toBe(31); // Oct
    expect(getDaysInMonth(new Date(2023, 11))).toBe(31); // Dec
  });

  it("should return the number of days in a 30-day month", () => {
    expect(getDaysInMonth(new Date(2023, 3))).toBe(30); // Apr
    expect(getDaysInMonth(new Date(2023, 5))).toBe(30); // Jun
    expect(getDaysInMonth(new Date(2023, 8))).toBe(30); // Sep
    expect(getDaysInMonth(new Date(2023, 10))).toBe(30); // Nov
  });

  it("should return NaN for an invalid date", () => {
    expect(getDaysInMonth(new Date(NaN))).toBeNaN();
  });

  it("should accept a timestamp as an argument", () => {
    const date = new Date(2023, 1, 15).getTime(); // Feb 2023 (common year)
    expect(getDaysInMonth(date)).toBe(28);
  });

  it("should accept a string as an argument", () => {
    const date = "2024-02-10T14:00:00.000Z"; // Feb 2024 (leap year)
    expect(getDaysInMonth(date)).toBe(29);
  });
});
