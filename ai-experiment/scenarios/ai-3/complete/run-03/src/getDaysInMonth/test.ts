import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("gets the number of days in a month", () => {
    const date = new Date(2000, 1);
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("handles non-date input", () => {
    const date = "2000-02-01";
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("handles timestamp input", () => {
    const date = 949485600000;
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });
});
