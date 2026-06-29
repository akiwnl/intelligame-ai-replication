import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive amount of days", () => {
    const result = addDays(new Date(2014, 8, 1), 10);
    expect(result).toEqual(new Date(2014, 8, 11));
  });

  it("adds negative amount of days", () => {
    const result = addDays(new Date(2020, 0, 5), -3);
    expect(result).toEqual(new Date(2020, 0, 2));
  });

  it("accepts timestamp as input", () => {
    const ts = new Date(2021, 5, 15).getTime();
    const result = addDays(ts, 1);
    expect(result).toEqual(new Date(2021, 5, 16));
  });
});
