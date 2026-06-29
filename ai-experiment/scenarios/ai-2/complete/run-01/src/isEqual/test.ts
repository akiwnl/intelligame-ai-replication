import { isEqual } from "./index";

describe("isEqual", () => {
  it("detects identical timestamps", () => {
    const d = new Date(2020, 0, 1, 12, 0, 0, 0);
    expect(isEqual(d, d.getTime())).toBe(true);
  });

  it("detects difference in milliseconds", () => {
    const a = new Date(2020, 0, 1, 0, 0, 0, 0);
    const b = new Date(2020, 0, 1, 0, 0, 0, 1);
    expect(isEqual(a, b)).toBe(false);
  });

  it("handles string inputs", () => {
    expect(isEqual("2022-03-01T00:00:00.000Z", "2022-03-01T00:00:00.000Z")).toBe(
      true,
    );
  });

  it("invalid dates are not equal", () => {
    expect(isEqual("invalid", "invalid")).toBe(false);
  });
});
