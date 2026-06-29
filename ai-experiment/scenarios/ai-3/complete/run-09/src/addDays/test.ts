import { addDays } from "./index";

describe("addDays", () => {
  it("adds the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 10);
    expect(result).toEqual(new Date(2014, 8, 11));
  });

  it("handles negative amounts", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, -10);
    expect(result).toEqual(new Date(2014, 7, 22));
  });

  it("handles zero amount", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 0);
    expect(result).toEqual(new Date(2014, 8, 1));
  });

  it("handles non-integer amounts", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 10.5);
    expect(result).toEqual(new Date(2014, 8, 11, 12, 0, 0));
  });
});
