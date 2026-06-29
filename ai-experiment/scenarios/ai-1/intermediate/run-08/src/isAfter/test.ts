import { isAfter } from "./index";

describe("isAfter", () => {
  it("returns true if the first date is after the second date", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // February 11, 1987
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  it("returns false if the first date is before the second date", () => {
    const date1 = new Date(1987, 1, 11);
    const date2 = new Date(1989, 6, 10);
    const result = isAfter(date1, date2);
    expect(result).toBe(false);
  });

  it("returns false if the first date is equal to the second date", () => {
    const date1 = new Date(1989, 6, 10, 10, 0, 0);
    const date2 = new Date(1989, 6, 10, 10, 0, 0);
    const result = isAfter(date1, date2);
    expect(result).toBe(false);
  });

  it("returns true if only time is different and first date is after", () => {
    const date1 = new Date(1989, 6, 10, 10, 0, 1);
    const date2 = new Date(1989, 6, 10, 10, 0, 0);
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  it("returns false if only time is different and first date is before", () => {
    const date1 = new Date(1989, 6, 10, 10, 0, 0);
    const date2 = new Date(1989, 6, 10, 10, 0, 1);
    const result = isAfter(date1, date2);
    expect(result).toBe(false);
  });

  it("accepts timestamps as arguments", () => {
    const date1 = new Date(1989, 6, 10).getTime();
    const date2 = new Date(1987, 1, 11).getTime();
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  it("accepts date strings as arguments", () => {
    const result = isAfter("1989-07-10T00:00:00.000Z", "1987-02-11T00:00:00.000Z");
    expect(result).toBe(true);
  });

  it("returns false if the first date is invalid", () => {
    const result = isAfter(new Date(NaN), new Date(2023, 0, 1));
    expect(result).toBe(false);
  });

  it("returns false if the second date is invalid", () => {
    const result = isAfter(new Date(2023, 0, 1), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if both dates are invalid", () => {
    const result = isAfter(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });
});
