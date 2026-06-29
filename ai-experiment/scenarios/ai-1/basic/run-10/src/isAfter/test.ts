import { isAfter } from "./index";

describe("isAfter", () => {
  it("returns true if the first date is after the second date", () => {
    const date = new Date(1989, 6, 10); // July 10, 1989
    const dateToCompare = new Date(1987, 1, 11); // Feb 11, 1987
    expect(isAfter(date, dateToCompare)).toBe(true);
  });

  it("returns false if the first date is before the second date", () => {
    const date = new Date(1987, 1, 11);
    const dateToCompare = new Date(1989, 6, 10);
    expect(isAfter(date, dateToCompare)).toBe(false);
  });

  it("returns false if the first date is equal to the second date", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1989, 6, 10);
    expect(isAfter(date, dateToCompare)).toBe(false);
  });

  it("returns false if the first date is equal to the second date (different time, same day)", () => {
    const date = new Date(1989, 6, 10, 12, 0, 0);
    const dateToCompare = new Date(1989, 6, 10, 11, 59, 59, 999);
    expect(isAfter(date, dateToCompare)).toBe(true);
  });

  it("accepts timestamps", () => {
    const date = new Date(1989, 6, 10).getTime();
    const dateToCompare = new Date(1987, 1, 11).getTime();
    expect(isAfter(date, dateToCompare)).toBe(true);
  });

  it("accepts date strings", () => {
    const date = "1989-07-10T00:00:00.000Z";
    const dateToCompare = "1987-02-11T00:00:00.000Z";
    expect(isAfter(date, dateToCompare)).toBe(true);
  });

  it("returns false for an invalid first date", () => {
    const date = new Date(NaN);
    const dateToCompare = new Date(1987, 1, 11);
    expect(isAfter(date, dateToCompare)).toBe(false);
  });

  it("returns false for an invalid second date", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(NaN);
    expect(isAfter(date, dateToCompare)).toBe(false);
  });

  it("returns false for both invalid dates", () => {
    const date = new Date(NaN);
    const dateToCompare = new Date(NaN);
    expect(isAfter(date, dateToCompare)).toBe(false);
  });
});
