import { isAfter } from "./index";

describe("isAfter", () => {
  it("checks if the first date is after the second one", () => {
    const date1 = new Date(1989, 6, 10);
    const date2 = new Date(1987, 1, 11);
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  it("handles non-date input", () => {
    const date1 = "1989-07-10";
    const date2 = "1987-02-11";
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  it("handles timestamp input", () => {
    const date1 = 612345600000;
    const date2 = 536457600000;
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });
});
