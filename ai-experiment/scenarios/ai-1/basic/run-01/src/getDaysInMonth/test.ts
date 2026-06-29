import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should return 31 for January", () => {
    const date = new Date(2023, 0, 15); // January
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should return 29 for February in a leap year", () => {
    const date = new Date(2000, 1, 15); // February 2000 (leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("should return 28 for February in a non-leap year", () => {
    const date = new Date(2023, 1, 15); // February 2023 (non-leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  it("should return 31 for March", () => {
    const date = new Date(2023, 2, 15); // March
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should return 30 for April", () => {
    const date = new Date(2023, 3, 15); // April
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("should return 31 for May", () => {
    const date = new Date(2023, 4, 15); // May
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should return 30 for June", () => {
    const date = new Date(2023, 5, 15); // June
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("should return 31 for July", () => {
    const date = new Date(2023, 6, 15); // July
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should return 31 for August", () => {
    const date = new Date(2023, 7, 15); // August
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should return 30 for September", () => {
    const date = new Date(2023, 8, 15); // September
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("should return 31 for October", () => {
    const date = new Date(2023, 9, 15); // October
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should return 30 for November", () => {
    const date = new Date(2023, 10, 15); // November
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("should return 31 for December", () => {
    const date = new Date(2023, 11, 15); // December
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2024, 1, 1).getTime(); // Feb 2024 (leap)
    const result = getDaysInMonth(timestamp);
    expect(result).toBe(29);
  });

  it("should work with a date string as input", () => {
    const dateString = "2023-04-01T10:00:00Z"; // April
    const result = getDaysInMonth(dateString);
    expect(result).toBe(30);
  });
});
