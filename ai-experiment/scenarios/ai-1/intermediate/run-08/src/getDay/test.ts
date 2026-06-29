import { getDay } from "./index";

describe("getDay", () => {
  it("returns the day of the week for the given date (Sunday is 0)", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 was a Wednesday
    const result = getDay(date);
    expect(result).toBe(3); // Wednesday is 3
  });

  it("returns 0 for Sunday", () => {
    const date = new Date(2023, 9, 1); // October 1, 2023 was a Sunday
    const result = getDay(date);
    expect(result).toBe(0);
  });

  it("returns 1 for Monday", () => {
    const date = new Date(2023, 9, 2); // October 2, 2023 was a Monday
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("returns 2 for Tuesday", () => {
    const date = new Date(2023, 9, 3); // October 3, 2023 was a Tuesday
    const result = getDay(date);
    expect(result).toBe(2);
  });

  it("returns 4 for Thursday", () => {
    const date = new Date(2023, 9, 5); // October 5, 2023 was a Thursday
    const result = getDay(date);
    expect(result).toBe(4);
  });

  it("returns 5 for Friday", () => {
    const date = new Date(2023, 9, 6); // October 6, 2023 was a Friday
    const result = getDay(date);
    expect(result).toBe(5);
  });

  it("returns 6 for Saturday", () => {
    const date = new Date(2023, 9, 7); // October 7, 2023 was a Saturday
    const result = getDay(date);
    expect(result).toBe(6);
  });

  it("accepts a timestamp as the date argument", () => {
    const date = new Date(2023, 9, 4, 12, 0, 0); // October 4, 2023 was a Wednesday
    const result = getDay(date.getTime());
    expect(result).toBe(3);
  });

  it("accepts a date string as the date argument", () => {
    const result = getDay("2023-10-05T10:00:00.000Z"); // October 5, 2023 UTC was a Thursday
    // Note: The local timezone might shift the day if the UTC date is at the boundary.
    // Assuming local date conversion by toDate and getDay.
    expect(result).toBe(4); // Thursday in UTC, which is likely Thursday locally too.
  });

  it("returns NaN if the date is invalid", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the input date string is invalid", () => {
    const result = getDay("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
