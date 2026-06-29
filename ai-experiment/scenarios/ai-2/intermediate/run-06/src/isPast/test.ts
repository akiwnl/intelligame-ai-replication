import { isPast } from "./index";

describe("isPast", () => {
  it("returns true for a past date", () => {
    const past = new Date(Date.now() - 1000 * 60 * 60 * 24);
    expect(isPast(past)).toBe(true);
  });
  it("returns false for future dates", () => {
    const future = new Date(Date.now() + 1000 * 60 * 60 * 24);
    expect(isPast(future)).toBe(false);
  });
});
