import { isBefore } from "./index";

describe("isBefore", () => {
  it("checks if the first date is before the second one", () => {
    const date1 = new Date(1987, 1, 11);
    const date2 = new Date(1989, 6, 10);
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("handles non-date input", () => {
    const date1 = "1987-02-11";
    const date2 = "1989-07-10";
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("handles timestamp input", () => {
    const date1 = 536457600000;
    const date2 = 612345600000;
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });
});
