import { isFuture } from "./index";

describe("isFuture", () => {
  const REAL_NOW = Date.now();

  beforeAll(() => {
    // Freeze time at a known point
    jest.spyOn(Date, "now").mockImplementation(() => REAL_NOW);
  });

  afterAll(() => {
    (Date.now as jest.Mock).mockRestore();
  });

  it("returns true for a date after now", () => {
    const future = new Date(REAL_NOW + 1000 * 60 * 60); // +1 hour
    expect(isFuture(future)).toBe(true);
  });

  it("returns false for a date before now", () => {
    const past = new Date(REAL_NOW - 1000 * 60 * 60);
    expect(isFuture(past)).toBe(false);
  });

  it("returns false for exactly now", () => {
    const now = new Date(REAL_NOW);
    expect(isFuture(now)).toBe(false);
  });

  it("handles timestamp input", () => {
    const futureTs = REAL_NOW + 86400000; // +1 day
    expect(isFuture(futureTs)).toBe(true);
  });

  it("returns false for invalid date", () => {
    expect(isFuture("invalid")).toBe(false);
  });
});
