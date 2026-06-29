import { isEqual } from "./index";

describe("isEqual", () => {
  it("detects equal timestamps", () => {
    const d = new Date(2020, 5, 15, 12, 0, 0, 0);
    expect(isEqual(d, new Date(d.getTime()))).toBe(true);
  });

  it("detects different timestamps", () => {
    expect(isEqual(new Date(2020, 0, 1), new Date(2020, 0, 2))).toBe(false);
  });
});
