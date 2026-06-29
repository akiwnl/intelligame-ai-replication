import { getDate } from "./index";

describe("getDate", () => {
  it("gets the day of the month", () => {
    const date = new Date(2012, 1, 29);
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("handles non-date input", () => {
    const date = "2012-02-29";
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("handles timestamp input", () => {
    const date = 1330468800000;
    const result = getDate(date);
    expect(result).toBe(29);
  });
});
