import { isEqual } from "./index";

describe("isEqual", () => {
  it("detects equal timestamps", () => {
    const d = new Date(2021, 3, 5, 12, 0, 0, 0);
    expect(isEqual(d, d.getTime())).toBe(true);
  });

  it("detects unequal timestamps", () => {
    const d1 = new Date(2021, 3, 5, 12, 0, 0, 0);
    const d2 = new Date(2021, 3, 5, 12, 0, 0, 1);
    expect(isEqual(d1, d2)).toBe(false);
  });

  it("handles invalid dates (both NaN -> false)", () => {
    expect(isEqual(new Date("invalid"), new Date("invalid"))).toBe(false);
  });
});
