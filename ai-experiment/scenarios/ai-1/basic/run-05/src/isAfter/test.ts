import { isAfter } from "./index";

describe("isAfter", () => {
  it("returns true if the first date is after the second date", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // Feb 11, 1987
    expect(isAfter(date1, date2)).toBe(true);
  });

  it("returns false if the first date is before the second date", () => {
    const date1 = new Date(1987, 1, 11); // Feb 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    expect(isAfter(date1, date2)).toBe(false);
  });

  it("returns false if the dates are equal", () => {
    const date1 = new Date(1989, 6, 10, 10, 0, 0);
    const date2 = new Date(1989, 6, 10, 10, 0, 0);
    expect(isAfter(date1, date2)).toBe(false);
  });

  it("accepts timestamps", () => {
    const date1 = new Date(1989, 6, 10).getTime();
    const date2 = new Date(1987, 1, 11).getTime();
    expect(isAfter(date1, date2)).toBe(true);
  });

  it("accepts date strings", () => {
    const date1 = "1989-07-10T00:00:00.000Z";
    const date2 = "1987-02-11T00:00:00.000Z";
    expect(isAfter(date1, date2)).toBe(true);
  });

  it("returns false if the first date is invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(1989, 6, 10);
    expect(isAfter(date1, date2)).toBe(false);
  });

  it("returns false if the second date is invalid", () => {
    const date1 = new Date(1989, 6, 10);
    const date2 = new Date(NaN);
    expect(isAfter(date1, date2)).toBe(false);
  });

  it("returns false if both dates are invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(NaN);
    expect(isAfter(date1, date2)).toBe(false);
  });
});
