import { isBefore } from "./index";

describe("isBefore", () => {
  it("detects earlier date", () => {
    expect(isBefore(new Date(2020, 0, 1), new Date(2020, 0, 2))).toBe(true);
  });

  it("equal dates return false", () => {
    const d = new Date(2020, 5, 15);
    expect(isBefore(d, d)).toBe(false);
  });

  it("handles timestamps and strings", () => {
    const earlier = Date.UTC(2020, 5, 1);
    const later = Date.UTC(2020, 5, 2);
    expect(isBefore(earlier, later)).toBe(true);
    expect(isBefore("2020-06-01T00:00:00Z", "2020-06-02T00:00:00Z")).toBe(true);
  });
});
