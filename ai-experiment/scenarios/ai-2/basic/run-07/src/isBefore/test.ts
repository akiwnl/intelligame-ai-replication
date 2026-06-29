import { isBefore } from "./index";

describe("isBefore", () => {
  it("detects earlier dates", () => {
    expect(isBefore(new Date(1980, 0, 1), new Date(1990, 0, 1))).toBe(true);
  });

  it("returns false when not before", () => {
    expect(isBefore(new Date(1990, 0, 1), new Date(1980, 0, 1))).toBe(false);
    expect(isBefore(new Date(2000, 5, 5), new Date(2000, 5, 5))).toBe(false);
  });
});
