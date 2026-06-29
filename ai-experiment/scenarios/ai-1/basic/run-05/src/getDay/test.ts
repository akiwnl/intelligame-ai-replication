import { getDay } from "./index";

describe("getDay", () => {
  it("returns the day of the week of the given date", () => {
    // Sunday - 0
    expect(getDay(new Date(2023, 0, 1))).toBe(0);
    // Monday - 1
    expect(getDay(new Date(2023, 0, 2))).toBe(1);
    // Tuesday - 2
    expect(getDay(new Date(2012, 1, 29))).toBe(3); // Feb 29, 2012 was a Wednesday
    // Wednesday - 3
    expect(getDay(new Date(2023, 0, 4))).toBe(3);
    // Thursday - 4
    expect(getDay(new Date(2023, 0, 5))).toBe(4);
    // Friday - 5
    expect(getDay(new Date(2023, 0, 6))).toBe(5);
    // Saturday - 6
    expect(getDay(new Date(2023, 0, 7))).toBe(6);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2023, 0, 1).getTime(); // Sunday
    const result = getDay(date);
    expect(result).toBe(0);
  });

  it("accepts a date string", () => {
    const date = "2023-01-02T00:00:00.000Z"; // Monday
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("returns NaN for an invalid date", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN for an invalid date string", () => {
    const result = getDay("invalid date");
    expect(isNaN(result)).toBe(true);
  });
});
