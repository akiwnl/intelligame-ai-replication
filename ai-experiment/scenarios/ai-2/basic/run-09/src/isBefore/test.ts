import { isBefore } from "./index";

describe("isBefore", () => {
  it("detects earlier date", () => {
    expect(isBefore(new Date(1985, 0, 1), new Date(1990, 0, 1))).toBe(true);
  });

  it("detects later date", () => {
    expect(isBefore(new Date(1995, 0, 1), new Date(1990, 0, 1))).toBe(false);
  });
});
