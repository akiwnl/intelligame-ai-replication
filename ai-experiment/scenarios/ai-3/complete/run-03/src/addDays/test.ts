import { addDays } from "./index";

describe("addDays", () => {
  it("adds the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 10);
    expect(result.getDate()).toBe(11);
  });

  it("handles negative amounts", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, -10);
    expect(result.getDate()).toBe(21);
  });

  it("handles zero amount", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 0);
    expect(result.getDate()).toBe(1);
  });

  it("handles non-date input", () => {
    const date = "2014-09-01";
    const result = addDays(date, 10);
    expect(result.getDate()).toBe(11);
  });

  it("handles timestamp input", () => {
    const date = 1412137200000;
    const result = addDays(date, 10);
    expect(result.getDate()).toBe(11);
  });
});
