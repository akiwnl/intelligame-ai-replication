import { isEqual } from "./index";

describe("isEqual", () => {
  it("detects identical timestamps", () => {
    const a = new Date(2021, 3, 5, 12, 0, 0, 0);
    const b = new Date(a.getTime());
    expect(isEqual(a, b)).toBe(true);
  });

  it("detects different milliseconds", () => {
    const a = new Date(2021, 3, 5, 12, 0, 0, 0);
    const b = new Date(2021, 3, 5, 12, 0, 0, 1);
    expect(isEqual(a, b)).toBe(false);
  });

  it("works with timestamps and strings", () => {
    const ts = Date.UTC(2022, 0, 1);
    expect(isEqual(ts, ts)).toBe(true);
    expect(isEqual("2022-01-01T00:00:00Z", ts)).toBe(true);
  });
});
