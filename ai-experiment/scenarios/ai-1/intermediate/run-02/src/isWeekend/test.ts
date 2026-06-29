import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should return true for Sunday", () => {
    const sunday = new Date(2014, 9, 5); // October 5, 2014 was a Sunday
    expect(isWeekend(sunday)).toBe(true);
  });

  it("should return true for Saturday", () => {
    const saturday = new Date(2014, 9, 4); // October 4, 2014 was a Saturday
    expect(isWeekend(saturday)).toBe(true);
  });

  it("should return false for Monday", () => {
    const monday = new Date(2014, 9, 6); // October 6, 2014 was a Monday
    expect(isWeekend(monday)).toBe(false);
  });

  it("should return false for Wednesday", () => {
    const wednesday = new Date(2012, 1, 29); // February 29, 2012 was a Wednesday
    expect(isWeekend(wednesday)).toBe(false);
  });

  it("should return false if the input date is invalid", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });

  it("should work with a timestamp input for a weekend day", () => {
    const timestamp = new Date(2023, 6, 8).getTime(); // July 8, 2023 was a Saturday
    expect(isWeekend(timestamp)).toBe(true);
  });

  it("should work with a date string input for a weekday", () => {
    const dateString = "2023-07-10"; // July 10, 2023 was a Monday
    expect(isWeekend(dateString)).toBe(false);
  });
});
