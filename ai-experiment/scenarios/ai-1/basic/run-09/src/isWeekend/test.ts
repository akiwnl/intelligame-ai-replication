import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("returns true for a Saturday", () => {
    const saturday = new Date(2014, 9, 4); // Oct 4, 2014 is Saturday
    const result = isWeekend(saturday);
    expect(result).toBe(true);
  });

  it("returns true for a Sunday", () => {
    const sunday = new Date(2014, 9, 5); // Oct 5, 2014 is Sunday
    const result = isWeekend(sunday);
    expect(result).toBe(true);
  });

  it("returns false for a weekday", () => {
    const monday = new Date(2014, 9, 6); // Oct 6, 2014 is Monday
    const result = isWeekend(monday);
    expect(result).toBe(false);
  });

  it("returns false for other weekdays", () => {
    expect(isWeekend(new Date(2023, 0, 3))).toBe(false); // Tuesday
    expect(isWeekend(new Date(2023, 0, 4))).toBe(false); // Wednesday
    expect(isWeekend(new Date(2023, 0, 5))).toBe(false); // Thursday
    expect(isWeekend(new Date(2023, 0, 6))).toBe(false); // Friday
  });

  it("handles date arguments", () => {
    const result = isWeekend(new Date(2023, 0, 7)); // Saturday
    expect(result).toBe(true);
  });

  it("handles timestamp arguments", () => {
    const result = isWeekend(new Date(2023, 0, 8).getTime()); // Sunday
    expect(result).toBe(true);
  });

  it("handles string arguments", () => {
    const result = isWeekend("2023-01-09T10:00:00.000Z"); // Monday (UTC)
    expect(result).toBe(false);
  });

  it("returns false for Invalid Date argument", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false for invalid string argument", () => {
    const result = isWeekend("invalid date");
    expect(result).toBe(false);
  });
});
