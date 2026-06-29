import { isFuture } from "./index";

describe("isFuture", () => {
  const now = Date.now();

  it("returns true for dates after now", () => {
    const future = now + 24 * 60 * 60 * 1000; // +1 day
    expect(isFuture(future)).toBe(true);
  });

  it("returns false for past dates", () => {
    const past = now - 24 * 60 * 60 * 1000;
    expect(isFuture(past)).toBe(false);
  });

  it("returns false for the exact current timestamp", () => {
    expect(isFuture(now)).toBe(false);
  });
});
