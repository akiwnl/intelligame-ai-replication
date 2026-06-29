import { isPast } from "./index";

describe("isPast", () => {
  let mockDateNow: jest.SpyInstance;
  const fixedNow = new Date(2014, 9, 6, 10, 0, 0, 0).getTime(); // Oct 6, 2014 10:00:00.000

  beforeAll(() => {
    mockDateNow = jest.spyOn(Date, 'now').mockReturnValue(fixedNow);
  });

  afterAll(() => {
    mockDateNow.mockRestore();
  });

  it("should return true if the given date is in the past", () => {
    const pastDate = new Date(2014, 6, 2); // July 2, 2014
    const result = isPast(pastDate);
    expect(result).toBe(true);
  });

  it("should return false if the given date is in the future", () => {
    const futureDate = new Date(2014, 11, 31); // Dec 31, 2014
    const result = isPast(futureDate);
    expect(result).toBe(false);
  });

  it("should return false if the given date is exactly now", () => {
    const now = new Date(fixedNow);
    const result = isPast(now);
    expect(result).toBe(false);
  });

  it("should return false if the given date is slightly in the future (milliseconds)", () => {
    const slightlyFuture = new Date(fixedNow + 1);
    const result = isPast(slightlyFuture);
    expect(result).toBe(false);
  });

  it("should return true if the given date is slightly in the past (milliseconds)", () => {
    const slightlyPast = new Date(fixedNow - 1);
    const result = isPast(slightlyPast);
    expect(result).toBe(true);
  });

  it("should handle date as a timestamp", () => {
    const pastTimestamp = new Date(2014, 0, 1).getTime(); // Jan 1, 2014
    const result = isPast(pastTimestamp);
    expect(result).toBe(true);
  });

  it("should handle date as a string", () => {
    const pastDateString = "2014-01-01T00:00:00.000Z";
    const result = isPast(pastDateString);
    expect(result).toBe(true);
  });

  it("should return false for an invalid date input", () => {
    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });
});
