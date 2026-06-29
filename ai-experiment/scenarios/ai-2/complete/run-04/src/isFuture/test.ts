import { isFuture } from "./index";

describe("isFuture", () => {
  const now = Date.now();

  it("returns true for dates after now", () => {
    const future = new Date(now + 24 * 60 * 60 * 1000); // +1 day
    expect(isFuture(future)).toBe(true);
  });

  it("returns false for dates before now", () => {
    const past = new Date(now - 24 * 60 * 60 * 1000);
    expect(isFuture(past)).toBe(false);
  });

  it("returns false for exactly now", () => {
    const exact = new Date(now);
    expect(isFuture(exact)).toBe(false);
  });

  it("handles invalid date (returns false)", () => {
    expect(isFuture(new Date("invalid"))).toBe(false);
  });
});
