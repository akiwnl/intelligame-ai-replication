import { isBefore } from "./index";

describe("isBefore", () => {
  it("detects earlier date", () => {
    expect(isBefore(new Date(1970, 0, 1), new Date(1980, 0, 1))).toBe(true);
  });

  it("detects not earlier date", () => {
    expect(isBefore(new Date(2000, 0, 1), new Date(1999, 11, 31))).toBe(false);
  });
});
