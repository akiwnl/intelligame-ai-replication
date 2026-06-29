import { isBefore } from "./index";

describe("isBefore", () => {
  it("returns true when first date is earlier", () => {
    expect(isBefore(new Date(2020, 0, 1), new Date(2020, 0, 2))).toBe(true);
  });

  it("returns false when first date is later", () => {
    expect(isBefore(new Date(2020, 5, 1), new Date(2020, 4, 30))).toBe(false);
  });

  it("returns false when dates are equal", () => {
    const d = new Date(2020, 0, 1);
    expect(isBefore(d, d)).toBe(false);
  });

  it("handles timestamps and strings", () => {
    const ts1 = 1609459200000;
    const ts2 = 1609545600000;
    expect(isBefore(ts1, ts2)).toBe(true);
    expect(isBefore("2021-01-02T00:00:00Z", "2021-01-01T00:00:00Z")).toBe(false);
  });

  it("invalid dates result in false", () => {
    expect(isBefore(new Date("invalid"), new Date())).toBe(false);
    expect(isBefore(new Date(), new Date("invalid"))).toBe(false);
  });
});
