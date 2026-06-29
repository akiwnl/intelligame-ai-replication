import { isFuture } from "./index";

describe("isFuture", () => {
  // Mock Date.now for consistent testing of 'now'
  const realDateNow = Date.now;
  const mockDate = new Date(2023, 0, 1, 12, 0, 0, 0); // Jan 1, 2023 12:00:00.000

  beforeAll(() => {
    global.Date.now = jest.fn(() => mockDate.getTime());
  });

  afterAll(() => {
    global.Date.now = realDateNow;
  });

  it("returns true if the given date is in the future", () => {
    const futureDate = new Date(2023, 0, 1, 12, 0, 0, 1); // 1ms after mockDate
    const result = isFuture(futureDate);
    expect(result).toBe(true);
  });

  it("returns false if the given date is in the past", () => {
    const pastDate = new Date(2023, 0, 1, 11, 59, 59, 999); // 1ms before mockDate
    const result = isFuture(pastDate);
    expect(result).toBe(false);
  });

  it("returns false if the given date is exactly now", () => {
    const now = new Date(mockDate.getTime());
    const result = isFuture(now);
    expect(result).toBe(false);
  });

  it("accepts a timestamp as a date argument", () => {
    const futureTimestamp = new Date(2023, 0, 1, 12, 0, 0, 500).getTime();
    const result = isFuture(futureTimestamp);
    expect(result).toBe(true);
  });

  it("accepts a string as a date argument", () => {
    const futureDateString = "2023-01-01T12:00:00.001Z"; // Assuming local timezone for string parsing
    const result = isFuture(futureDateString);
    expect(result).toBe(true);
  });

  it("returns false if the date is invalid", () => {
    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the input is an invalid string", () => {
    const result = isFuture("not a date");
    expect(result).toBe(false);
  });
});
