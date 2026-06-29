import { isAfter } from "./index";

describe("isAfter", () => {
  it("detects later date", () => {
    expect(isAfter(new Date(2021, 5, 10), new Date(2020, 5, 10))).toBe(true);
  });

  it("detects earlier date as false", () => {
    expect(isAfter(new Date(2019, 0, 1), new Date(2020, 0, 1))).toBe(false);
  });
});
