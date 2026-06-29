import { isPast } from "./index";

describe("isPast", () => {
  // Mock Date.now() to ensure consistent test results
  const MOCK_NOW = new Date(2023, 5, 15, 12, 0, 0, 0).getTime(); // June 15, 2023 12:00:00.000
  const realDateNow = Date.now;

  beforeAll(() => {
    Date.now = jest.fn(() => MOCK_NOW);
  });

  afterAll(() => {
    Date.now = realDateNow;
  });

  it("should return true for a date in the past", () => {
    const pastDate = new Date(2023, 5, 15, 11, 59, 59, 999); // 1 millisecond before MOCK_NOW
    expect(isPast(pastDate)).toBe(true);
  });

  it("should return true for a date in the distant past", () => {
    const pastDate = new Date(2022, 0, 1); // Jan 1, 2022
    expect(isPast(pastDate)).toBe(true);
  });

  it("should return false for a date in the future", () => {
    const futureDate = new Date(2023, 5, 15, 12, 0, 0, 1); // 1 millisecond after MOCK_NOW
    expect(isPast(futureDate)).toBe(false);
  });

  it("should return false for a date in the distant future", () => {
    const futureDate = new Date(2024, 0, 1); // Jan 1, 2024
    expect(isPast(futureDate)).toBe(false);
  });

  it("should return false for the current date (MOCK_NOW)", () => {
    const currentDate = new Date(MOCK_NOW);
    expect(isPast(currentDate)).toBe(false);
  });

  it("should work with a timestamp in the past", () => {
    const pastTimestamp = MOCK_NOW - 1000;
    expect(isPast(pastTimestamp)).toBe(true);
  });

  it("should work with a timestamp in the future", () => {
    const futureTimestamp = MOCK_NOW + 1000;
    expect(isPast(futureTimestamp)).toBe(false);
  });

  it("should return false for an invalid date input", () => {
    const invalidDate = new Date(NaN);
    expect(isPast(invalidDate)).toBe(false);
  });

  it("should return false for an invalid string input", () => {
    expect(isPast("invalid date string")).toBe(false);
  });
});
