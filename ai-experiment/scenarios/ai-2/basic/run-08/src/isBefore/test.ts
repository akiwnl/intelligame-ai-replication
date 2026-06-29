import { isBefore } from "./index";

describe("isBefore", () => {
  it("detects earlier date", () => {
    expect(isBefore(new Date(2018, 3, 1), new Date(2019, 3, 1))).toBe(true);
  });

  it("detects later date as false", () => {
    expect(isBefore(new Date(2022, 0, 1), new Date(2021, 0, 1))).toBe(false);
  });
});
