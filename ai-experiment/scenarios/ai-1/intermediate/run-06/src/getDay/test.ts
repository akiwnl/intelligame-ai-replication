import { getDay } from "./index";

describe("getDay", () => {
  it("should return 0 for Sunday", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023 was a Sunday
    expect(getDay(date)).toBe(0);
  });

  it("should return 1 for Monday", () => {
    const date = new Date(2023, 0, 2); // Jan 2, 2023 was a Monday
    expect(getDay(date)).toBe(1);
  });

  it("should return 2 for Tuesday", () => {
    const date = new Date(2012, 1, 28); // Feb 28, 2012 was a Tuesday
    expect(getDay(date)).toBe(2);
  });

  it("should return 3 for Wednesday", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012 was a Wednesday
    expect(getDay(date)).toBe(3);
  });

  it("should return 4 for Thursday", () => {
    const date = new Date(2023, 0, 5); // Jan 5, 2023 was a Thursday
    expect(getDay(date)).toBe(4);
  });

  it("should return 5 for Friday", () => {
    const date = new Date(2023, 0, 6); // Jan 6, 2023 was a Friday
    expect(getDay(date)).toBe(5);
  });

  it("should return 6 for Saturday", () => {
    const date = new Date(2023, 0, 7); // Jan 7, 2023 was a Saturday
    expect(getDay(date)).toBe(6);
  });

  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2023, 0, 1).getTime(); // Jan 1, 2023 (Sunday)
    expect(getDay(timestamp)).toBe(0);
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should return NaN for an invalid string input", () => {
    const result = getDay("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
