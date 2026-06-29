import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should return 29 for February 2000 (leap year)", () => {
    const date = new Date(2000, 1); // February 2000
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("should return 28 for February 2001 (common year)", () => {
    const date = new Date(2001, 1); // February 2001
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  it("should return 31 for January", () => {
    const date = new Date(2023, 0); // January 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should return 30 for April", () => {
    const date = new Date(2023, 3); // April 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("should return 31 for December", () => {
    const date = new Date(2023, 11); // December 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should work with a timestamp as input", () => {
    const date = new Date(2023, 4, 15).getTime(); // May 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should work with a string as input", () => {
    const date = "2023-06-20T10:00:00.000Z"; // June 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("should handle invalid dates", () => {
    const date = new Date(NaN);
    const result = getDaysInMonth(date);
    expect(isNaN(result)).toBe(true);
  });
});
