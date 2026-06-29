import { isPast } from "./index";

describe("isPast", () => {
  it("returns true for a past date", () => {
    const past = new Date(Date.now() - 100000);
    expect(isPast(past)).toBe(true);
  });

  it("returns false for a future date", () => {
    const future = new Date(Date.now() + 100000);
    expect(isPast(future)).toBe(false);
  });
});
