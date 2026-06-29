import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive days", () => {
    const result = addDays(new Date(2014, 8, 1), 10);
    expect(result).toEqual(new Date(2014, 8, 11));
  });

  it("adds negative days", () => {
    const result = addDays(new Date(2014, 8, 10), -5);
    expect(result).toEqual(new Date(2014, 8, 5));
  });

  it("accepts timestamp", () => {
    const ts = new Date(2020, 0, 1).getTime();
    const result = addDays(ts, 1);
    expect(result).toEqual(new Date(2020, 0, 2));
  });
});
