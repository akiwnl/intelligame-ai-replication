import { isPast } from "./index";

describe("isPast", () => {
  it("returns true for a date before now", () => {
    const past = new Date(Date.now() - 1000 * 60 * 60);
    expect(isPast(past)).toBe(true);
  });

  it("returns false for a future date", () => {
    const future = new Date(Date.now() + 1000 * 60 * 60);
    expect(isPast(future)).toBe(false);
  });
});
