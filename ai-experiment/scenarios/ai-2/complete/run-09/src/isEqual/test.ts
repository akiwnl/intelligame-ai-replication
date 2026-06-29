import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true for identical timestamps", () => {
    const a = new Date(2022, 4, 15, 10, 20, 30, 400);
    const b = new Date(a.getTime());
    expect(isEqual(a, b)).toBe(true);
  });

  it("returns false when milliseconds differ", () => {
    const a = new Date(2022, 4, 15, 10, 20, 30, 0);
    const b = new Date(2022, 4, 15, 10, 20, 30, 1);
    expect(isEqual(a, b)).toBe(false);
  });

  it("accepts number and string inputs", () => {
    const ts = 1609459200000;
    expect(isEqual(ts, ts.toString())).toBe(true);
  });

  it("handles Invalid Date as NaN (both NaN => false)", () => {
    expect(isEqual("bad", "also-bad")).toBe(false);
  });
});
