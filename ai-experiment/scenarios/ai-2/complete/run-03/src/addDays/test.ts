import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive days correctly", () => {
    const result = addDays(new Date(2014, 8, 1), 10);
    expect(result).toEqual(new Date(2014, 8, 11));
  });

  it("adds negative days correctly", () => {
    const result = addDays(new Date(2020, 0, 15), -5);
    expect(result).toEqual(new Date(2020, 0, 10));
  });

  it("handles month overflow", () => {
    const result = addDays(new Date(2021, 0, 31), 1);
    expect(result).toEqual(new Date(2021, 1, 1));
  });

  it("handles leap year February 29", () => {
    const result = addDays(new Date(2020, 1, 29), 1);
    expect(result).toEqual(new Date(2020, 2, 1));
  });

  it("returns Invalid Date when input is invalid", () => {
    const result = addDays("invalid-date" as any, 5);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
