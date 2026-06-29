import { isFuture } from "./index";

describe("isFuture", () => {
  it("returns true for a date after now", () => {
    const future = new Date(Date.now() + 1000 * 60); // 1 minute ahead
    expect(isFuture(future)).toBe(true);
  });

  it("returns false for a date before now", () => {
    const past = new Date(Date.now() - 1000 * 60);
    expect(isFuture(past)).toBe(false);
  });
});
