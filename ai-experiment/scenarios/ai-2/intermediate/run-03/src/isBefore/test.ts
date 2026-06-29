import { isBefore } from "./index";

describe("isBefore", () => {
  it("returns true when first date is earlier", () => {
    expect(isBefore(new Date(1987, 1, 11), new Date(1989, 6, 10))).toBe(true);
  });

  it("returns false when first date is later", () => {
    expect(isBefore(new Date(1995, 4, 20), new Date(1990, 4, 20))).toBe(false);
  });

  it("equal dates return false", () => {
    const d = new Date();
    expect(isBefore(d, d)).toBe(false);
  });
});
