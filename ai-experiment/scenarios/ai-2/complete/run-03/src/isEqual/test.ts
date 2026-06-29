import { isEqual } from "./index";

describe("isEqual", () => {
  it("detects equality", () => {
    const a = new Date(2014, 6, 2, 6, 30, 45, 0);
    const b = new Date(2014, 6, 2, 6, 30, 45, 0);
    expect(isEqual(a, b)).toBe(true);
  });

  it("detects inequality by milliseconds", () => {
    const a = new Date(2014, 6, 2, 6, 30, 45, 0);
    const b = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(a, b)).toBe(false);
  });

  it("handles timestamps and strings", () => {
    const ts = Date.UTC(2020, 0, 1);
    expect(isEqual(ts, "2020-01-01T00:00:00.000Z")).toBe(true);
  });

  it("returns false for invalid dates", () => {
    expect(isEqual("bad" as any, new Date())).toBe(false);
    expect(isEqual(new Date(), "bad" as any)).toBe(false);
  });
});
