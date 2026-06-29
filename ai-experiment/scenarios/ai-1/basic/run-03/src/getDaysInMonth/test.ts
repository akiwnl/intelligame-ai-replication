import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should return the number of days in February 2000 (leap year)", () => {
    expect(getDaysInMonth(new Date(2000, 1))).toBe(29); // Feb 2000
  });

  it("should return the number of days in February 2001 (common year)", () => {
    expect(getDaysInMonth(new Date(2001, 1))).toBe(28); // Feb 2001
  });

  it("should return the number of days in a 31-day month (January)", () => {
    expect(getDaysInMonth(new Date(2023, 0))).toBe(31); // Jan 2023
  });

  it("should return the number of days in a 30-day month (April)", () => {
    expect(getDaysInMonth(new Date(2023, 3))).toBe(30); // Apr 2023
  });

  it("should return NaN if the input date is invalid", () => {
    const invalidDate = new Date(NaN);
    expect(getDaysInMonth(invalidDate)).toBeNaN();
  });

  it("should accept a timestamp as date argument", () => {
    const timestamp = new Date(2024, 1, 15).getTime(); // Feb 2024 (leap year)
    expect(getDaysInMonth(timestamp)).toBe(29);
  });

  it("should accept a date string as date argument", () => {
    const dateString = "2023-06-01"; // June 2023 (30 days)
    expect(getDaysInMonth(dateString)).toBe(30);
  });
});
