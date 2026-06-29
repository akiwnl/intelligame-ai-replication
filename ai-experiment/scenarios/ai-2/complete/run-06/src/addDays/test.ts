import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive days", () => {
    const result = addDays(new Date(2014, 8, 1), 10);
    expect(result).toEqual(new Date(2014, 8, 11));
  });

  it("adds negative days", () => {
    const result = addDays(new Date(2020, 0, 15), -5);
    expect(result).toEqual(new Date(2020, 0, 10));
  });

  it("crosses month boundary", () => {
    const result = addDays(new Date(2021, 0, 31), 1);
    expect(result).toEqual(new Date(2021, 1, 1));
  });

  it("crosses year boundary (leap year)", () => {
    const result = addDays(new Date(2019, 11, 31), 1);
    expect(result).toEqual(new Date(2020, 0, 1));
  });

  it("accepts timestamp input", () => {
    const ts = Date.UTC(2022, 5, 1);
    const result = addDays(ts, 2);
    expect(result).toEqual(new Date(Date.UTC(2022, 5, 3)));
  });

  it("returns a new Date instance", () => {
    const original = new Date(2022, 3, 10);
    const result = addDays(original, 0);
    expect(result).not.toBe(original);
    expect(result).toEqual(original);
  });
});
