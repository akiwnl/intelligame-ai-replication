import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive days", () => {
    const result = addDays(new Date(2020, 0, 1), 5);
    expect(result).toEqual(new Date(2020, 0, 6));
  });

  it("adds negative days", () => {
    const result = addDays(new Date(2020, 0, 10), -3);
    expect(result).toEqual(new Date(2020, 0, 7));
  });

  it("accepts timestamp", () => {
    const ts = new Date(2020, 5, 15).getTime();
    const result = addDays(ts, 1);
    expect(result).toEqual(new Date(2020, 5, 16));
  });
});
