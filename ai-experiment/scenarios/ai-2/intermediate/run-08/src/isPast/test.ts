import { isPast } from "./index";

describe("isPast", () => {
  it("returns true for a date before now", () => {
    const past = Date.now() - 100000;
    expect(isPast(past)).toBe(true);
  });

  it("returns false for a future date", () => {
    const future = Date.now() + 100000;
    expect(isPast(future)).toBe(false);
  });
});
