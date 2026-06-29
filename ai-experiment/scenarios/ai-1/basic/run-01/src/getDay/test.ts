import { getDay } from "./index";

describe("getDay", () => {
  it("should return 0 for Sunday", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023 was a Sunday
    const result = getDay(date);
    expect(result).toBe(0);
  });

  it("should return 1 for Monday", () => {
    const date = new Date(2023, 0, 2); // January 2, 2023 was a Monday
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("should return 2 for Tuesday", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 was a Wednesday, example says 3. Let's pick a known Tuesday.
    const result = getDay(new Date(2023, 0, 3)); // January 3, 2023 was a Tuesday
    expect(result).toBe(2);
  });

  it("should return 3 for Wednesday", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 was a Wednesday
    const result = getDay(date);
    expect(result).toBe(3);
  });

  it("should return 4 for Thursday", () => {
    const date = new Date(2023, 0, 5); // January 5, 2023 was a Thursday
    const result = getDay(date);
    expect(result).toBe(4);
  });

  it("should return 5 for Friday", () => {
    const date = new Date(2023, 0, 6); // January 6, 2023 was a Friday
    const result = getDay(date);
    expect(result).toBe(5);
  });

  it("should return 6 for Saturday", () => {
    const date = new Date(2023, 0, 7); // January 7, 2023 was a Saturday
    const result = getDay(date);
    expect(result).toBe(6);
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2023, 0, 1).getTime(); // Sunday
    const result = getDay(timestamp);
    expect(result).toBe(0);
  });

  it("should work with a date string as input", () => {
    const dateString = "2023-01-02T10:00:00Z"; // Monday
    const result = getDay(dateString);
    expect(result).toBe(1);
  });
});
