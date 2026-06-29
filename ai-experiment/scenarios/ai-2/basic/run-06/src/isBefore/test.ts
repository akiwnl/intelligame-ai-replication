import { isBefore } from "./index";

describe("isBefore", () => {
  it("returns true when first date is earlier", () => {
    expect(isBefore(new Date(1985, 0, 1), new Date(1990, 0, 1))).toBe(true);
  });
  it("returns false when first date is later", () => {
    expect(isBefore(new Date(1995, 5, 15), new Date(1990, 5, 15))).toBe(false);
  });
});
