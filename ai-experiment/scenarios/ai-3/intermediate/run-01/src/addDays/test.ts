import { addDays } from "./index";

describe("addDays", () => {
  it("should add the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 10);
    expect(result.getDate()).toBe(11);
  });

  it("should handle negative amounts", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, -10);
    expect(result.getDate()).toBe(21);
  });

  it("should handle zero amount", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 0);
    expect(result.getDate()).toBe(1);
  });
});
