import { isBefore } from "./index";

describe("isBefore", () => {
  it("detects when first date is before second", () => {
    expect(isBefore(new Date(1987, 1, 11), new Date(1989, 6, 10))).toBe(true);
  });
  it("returns false when not before", () => {
    expect(isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))).toBe(false);
  });
});
