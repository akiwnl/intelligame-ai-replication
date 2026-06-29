import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive days", () => {
    const result = addDays(new Date(2020, 0, 1), 30);
    expect(result).toEqual(new Date(2020, 0, 31));
  });

  it("adds negative days", () => {
    const result = addDays(new Date(2020, 0, 15), -10);
    expect(result).toEqual(new Date(2020, 0, 5));
  });

  it("crosses month boundary", () => {
    const result = addDays(new Date(2020, 0, 31), 1);
    expect(result).toEqual(new Date(2020, 1, 1));
  });

  it("crosses year boundary (leap year)", () => {
    const result = addDays(new Date(2019, 11, 31), 1);
    expect(result).toEqual(new Date(2020, 0, 1));
  });

  it("handles timestamp input", () => {
    const ts = 1609459200000; // 2021-01-01T00:00:00.000Z
    const result = addDays(ts, 5);
    expect(result).toEqual(new Date(2021, 0, 6));
  });

  it("returns Invalid Date when input is invalid", () => {
    const result = addDays(new Date("invalid"), 5);
    expect(result.getTime()).toBeNaN();
  });
});
