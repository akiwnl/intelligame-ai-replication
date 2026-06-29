import { isAfter } from "./index";

describe("isAfter", () => {
  it("detects later date", () => {
    expect(isAfter(new Date(2020, 5, 1), new Date(2020, 4, 30))).toBe(true);
  });

  it("returns false when equal", () => {
    const d = new Date(2020, 0, 1);
    expect(isAfter(d, d)).toBe(false);
  });

  it("handles timestamps and strings", () => {
    const ts = Date.UTC(2021, 0, 2);
    expect(isAfter(ts, "2021-01-01T00:00:00.000Z")).toBe(true);
  });

  it("invalid dates return false", () => {
    expect(isAfter("invalid", new Date())).toBe(false);
    expect(isAfter(new Date(), "invalid")).toBe(false);
  });
});
