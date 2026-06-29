import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true for identical timestamps", () => {
    const a = new Date(2020, 5, 15, 12, 0, 0, 0);
    const b = new Date(a.getTime());
    expect(isEqual(a, b)).toBe(true);
  });

  it("returns false for different timestamps", () => {
    expect(isEqual(new Date(2020, 5, 15, 12, 0, 0, 0), new Date(2020, 5, 15, 12, 0, 0, 1))).toBe(
      false
    );
  });
});
