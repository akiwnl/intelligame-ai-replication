import { isPast } from "./index";

describe("isPast", () => {
  it("detects a past date", () => {
    const past = new Date(Date.now() - 1000 * 60 * 60);
    expect(isPast(past)).toBe(true);
  });

  it("detects a future date", () => {
    const future = new Date(Date.now() + 1000 * 60 * 60);
    expect(isPast(future)).toBe(false);
  });
});
