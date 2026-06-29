import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive days correctly across month boundary", () => {
    const result = addDays(new Date(2021, 0, 31), 1);
    expect(result.getFullYear()).toBe(2021);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(1);
  });

  it("adds negative days correctly across year boundary", () => {
    const result = addDays(new Date(2021, 0, 1), -1);
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(11); // December
    expect(result.getDate()).toBe(31);
  });

  it("handles zero amount (returns clone)", () => {
    const original = new Date(2022, 5, 15, 12, 30, 45, 123);
    const result = addDays(original, 0);
    expect(result.getTime()).toBe(original.getTime());
    expect(result).not.toBe(original);
  });

  it("accepts timestamp and string inputs", () => {
    const ts = 1609459200000; // 2021-01-01T00:00:00.000Z
    const resultFromNumber = addDays(ts, 2);
    const resultFromString = addDays(ts.toString(), 2);
    expect(resultFromNumber.getDate()).toBe(3);
    expect(resultFromString.getDate()).toBe(3);
  });

  it("returns Invalid Date when input is invalid", () => {
    const result = addDays("invalid-date", 5);
    expect(isNaN(result.getTime())).toBe(true);
  });
});
