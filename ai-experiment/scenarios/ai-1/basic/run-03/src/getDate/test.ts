import { getDate } from "./index";

describe("getDate", () => {
  it("should return the day of the month of the given date", () => {
    expect(getDate(new Date(2012, 1, 29))).toBe(29);
    expect(getDate(new Date(2014, 0, 1))).toBe(1);
    expect(getDate(new Date(2014, 11, 31))).toBe(31);
  });

  it("should return NaN if the input date is invalid", () => {
    const invalidDate = new Date(NaN);
    expect(getDate(invalidDate)).toBeNaN();
  });

  it("should accept a timestamp as date argument", () => {
    const timestamp = new Date(2023, 4, 15, 10, 30, 0).getTime();
    expect(getDate(timestamp)).toBe(15);
  });

  it("should accept a date string as date argument", () => {
    const dateString = "2023-11-20";
    expect(getDate(dateString)).toBe(20);
  });
});
