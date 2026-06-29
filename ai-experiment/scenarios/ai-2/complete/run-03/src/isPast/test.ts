import { isPast } from "./index";

describe("isPast", () => {
  it("recognizes a past date", () => {
    const past = Date.now() - 1000 * 60 * 60;
    expect(isPast(past)).toBe(true);
  });

  it("recognizes a future date", () => {
    const future = Date.now() + 1000 * 60 * 60;
    expect(isPast(future)).toBe(false);
  });

  it("returns false for now", () => {
    const now = Date.now();
    expect(isPast(now)).toBe(false);
  });

  it("returns false for invalid date", () => {
    expect(isPast("bad" as any)).toBe(false);
  });
});
