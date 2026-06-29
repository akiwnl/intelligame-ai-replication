import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns the number of days in February of a leap year", () => {
    const date = new Date(2000, 1); // Feb 2000 (leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("returns the number of days in February of a non-leap year", () => {
    const date = new Date(2001, 1); // Feb 2001 (non-leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  it("returns the number of days in January (31 days)", () => {
    const date = new Date(2023, 0); // Jan 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("returns the number of days in April (30 days)", () => {
    const date = new Date(2023, 3); // Apr 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2023, 0, 15).getTime(); // Jan 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("accepts a date string", () => {
    const date = "2023-03-10T00:00:00.000Z"; // Mar 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("returns NaN for an invalid date", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN for an invalid date string", () => {
    const result = getDaysInMonth("invalid date");
    expect(isNaN(result)).toBe(true);
  });
});
