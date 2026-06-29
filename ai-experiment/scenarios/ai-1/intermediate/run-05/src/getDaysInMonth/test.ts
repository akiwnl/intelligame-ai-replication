import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should return 29 for February 2000 (leap year)", () => {
    const date = new Date(2000, 1); // Feb 2000
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("should return 28 for February 2001 (non-leap year)", () => {
    const date = new Date(2001, 1); // Feb 2001
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  it("should return 31 for January", () => {
    const date = new Date(2023, 0); // Jan 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should return 30 for April", () => {
    const date = new Date(2023, 3); // Apr 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("should handle date as a timestamp", () => {
    const timestamp = new Date(2024, 1, 15).getTime(); // Feb 2024 (leap year)
    const result = getDaysInMonth(timestamp);
    expect(result).toBe(29);
  });

  it("should handle date as a string", () => {
    const dateString = "2023-09-01"; // Sep 2023
    const result = getDaysInMonth(dateString);
    expect(result).toBe(30);
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
