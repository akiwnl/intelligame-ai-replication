import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should return 31 for January", () => {
    const date = new Date(2023, 0, 15); // January
    expect(getDaysInMonth(date)).toBe(31);
  });

  it("should return 29 for February in a leap year (2000)", () => {
    const date = new Date(2000, 1, 15); // February 2000
    expect(getDaysInMonth(date)).toBe(29);
  });

  it("should return 29 for February in a leap year (2012)", () => {
    const date = new Date(2012, 1, 15); // February 2012
    expect(getDaysInMonth(date)).toBe(29);
  });

  it("should return 28 for February in a common year (2014)", () => {
    const date = new Date(2014, 1, 15); // February 2014
    expect(getDaysInMonth(date)).toBe(28);
  });

  it("should return 28 for February in a common year (2100 - not a leap year)", () => {
    const date = new Date(2100, 1, 15); // February 2100
    expect(getDaysInMonth(date)).toBe(28);
  });

  it("should return 30 for April", () => {
    const date = new Date(2023, 3, 15); // April
    expect(getDaysInMonth(date)).toBe(30);
  });

  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2023, 4, 1).getTime(); // May 1, 2023
    expect(getDaysInMonth(timestamp)).toBe(31);
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should return NaN for an invalid string input", () => {
    const result = getDaysInMonth("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
