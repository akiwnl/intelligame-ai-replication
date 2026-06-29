import { getDate } from "./index";

describe("getDate", () => {
  it("should return the day of the month for a given date", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012
    expect(getDate(date)).toBe(29);
  });

  it("should return 1 for the first day of the month", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023
    expect(getDate(date)).toBe(1);
  });

  it("should return 31 for a date on the 31st", () => {
    const date = new Date(2023, 10, 31); // Nov 31 is invalid, JS Date corrects it to Dec 1.
    // toDate converts it correctly, so new Date(2023, 10, 31) becomes Dec 1, 2023
    // Let's use a valid 31st day
    const valid31st = new Date(2023, 0, 31); // Jan 31, 2023
    expect(getDate(valid31st)).toBe(31);
  });

  it("should return the correct day for a month with 30 days", () => {
    const date = new Date(2023, 3, 15); // Apr 15, 2023
    expect(getDate(date)).toBe(15);
  });

  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2023, 5, 15).getTime(); // Jun 15, 2023
    expect(getDate(timestamp)).toBe(15);
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should return NaN for an invalid string input", () => {
    const result = getDate("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
