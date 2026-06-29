import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true for identical timestamps", () => {
    const d = new Date(2021, 3, 5, 12, 0, 0, 0);
    expect(isEqual(d, d.getTime())).toBe(true);
  });

  it("detects difference in milliseconds", () => {
    const a = new Date(2021, 3, 5, 12, 0, 0, 0);
    const b = new Date(2021, 3, 5, 12, 0, 0, 1);
    expect(isEqual(a, b)).toBe(false);
  });

  it("handles string inputs", () => {
    const iso = "2022-01-01T00:00:00.000Z";
    expect(isEqual(iso, iso)).toBe(true);
  });

  it("returns false when one date is invalid", () => {
    expect(isEqual(new Date("invalid"), new Date())).toBe(false);
    expect(isEqual(new Date(), new Date("invalid"))).toBe(false);
  });
});
