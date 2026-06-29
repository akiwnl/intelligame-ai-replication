import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("should return 366 for a leap year", () => {
    expect(getDaysInYear(new Date(2012, 0, 1))).toBe(366); // 2012 is a leap year
    expect(getDaysInYear(new Date(2000, 0, 1))).toBe(366); // 2000 is a leap year
    expect(getDaysInYear(new Date(2024, 0, 1))).toBe(366); // 2024 is a leap year
  });

  it("should return 365 for a common year", () => {
    expect(getDaysInYear(new Date(2014, 0, 1))).toBe(365); // 2014 is a common year
    expect(getDaysInYear(new Date(2100, 0, 1))).toBe(365); // 2100 is not a leap year (divisible by 100 but not 400)
    expect(getDaysInYear(new Date(2023, 0, 1))).toBe(365); // 2023 is a common year
  });

  it("should return NaN if the input date is invalid", () => {
    const invalidDate = new Date(NaN);
    expect(getDaysInYear(invalidDate)).toBeNaN();
  });

  it("should accept a timestamp as date argument", () => {
    const timestamp = new Date(2024, 5, 15).getTime(); // 2024 is a leap year
    expect(getDaysInYear(timestamp)).toBe(366);
  });

  it("should accept a date string as date argument", () => {
    const dateString = "2023-01-01"; // 2023 is a common year
    expect(getDaysInYear(dateString)).toBe(365);
  });
});
