import { addDays } from "./index";

describe("addDays", () => {
  it("adds days to a date", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 10);
    expect(result.getDate()).toBe(11);
  });

  it("handles edge cases", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, -10);
    expect(result.getDate()).toBe(22);
  });
});
