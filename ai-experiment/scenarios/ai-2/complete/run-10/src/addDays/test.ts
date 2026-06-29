import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive days", () => {
    const result = addDays(new Date(2020, 0, 31), 1);
    expect(result).toEqual(new Date(2020, 1, 1));
  });

  it("adds negative days", () => {
    const result = addDays(new Date(2020, 2, 1), -1);
    expect(result).toEqual(new Date(2020, 1, 29));
  });

  it("handles month boundary (leap year)", () => {
    const result = addDays(new Date(2020, 1, 28), 1);
    expect(result).toEqual(new Date(2020, 1, 29));
  });

  it("handles large amount", () => {
    const result = addDays(new Date(2020, 0, 1), 365);
    expect(result).toEqual(new Date(2021, 0, 1));
  });

  it("accepts timestamp and string", () => {
    const ts = 1609459200000; // 2021-01-01T00:00:00.000Z
    expect(addDays(ts, 1)).toEqual(new Date(ts + 86400000));
    expect(addDays("2021-01-01T00:00:00.000Z", 2)).toEqual(
      new Date("2021-01-03T00:00:00.000Z")
    );
  });
});
