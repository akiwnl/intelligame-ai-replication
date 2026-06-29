import { isEqual } from "./index";

describe("isEqual", () => {
  it("checks if two dates are equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });

  it("handles non-date input", () => {
    const result = isEqual("2014-07-02T06:30:45.000Z", "2014-07-02T06:30:45.000Z");
    expect(result).toBe(true);
  });
});
