import { isPast } from "./index";

describe("isPast", () => {
  const now = Date.now();

  it("returns true for dates before now", () => {
    const past = new Date(now - 24 * 60 * 60 * 1000);
    expect(isPast(past)).toBe(true);
  });

  it("returns false for dates after now", () => {
    const future = new Date(now + 24 * 60 * 60 * 1000);
    expect(isPast(future)).toBe(false);
  });

  it("returns false for exactly now", () => {
    const exact = new Date(now);
    expect(isPast(exact)).toBe(false);
  });

  it("handles invalid date (returns false)", () => {
    expect(isPast(new Date("invalid"))).toBe(false);
  });
});
