import { getDay } from "./index";

describe("getDay", () => {
  it("gets the day of the week", () => {
    const date = new Date(2012, 1, 29);
    const result = getDay(date);
    expect(result).toBe(3);
  });

  it("handles non-date input", () => {
    const date = "2012-02-29";
    const result = getDay(date);
    expect(result).toBe(3);
  });

  it("handles timestamp input", () => {
    const date = 1330468800000;
    const result = getDay(date);
    expect(result).toBe(3);
  });
});
