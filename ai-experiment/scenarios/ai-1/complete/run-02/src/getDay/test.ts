import { getDay } from "./index";

describe("getDay", () => {
  it("returns 0 for Sunday", () => {
    const date = new Date(2024, 0, 7); // Jan 7th, 2024 is a Sunday
    const result = getDay(date);
    expect(result).toBe(0);
  });

  it("returns 1 for Monday", () => {
    const date = new Date(2024, 0, 8); // Jan 8th, 2024 is a Monday
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("returns 2 for Tuesday", () => {
    const date = new Date(2024, 0, 9); // Jan 9th, 2024 is a Tuesday
    const result = getDay(date);
    expect(result).toBe(2);
  });

  it("returns 3 for Wednesday (JSDoc example)", () => {
    const date = new Date(2012, 1, 29); // Feb 29th, 2012 is a Wednesday
    const result = getDay(date);
    expect(result).toBe(3);
  });

  it("returns 4 for Thursday", () => {
    const date = new Date(2024, 0, 11); // Jan 11th, 2024 is a Thursday
    const result = getDay(date);
    expect(result).toBe(4);
  });

  it("returns 5 for Friday", () => {
    const date = new Date(2024, 0, 12); // Jan 12th, 2024 is a Friday
    const result = getDay(date);
    expect(result).toBe(5);
  });

  it("returns 6 for Saturday", () => {
    const date = new Date(2024, 0, 13); // Jan 13th, 2024 is a Saturday
    const result = getDay(date);
    expect(result).toBe(6);
  });

  it("returns NaN for an invalid date", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("accepts a timestamp as date argument", () => {
    const date = new Date(2024, 0, 7, 11, 30, 0); // Sunday
    const timestamp = date.getTime();
    const result = getDay(timestamp);
    expect(result).toBe(0);
  });

  it("accepts a date string as date argument", () => {
    const dateString = "2024-01-08T10:00:00.000Z"; // Monday UTC
    const result = getDay(dateString);
    const d = new Date(dateString);
    expect(result).toBe(d.getDay());
  });
});
