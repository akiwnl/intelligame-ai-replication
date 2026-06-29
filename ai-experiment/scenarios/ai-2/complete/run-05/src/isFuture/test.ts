import { isFuture } from "./index";

describe("isFuture", () => {
  const now = Date.now();

  it("detects a future date", () => {
    const future = new Date(now + 24 * 60 * 60 * 1000);
    expect(isFuture(future)).toBe(true);
  });

  it("detects a past date", () => {
    const past = new Date(now - 24 * 60 * 60 * 1000);
    expect(isFuture(past)).toBe(false);
  });

  it("returns false for current instant (within ms)", () => {
    const nowDate = new Date(now);
    expect(isFuture(nowDate)).toBe(false);
  });

  it("handles timestamp input", () => {
    const futureTs = now + 1000;
    expect(isFuture(futureTs)).toBe(true);
  });

  it("invalid date returns false", () => {
    expect(isFuture(new Date("invalid"))).toBe(false);
  });
});
