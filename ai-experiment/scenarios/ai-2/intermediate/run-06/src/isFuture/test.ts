import { isFuture } from "./index";

describe("isFuture", () => {
  it("returns true for a date far in the future", () => {
    const future = new Date(Date.now() + 1000 * 60 * 60 * 24);
    expect(isFuture(future)).toBe(true);
  });
  it("returns false for past dates", () => {
    const past = new Date(Date.now() - 1000 * 60 * 60 * 24);
    expect(isFuture(past)).toBe(false);
  });
});
