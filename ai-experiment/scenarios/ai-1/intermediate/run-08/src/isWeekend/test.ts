import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("returns true for a Sunday", () => {
    const date = new Date(2014, 9, 5); // October 5, 2014 was a Sunday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("returns true for a Saturday", () => {
    const date = new Date(2014, 9, 4); // October 4, 2014 was a Saturday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("returns false for a Monday", () => {
    const date = new Date(2014, 9, 6); // October 6, 2014 was a Monday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("returns false for a Wednesday", () => {
    const date = new Date(2023, 10, 8); // November 8, 2023 was a Wednesday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("returns false for a Friday", () => {
    const date = new Date(2023, 10, 10); // November 10, 2023 was a Friday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("accepts a timestamp as the date argument", () => {
    const date = new Date(2023, 10, 11, 12, 0, 0); // November 11, 2023 was a Saturday
    const result = isWeekend(date.getTime());
    expect(result).toBe(true);
  });

  it("accepts a date string as the date argument", () => {
    const result = isWeekend("2023-11-12T10:00:00.000Z"); // November 12, 2023 UTC was a Sunday
    expect(result).toBe(true);
  });

  it("returns false if the date is invalid", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the input date string is invalid", () => {
    const result = isWeekend("invalid date string");
    expect(result).toBe(false);
  });
});
