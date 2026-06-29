import { isBefore } from "./index";

describe("isBefore", () => {
  it("detects earlier date", () => {
    expect(isBefore(new Date(1985, 0, 1), new Date(1990, 0, 1))).toBe(true);
  });

  it("detects later date", () => {
    expect(isBefore(new Date(1995, 5, 20), new Date(1990, 5, 20))).toBe(false);
  });

  it("returns false when equal", () => {
    const d = new Date(2000, 0, 1);
    expect(isBefore(d, d)).toBe(false);
  });

  it("handles mixed types", () => {
    const ts = Date.UTC(2020, 5, 15);
    expect(isBefore(ts, "2020-06-16T00:00:00.000Z")).toBe(true);
  });

  it("returns false for invalid dates", () => {
    expect(isBefore("bad" as any, new Date())).toBe(false);
    expect(isBefore(new Date(), "bad" as any)).toBe(false);
  });
});
