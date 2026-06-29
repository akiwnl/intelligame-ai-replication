import { isFuture } from "./index";

describe("isFuture", () => {
  it("recognizes a future date", () => {
    const future = Date.now() + 1000 * 60 * 60; // 1 hour ahead
    expect(isFuture(future)).toBe(true);
  });

  it("recognizes a past date", () => {
    const past = Date.now() - 1000 * 60 * 60;
    expect(isFuture(past)).toBe(false);
  });

  it("returns false for now (within same ms)", () => {
    const now = Date.now();
    expect(isFuture(now)).toBe(false);
  });

  it("returns false for invalid date", () => {
    expect(isFuture("invalid" as any)).toBe(false);
  });
});
