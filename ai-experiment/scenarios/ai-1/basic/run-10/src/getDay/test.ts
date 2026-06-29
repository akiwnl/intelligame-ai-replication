import { getDay } from "./index";

describe("getDay", () => {
  it("returns the day of the week for the given date", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012 is a Wednesday
    const result = getDay(date);
    expect(result).toBe(3); // 0=Sunday, 1=Monday, ..., 3=Wednesday
  });

  it("returns 0 for Sunday", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023 is a Sunday
    const result = getDay(date);
    expect(result).toBe(0);
  });

  it("returns 6 for Saturday", () => {
    const date = new Date(2023, 0, 7); // Jan 7, 2023 is a Saturday
    const result = getDay(date);
    expect(result).toBe(6);
  });

  it("returns 1 for Monday", () => {
    const date = new Date(2023, 0, 2); // Jan 2, 2023 is a Monday
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2023, 0, 2).getTime(); // Jan 2, 2023 is a Monday
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("accepts a date string", () => {
    const date = "2023-01-03T10:00:00.000Z"; // Jan 3, 2023 is a Tuesday
    const result = getDay(date);
    expect(result).toBe(2);
  });

  it("returns NaN for an invalid date", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
