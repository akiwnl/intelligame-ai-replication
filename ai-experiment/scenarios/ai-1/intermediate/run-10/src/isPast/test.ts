import { isPast } from "./index";

describe("isPast", () => {
  // Mock Date.now for consistent testing of 'now'
  const realDateNow = Date.now;
  const mockDate = new Date(2023, 0, 1, 12, 0, 0, 0); // Jan 1, 2023 12:00:00.000

  beforeAll(() => {
    global.Date.now = jest.fn(() => mockDate.getTime());
  });

  afterAll(() => {
    global.Date.now = realDateNow;
  });

  it("returns true if the given date is in the past", () => {
    const pastDate = new Date(2023, 0, 1, 11, 59, 59, 999); // 1ms before mockDate
    const result = isPast(pastDate);
    expect(result).toBe(true);
  });

  it("returns false if the given date is in the future", () => {
    const futureDate = new Date(2023, 0, 1, 12, 0, 0, 1); // 1ms after mockDate
    const result = isPast(futureDate);
    expect(result).toBe(false);
  });

  it("returns false if the given date is exactly now", () => {
    const now = new Date(mockDate.getTime());
    const result = isPast(now);
    expect(result).toBe(false);
  });

  it("accepts a timestamp as a date argument", () => {
    const pastTimestamp = new Date(2022, 11, 31, 23, 59, 59, 999).getTime();
    const result = isPast(pastTimestamp);
    expect(result).toBe(true);
  });

  it("accepts a string as a date argument", () => {
    const pastDateString = "2022-12-31T23:59:59.999Z"; // Assuming local timezone for string parsing
    const result = isPast(pastDateString);
    expect(result).toBe(true);
  });

  it("returns false if the date is invalid", () => {
    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the input is an invalid string", () => {
    const result = isPast("not a date");
    expect(result).toBe(false);
  });
});
