import { getDay } from "./index";

describe("getDay", () => {
  it("gets the day of the week", () => {
    const date = new Date(2012, 1, 29);
    const result = getDay(date);
    expect(result).toBe(3);
  });

  it("handles non-date input", () => {
    const result = getDay("2012-02-29");
    expect(result).toBe(3);
  });
});
