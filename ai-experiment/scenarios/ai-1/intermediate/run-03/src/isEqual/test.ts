import { isEqual } from "./index";

describe("isEqual", () => {
  it("should return true if two dates are exactly equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 123);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 123);
    expect(isEqual(date1, date2)).toBe(true);
  });

  it("should return false if two dates are not equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if only milliseconds differ", () => {
    const date1 = new Date(2023, 0, 1, 12, 0, 0, 0);
    const date2 = new Date(2023, 0, 1, 12, 0, 0, 1);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if only seconds differ", () => {
    const date1 = new Date(2023, 0, 1, 12, 0, 0);
    const date2 = new Date(2023, 0, 1, 12, 0, 1);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if only minutes differ", () => {
    const date1 = new Date(2023, 0, 1, 12, 0);
    const date2 = new Date(2023, 0, 1, 12, 1);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if only hours differ", () => {
    const date1 = new Date(2023, 0, 1, 12);
    const date2 = new Date(2023, 0, 1, 13);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if only days differ", () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(2023, 0, 2);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if only months differ", () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(2023, 1, 1);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if only years differ", () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(2024, 0, 1);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should work with timestamps as input", () => {
    const date1 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const date2 = new Date(2023, 5, 15, 10, 0, 0, 0);
    expect(isEqual(date1.getTime(), date2.getTime())).toBe(true);

    const date3 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const date4 = new Date(2023, 5, 15, 10, 0, 0, 1);
    expect(isEqual(date3.getTime(), date4.getTime())).toBe(false);
  });

  it("should work with date strings as input", () => {
    const date1 = "2023-06-15T10:00:00.000Z";
    const date2 = "2023-06-15T10:00:00.000Z";
    expect(isEqual(date1, date2)).toBe(true);

    const date3 = "2023-06-15T10:00:00.000Z";
    const date4 = "2023-06-15T10:00:00.500Z";
    expect(isEqual(date3, date4)).toBe(false);
  });

  it("should return false if one date is invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2023, 5, 15);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if the other date is invalid", () => {
    const date1 = new Date(2023, 5, 15);
    const date2 = new Date(NaN);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if both dates are invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(NaN);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if inputs are invalid strings", () => {
    expect(isEqual("invalid date", new Date())).toBe(false);
    expect(isEqual(new Date(), "invalid date")).toBe(false);
    expect(isEqual("invalid date1", "invalid date2")).toBe(false);
  });
});
