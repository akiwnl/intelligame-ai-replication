import { isPast } from "./index";

describe("isPast", () => {
  const FIXED_NOW = Date.now();

  beforeAll(() => {
    jest.spyOn(Date, "now").mockImplementation(() => FIXED_NOW);
  });

  afterAll(() => {
    (Date.now as jest.Mock).mockRestore();
  });

  it("returns true for a date before now", () => {
    const past = new Date(FIXED_NOW - 1000 * 60 * 60);
    expect(isPast(past)).toBe(true);
  });

  it("returns false for a date after now", () => {
    const future = new Date(FIXED_NOW + 1000 * 60 * 60);
    expect(isPast(future)).toBe(false);
  });

  it("returns false for exactly now", () => {
    const now = new Date(FIXED_NOW);
    expect(isPast(now)).toBe(false);
  });

  it("handles timestamp input", () => {
    const pastTs = FIXED_NOW - 86400000;
    expect(isPast(pastTs)).toBe(true);
  });

  it("returns false for invalid date", () => {
    expect(isPast("invalid")).toBe(false);
  });
});
