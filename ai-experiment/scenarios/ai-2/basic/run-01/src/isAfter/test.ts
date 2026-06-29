import { isAfter } from "./index";

describe("isAfter", () => {
  it("detects when first date is after second", () => {
    expect(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))).toBe(true);
  });
  it("returns false when not after", () => {
    expect(isAfter(new Date(1987, 1, 11), new Date(1989, 6, 10))).toBe(false);
  });
});
