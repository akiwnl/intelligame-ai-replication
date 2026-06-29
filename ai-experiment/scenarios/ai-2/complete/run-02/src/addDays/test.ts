import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive days correctly", () => {
    const start = new Date(2020, 0, 31); // Jan 31 2020
    const result = addDays(start, 1);
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(1);
  });

  it("adds negative days correctly", () => {
    const start = new Date(2020, 2, 1); // Mar 1 2020
    const result = addDays(start, -1);
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(29); // leap year
  });

  it("works with timestamps and strings", () => {
    const ts = Date.UTC(2021, 5, 15);
    const result = addDays(ts, 10);
    expect(result.getUTCMonth()).toBe(5);
    expect(result.getUTCDate()).toBe(25);
  });

  it("preserves subclass constructor", () => {
    class MyDate extends Date {}
    const d = new MyDate(2022, 0, 1);
    const res = addDays(d, 5);
    expect(res instanceof MyDate).toBe(true);
    expect(res.getDate()).toBe(6);
  });
});
