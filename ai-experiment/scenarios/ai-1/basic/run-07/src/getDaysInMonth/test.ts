import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns the number of days in February of a leap year", () => {
    const result = getDaysInMonth(new Date(2000, 1)); // Feb 2000 (leap year)
    expect(result).toBe(29);
  });

  it("returns the number of days in February of a common year", () => {
    const result = getDaysInMonth(new Date(2001, 1)); // Feb 2001 (common year)
    expect(result).toBe(28);
  });

  it("returns the number of days in January (31 days)", () => {
    const result = getDaysInMonth(new Date(2023, 0)); // Jan 2023
    expect(result).toBe(31);
  });

  it("returns the number of days in April (30 days)", () => {
    const result = getDaysInMonth(new Date(2023, 3)); // Apr 2023
    expect(result).toBe(30);
  });

  it("accepts a timestamp as a date", () => {
    const timestamp = new Date(2024, 1).getTime(); // Feb 2024 (leap year)
    const result = getDaysInMonth(timestamp);
    expect(result).toBe(29);
  });

  it("accepts a string as a date", () => {
    const dateString = "2023-02-15T00:00:00.000Z"; // Feb 2023
    const result = getDaysInMonth(dateString);
    expect(result).toBe(28);
  });

  it("returns NaN for an invalid date input", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
