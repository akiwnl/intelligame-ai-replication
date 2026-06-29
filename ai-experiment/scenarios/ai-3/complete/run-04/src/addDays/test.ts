import { addDays } from "./index";

describe("addDays", () => {
  it("adds days to a date", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 10);
    expect(result.getDate()).toBe(11);
  });

  it("handles negative days", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, -10);
    expect(result.getDate()).toBe(21);
  });

  it("handles zero days", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 0);
    expect(result.getDate()).toBe(1);
  });

  it("handles non-date input", () => {
    const result = addDays("2014-09-01", 10);
    expect(result.getDate()).toBe(11);
  });
});
