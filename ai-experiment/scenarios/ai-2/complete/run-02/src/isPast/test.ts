import { isPast } from "./index";

describe("isPast", () => {
  const now = Date.now();

  it("returns true for dates before now", () => {
    const past = now - 1000 * 60 * 60; // -1 hour
    expect(isPast(past)).toBe(true);
  });

  it("returns false for future dates", () => {
    const future = now + 1000 * 60 * 60;
    expect(isPast(future)).toBe(false);
  });

  it("returns false for the exact current timestamp", () => {
    expect(isPast(now)).toBe(false);
  });
});
