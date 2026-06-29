import { isAfter } from "./index";

describe("isAfter", () => {
  it("detects later dates", () => {
    expect(isAfter(new Date(1990, 0, 1), new Date(1989, 11, 31))).toBe(true);
  });

  it("returns false when not after", () => {
    expect(isAfter(new Date(1980, 0, 1), new Date(1990, 0, 1))).toBe(false);
    expect(isAfter(new Date(2000, 5, 5), new Date(2000, 5, 5))).toBe(false);
  });
});
