import { isPast } from "./index";

describe("isPast", () => {
  const now = Date.now();

  it("detects a past date", () => {
    const past = new Date(now - 24 * 60 * 60 * 1000);
    expect(isPast(past)).toBe(true);
  });

  it("detects a future date as false", () => {
    const future = new Date(now + 24 * 60 * 60 * 1000);
    expect(isPast(future)).toBe(false);
  });

  it("returns false for current instant", () => {
    const nowDate = new Date(now);
    expect(isPast(nowDate)).toBe(false);
  });

  it("accepts timestamp", () => {
    const pastTs = now - 5000;
    expect(isPast(pastTs)).toBe(true);
  });

  it("invalid date returns false", () => {
    expect(isPast(new Date("invalid"))).toBe(false);
  });
});
