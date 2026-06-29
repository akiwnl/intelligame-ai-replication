import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive days correctly", () => {
    const base = new Date(Date.UTC(2020, 0, 1)); // 2020-01-01
    const result = addDays(base, 10);
    expect(result.toISOString()).toBe("2020-01-11T00:00:00.000Z");
  });

  it("adds negative days correctly (subtract)", () => {
    const base = new Date(Date.UTC(2020, 0, 10));
    const result = addDays(base, -5);
    expect(result.toISOString()).toBe("2020-01-05T00:00:00.000Z");
  });

  it("crosses month boundary", () => {
    const base = new Date(Date.UTC(2020, 0, 31));
    const result = addDays(base, 1);
    expect(result.toISOString()).toBe("2020-02-01T00:00:00.000Z");
  });

  it("crosses year boundary (leap year)", () => {
    const base = new Date(Date.UTC(2019, 11, 31));
    const result = addDays(base, 1);
    expect(result.toISOString()).toBe("2020-01-01T00:00:00.000Z");
  });

  it("handles timestamp input", () => {
    const ts = Date.UTC(2021, 5, 15);
    const result = addDays(ts, 2);
    expect(result.getUTCDate()).toBe(17);
  });

  it("preserves constructor type (UTCDate like)", () => {
    class MyDate extends Date {}
    const my = new MyDate(Date.UTC(2022, 2, 3));
    const result = addDays(my, 1);
    expect(result instanceof MyDate).toBe(true);
    expect(result.getUTCDate()).toBe(4);
  });
});
