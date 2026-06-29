import { isBefore } from "./index";

describe("isBefore", () => {
  it("detects earlier date", () => {
    expect(isBefore(new Date(2020, 3, 1), new Date(2020, 3, 2))).toBe(true);
  });

  it("returns false when equal", () => {
    const d = new Date(2020, 0, 1);
    expect(isBefore(d, d)).toBe(false);
  });

  it("handles string and timestamp", () => {
    const ts = Date.UTC(2021, 5, 1);
    expect(isBefore("2021-06-01T00:00:00.000Z", ts)).toBe(false);
  });

  it("invalid inputs return false", () => {
    expect(isBefore("bad", new Date())).toBe(false);
    expect(isBefore(new Date(), "bad")).toBe(false);
  });
});
