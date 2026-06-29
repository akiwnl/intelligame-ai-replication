import { isFuture } from "./index";

describe("isFuture", () => {
  it("returns true for a date after now", () => {
    const future = new Date(Date.now() + 1000 * 60); // +1 minute
    expect(isFuture(future)).toBe(true);
  });

  it("returns false for a past date", () => {
    const past = new Date(Date.now() - 1000 * 60);
    expect(isFuture(past)).toBe(false);
  });
});
