import { isFuture } from "./index";

describe("isFuture", () => {
  it("detects future date", () => {
    const future = new Date(Date.now() + 1000 * 60 * 60); // +1 hour
    expect(isFuture(future)).toBe(true);
  });

  it("detects past date", () => {
    const past = new Date(Date.now() - 1000 * 60 * 60);
    expect(isFuture(past)).toBe(false);
  });
});
