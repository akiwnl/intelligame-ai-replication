import { isAfter } from "./index";

describe("isAfter", () => {
  it("detects later date", () => {
    expect(isAfter(new Date(2022, 5, 10), new Date(2022, 5, 9))).toBe(true);
  });

  it("detects equal dates as false", () => {
    const d = new Date(2022, 0, 1);
    expect(isAfter(d, d)).toBe(false);
  });

  it("handles timestamps and strings", () => {
    const later = Date.UTC(2023, 0, 1);
    const earlier = Date.UTC(2022, 0, 1);
    expect(isAfter(later, earlier)).toBe(true);
    expect(isAfter("2023-01-01T00:00:00Z", "2022-01-01T00:00:00Z")).toBe(true);
  });
});
