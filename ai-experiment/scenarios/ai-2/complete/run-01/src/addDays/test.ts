import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive days", () => {
    const result = addDays(new Date(2020, 0, 1), 30);
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(31);
  });

  it("adds negative days", () => {
    const result = addDays(new Date(2020, 0, 1), -1);
    expect(result.getFullYear()).toBe(2019);
    expect(result.getMonth()).toBe(11);
    expect(result.getDate()).toBe(31);
  });

  it("accepts timestamp", () => {
    const ts = Date.UTC(2020, 5, 15);
    const result = addDays(ts, 5);
    expect(result.getUTCDate()).toBe(20);
  });

  it("accepts date string", () => {
    const result = addDays("2020-02-28T00:00:00.000Z", 1);
    expect(result.toISOString()).toBe("2020-02-29T00:00:00.000Z");
  });

  it("returns Invalid Date when input is invalid", () => {
    const result = addDays("invalid-date", 5);
    expect(isNaN(result.getTime())).toBe(true);
  });
});
