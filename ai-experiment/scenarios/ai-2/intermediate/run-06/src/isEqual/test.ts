import { isEqual } from "./index";

describe("isEqual", () => {
  it("detects equal timestamps", () => {
    const d = new Date(2021, 3, 15, 12, 0, 0, 0);
    expect(isEqual(d, d.getTime())).toBe(true);
  });
  it("detects inequality", () => {
    expect(
      isEqual(
        new Date(2014, 6, 2, 6, 30, 45, 0),
        new Date(2014, 6, 2, 6, 30, 45, 500)
      )
    ).toBe(false);
  });
});
