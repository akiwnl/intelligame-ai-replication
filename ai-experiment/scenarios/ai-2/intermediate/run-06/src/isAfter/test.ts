import { isAfter } from "./index";

describe("isAfter", () => {
  it("returns true when first date is later", () => {
    expect(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))).toBe(true);
  });
  it("returns false otherwise", () => {
    expect(isAfter(new Date(1985, 0, 1), new Date(1990, 0, 1))).toBe(false);
  });
});
