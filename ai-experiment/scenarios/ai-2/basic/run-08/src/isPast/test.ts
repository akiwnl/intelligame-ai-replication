import { isPast } from "./index";

describe("isPast", () => {
  it("detects past date", () => {
    const past = new Date(Date.now() - 1000 * 60 * 60);
    expect(isPast(past)).toBe(true);
  });

  it("detects future date as false", () => {
    const future = new Date(Date.now() + 1000 * 60 * 60);
    expect(isPast(future)).toBe(false);
  });
});
