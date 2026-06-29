import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive days within the same month", () => {
    const result = addDays(new Date(2021, 0, 10), 5);
    expect(result).toEqual(new Date(2021, 0, 15));
  });

  it("adds days crossing month boundary", () => {
    const result = addDays(new Date(2021, 0, 31), 1);
    expect(result).toEqual(new Date(2021, 1, 1));
  });

  it("adds days crossing year boundary (leap year)", () => {
    const result = addDays(new Date(2019, 11, 31), 366); // 2020 is leap
    expect(result).toEqual(new Date(2021, 11, 31));
  });

  it("adds negative days", () => {
    const result = addDays(new Date(2021, 2, 1), -1);
    expect(result).toEqual(new Date(2021, 1, 28));
  });

  it("accepts timestamp as input", () => {
    const ts = new Date(2022, 5, 15).getTime();
    const result = addDays(ts, 10);
    expect(result).toEqual(new Date(2022, 5, 25));
  });

  it("returns Invalid Date when input is invalid", () => {
    const result = addDays("invalid-date", 5);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
