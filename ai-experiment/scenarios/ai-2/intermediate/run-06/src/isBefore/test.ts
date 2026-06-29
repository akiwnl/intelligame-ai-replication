import { isBefore } from "./index";

describe("isBefore", () => {
  it("returns true when first date is earlier", () => {
    expect(isBefore(new Date(1985, 0, 1), new Date(1990, 0, 1))).toBe(true);
  });
  it("returns false otherwise", () => {
    expect(isBefore(new Date(2000, 5, 1), new Date(1999, 5, 1))).toBe(false);
  });
});
