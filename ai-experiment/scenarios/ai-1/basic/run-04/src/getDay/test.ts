import { getDay } from "./index";

describe("getDay", () => {
  it("should return 0 for Sunday", () => {
    const date = new Date(2023, 9, 1); // October 1, 2023 is a Sunday
    const result = getDay(date);
    expect(result).toBe(0);
  });

  it("should return 1 for Monday", () => {
    const date = new Date(2023, 9, 2); // October 2, 2023 is a Monday
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("should return 2 for Tuesday", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 is a Wednesday, wait, example says 3. Let's check.
    // In JS, new Date(2012, 1, 29) is Wed Feb 29 2012. getDay() for this is 3. So example is correct.
    const date2012_02_29 = new Date(2012, 1, 29);
    expect(date2012_02_29.getDay()).toBe(3); // Wednesday
    const tuesday = new Date(2023, 9, 3); // October 3, 2023 is a Tuesday
    const result = getDay(tuesday);
    expect(result).toBe(2);
  });

  it("should return 3 for Wednesday", () => {
    const date = new Date(2023, 9, 4); // October 4, 2023 is a Wednesday
    const result = getDay(date);
    expect(result).toBe(3);
  });

  it("should return 4 for Thursday", () => {
    const date = new Date(2023, 9, 5); // October 5, 2023 is a Thursday
    const result = getDay(date);
    expect(result).toBe(4);
  });

  it("should return 5 for Friday", () => {
    const date = new Date(2023, 9, 6); // October 6, 2023 is a Friday
    const result = getDay(date);
    expect(result).toBe(5);
  });

  it("should return 6 for Saturday", () => {
    const date = new Date(2023, 9, 7); // October 7, 2023 is a Saturday
    const result = getDay(date);
    expect(result).toBe(6);
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should accept a timestamp as date argument", () => {
    const timestamp = new Date(2023, 9, 10, 10, 0, 0).getTime(); // Oct 10, 2023 is a Tuesday
    const result = getDay(timestamp);
    expect(result).toBe(2);
  });

  it("should accept a date string as date argument", () => {
    const result = getDay("2023-10-11T14:30:00.000Z"); // Oct 11, 2023 is a Wednesday
    expect(result).toBe(3);
  });
});
