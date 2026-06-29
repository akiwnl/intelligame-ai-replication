import { addDays } from "./index";

describe("addDays", () => {
  it("adds the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 10);
    expect(result.getDate()).toBe(11);
  });

  it("handles edge cases", () => {
    const date = new Date(2014, 11, 31);
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2015);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(1);
  });
});
