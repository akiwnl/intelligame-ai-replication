import { isFuture } from "./index";

describe("isFuture", () => {
  it("returns true for a future date", () => {
    const future = new Date(Date.now() + 100000);
    expect(isFuture(future)).toBe(true);
  });

  it("returns false for a past date", () => {
    const past = new Date(Date.now() - 100000);
    expect(isFuture(past)).toBe(false);
  });
});
