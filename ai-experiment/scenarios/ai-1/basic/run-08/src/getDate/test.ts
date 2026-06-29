import { getDate } from "./index";

describe("getDate", () => {
  it("should return the day of the month for the given date", () => {
    expect(getDate(new Date(2012, 1, 29))).toBe(29); // Feb 29, 2012
    expect(getDate(new Date(2023, 0, 1))).toBe(1); // Jan 1, 2023
    expect(getDate(new Date(2023, 10, 15, 10, 30, 0))).toBe(15); // Nov 15, 2023 with time
    expect(getDate(new Date(2023, 11, 31))).toBe(31); // Dec 31, 2023
  });

  it("should return NaN for an invalid date", () => {
    expect(getDate(new Date(NaN))).toBeNaN();
  });

  it("should accept a timestamp as an argument", () => {
    const date = new Date(2023, 4, 20, 10, 30, 0).getTime(); // May 20, 2023
    expect(getDate(date)).toBe(20);
  });

  it("should accept a string as an argument", () => {
    const date = "2023-07-25T14:00:00.000Z"; // July 25, 2023 (UTC)
    expect(getDate(date)).toBe(25);
  });
});
