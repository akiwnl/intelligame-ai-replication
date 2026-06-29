import { isFuture } from "./index";

describe("isFuture", () => {
  it("detects a future date", () => {
    const future = new Date(Date.now() + 10000);
    expect(isFuture(future)).toBe(true);
  });

  it("detects a past date", () => {
    const past = new Date(Date.now() - 10000);
    expect(isFuture(past)).toBe(false);
  });
});
