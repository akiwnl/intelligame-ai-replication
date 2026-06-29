import { isFuture } from "./index";

describe("isFuture", () => {
  it("returns true for a date after now", () => {
    const future = new Date(Date.now() + 10000);
    expect(isFuture(future)).toBe(true);
  });

  it("returns false for a past date", () => {
    const past = new Date(Date.now() - 10000);
    expect(isFuture(past)).toBe(false);
  });
});
