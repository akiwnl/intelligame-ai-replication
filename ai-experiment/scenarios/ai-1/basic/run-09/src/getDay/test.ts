import { getDay } from "./index";

describe("getDay", () => {
  it("returns the day of the week of the given date (0 for Sunday)", () => {
    expect(getDay(new Date(2012, 1, 29))).toBe(3); // Wednesday
    expect(getDay(new Date(2023, 0, 1))).toBe(0); // Jan 1, 2023 is Sunday
    expect(getDay(new Date(2023, 0, 2))).toBe(1); // Jan 2, 2023 is Monday
    expect(getDay(new Date(2023, 0, 7))).toBe(6); // Jan 7, 2023 is Saturday
  });

  it("handles date arguments", () => {
    const result = getDay(new Date(2023, 0, 3)); // Tuesday
    expect(result).toBe(2);
  });

  it("handles timestamp arguments", () => {
    const result = getDay(new Date(2023, 0, 4).getTime()); // Wednesday
    expect(result).toBe(3);
  });

  it("handles string arguments", () => {
    const result = getDay("2023-01-05T10:00:00.000Z"); // Thursday (UTC)
    expect(result).toBe(4);
  });

  it("returns NaN for Invalid Date argument", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN for invalid string argument", () => {
    const result = getDay("invalid date");
    expect(isNaN(result)).toBe(true);
  });
});
