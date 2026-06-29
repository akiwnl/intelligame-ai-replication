import { isBefore } from "./index";

describe("isBefore", () => {
  it("should return true if the first date is before the second date", () => {
    expect(isBefore(new Date(1987, 1, 11), new Date(1989, 6, 10))).toBe(true);
    expect(isBefore(new Date(2023, 10, 15, 9, 59, 59), new Date(2023, 10, 15, 10, 0, 0))).toBe(true);
  });

  it("should return false if the first date is after the second date", () => {
    expect(isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))).toBe(false);
    expect(isBefore(new Date(2023, 10, 15, 10, 0, 0), new Date(2023, 10, 15, 9, 59, 59))).toBe(false);
  });

  it("should return false if the dates are equal", () => {
    expect(isBefore(new Date(2023, 10, 15), new Date(2023, 10, 15))).toBe(false);
    expect(isBefore(new Date(2023, 10, 15, 10, 0, 0), new Date(2023, 10, 15, 10, 0, 0))).toBe(false);
  });

  it("should return false if either date is invalid", () => {
    expect(isBefore(new Date(NaN), new Date(2023, 10, 15))).toBe(false);
    expect(isBefore(new Date(2023, 10, 15), new Date(NaN))).toBe(false);
  });

  it("should return false if both dates are invalid", () => {
    expect(isBefore(new Date(NaN), new Date(NaN))).toBe(false);
  });

  it("should accept timestamps as arguments", () => {
    const date1 = new Date(2023, 10, 14).getTime();
    const date2 = new Date(2023, 10, 15).getTime();
    expect(isBefore(date1, date2)).toBe(true);
    expect(isBefore(date2, date1)).toBe(false);
  });

  it("should accept strings as arguments", () => {
    const date1 = "2023-11-14T10:00:00.000Z";
    const date2 = "2023-11-15T10:00:00.000Z";
    expect(isBefore(date1, date2)).toBe(true);
    expect(isBefore(date2, date1)).toBe(false);
  });
});
