import { isBefore } from "./index";

describe("isBefore", () => {
  it("should return true if the first date is before the second one", () => {
    const date1 = new Date(1987, 1, 11);
    const date2 = new Date(1989, 6, 10);
    expect(isBefore(date1, date2)).toBe(true);
  });

  it("should return false if the first date is after the second one", () => {
    const date1 = new Date(1989, 6, 10);
    const date2 = new Date(1987, 1, 11);
    expect(isBefore(date1, date2)).toBe(false);
  });

  it("should return false if the dates are equal", () => {
    const date1 = new Date(1987, 1, 11);
    const date2 = new Date(1987, 1, 11);
    expect(isBefore(date1, date2)).toBe(false);
  });
});
