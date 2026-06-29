import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true for identical timestamps", () => {
    const d = new Date(2020, 5, 15, 12, 0, 0, 0);
    expect(isEqual(d, d)).toBe(true);
  });

  it("returns false for different timestamps", () => {
    expect(isEqual(new Date(2020, 5, 15, 12, 0, 0, 0), new Date(2020, 5, 15, 12, 0, 0, 1))).toBe(
      false,
    );
  });
});
